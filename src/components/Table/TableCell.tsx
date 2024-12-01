import React from 'react';
import { type TableCellProps } from './Table.types';

const TableCell: React.FC<TableCellProps> = ({ children, isHeader }) => {
  return isHeader ? <th>{children}</th> : <td>{children}</td>;
};

export default TableCell;
