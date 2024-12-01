import React from 'react';
import { type TableCellProps } from './Table.types';

const TableCell: React.FC<TableCellProps> = ({ children, isHeader, colSpan }) => {
  return isHeader ? (
    <th colSpan={colSpan}>{children}</th>
  ) : (
    <td colSpan={colSpan}>{children}</td>
  );
};

export default TableCell;
