import { DataTableProps } from "../types/index.type.ts";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { useTableDefaults } from "../providers";

const DataTable = <T,>({ columns, data }: DataTableProps<T>) => {
  const defaults = useTableDefaults<T>();

  const table = useMantineReactTable<T>({
    ...defaults,
    columns,
    data,
  });

  return (
    <div>
      <MantineReactTable table={table} />
    </div>
  );
};

DataTable.displayName = "DataTable";

export { DataTable };
