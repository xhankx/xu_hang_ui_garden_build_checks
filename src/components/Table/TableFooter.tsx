import React from 'react';
import { type TableFooterProps } from './Table.types';

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <tfoot>{children}</tfoot>;
};

export default TableFooter;
