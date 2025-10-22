import { createContext, useContext, useMemo } from "react";
import type { TableProviderProps } from "../types/index.type.ts";
import type { MRT_TableOptions, MRT_TableState } from "mantine-react-table";

const defaultInitialState: Partial<MRT_TableState<any>> = {
  pagination: { pageIndex: 0, pageSize: 10 },
  columnVisibility: {},
};

const defaultTableOptions: Partial<MRT_TableOptions<any>> = {
  enablePagination: true,
  initialState: defaultInitialState,
  enableSorting: true,
  enableColumnFilters: true,
  mantineTableProps: {},
};

type TableContextValue = {
  props: Partial<MRT_TableOptions<any>>;
};

const TableContext = createContext<TableContextValue | undefined>(undefined);

const deepMerge = <T extends any>(a: Partial<T>, b: Partial<T>): Partial<T> => {
  const out: any = { ...(a as any) };
  for (const key of Object.keys(b as any)) {
    const bv = (b as any)[key];
    const av = (out as any)[key];
    if (Array.isArray(av) && Array.isArray(bv)) {
      out[key] = bv;
    } else if (av && typeof av === "object" && bv && typeof bv === "object") {
      out[key] = deepMerge(av, bv);
    } else {
      out[key] = bv;
    }
  }
  return out;
};

export const TableProvider = <T,>({
  children,
  props: defaults,
}: TableProviderProps<T>) => {
  const merged = useMemo(
    () =>
      deepMerge(defaultTableOptions as any, (defaults ?? {}) as any) as Partial<
        MRT_TableOptions<T>
      >,
    [defaults]
  );
  return (
    <TableContext.Provider
      value={{ props: merged as Partial<MRT_TableOptions<any>> }}
    >
      {children}
    </TableContext.Provider>
  );
};

TableProvider.displayName = "TableProvider";

// Hook for consumers to merge defaults with their own options
export function useTableDefaults<T>(
  overrides?: Partial<MRT_TableOptions<T>>
): Partial<MRT_TableOptions<T>> {
  const ctx = useContext(TableContext);
  if (!ctx) {
    throw new Error(
      "Wrap your application with <TableProvider> from '@inexture/table/providers'."
    );
  }

  const base = (ctx.props ?? {}) as Partial<MRT_TableOptions<T>>;
  if (!overrides) return base;
  return deepMerge(base as any, overrides as any) as Partial<
    MRT_TableOptions<T>
  >;
}
