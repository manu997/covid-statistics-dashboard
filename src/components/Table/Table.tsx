import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo } from 'react';
import './Table.css';

export type Column<T> = {
  accessor: keyof T;
  header: string;
  cell?: (value: any) => JSX.Element;
  size?: number;
  align?: 'left' | 'center' | 'right';
};

export type ColumnsDef<T> = Column<T>[];

interface TableProps<T> {
  data: T[];
  columns: ColumnsDef<T>;
}

const Table = <T,>({ data, columns }: TableProps<T>) => {
  const columnHelper = createColumnHelper<T>();
  const columnsDef = useMemo(
    () =>
      columns?.map((col) =>
        columnHelper.accessor(col.accessor as any, {
          header: col.header,
          cell: (info) =>
            col.cell ? col.cell(info.getValue()) : info.getValue(),
          size: col.size,
          meta: {
            align: col.align,
          },
        })
      ),
    [columnHelper, columns]
  );

  const table = useReactTable({
    data,
    columns: columnsDef,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} style={{ width: `${header.getSize()}px` }}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  align={(cell.column.columnDef.meta as any)?.align || 'left'}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
