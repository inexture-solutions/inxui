import { MRT_ColumnDef, MRT_TableOptions } from "mantine-react-table";

export interface TableProviderProps<T = any> {
  children: React.ReactNode;
  props?: Partial<MRT_TableOptions<T>>;
}

export interface DataTableProps<T = any> {
  columns: MRT_ColumnDef<T>[];
  data: T[];
}
