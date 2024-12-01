import React from 'react';
import { type TableProps } from './Table.types';

const Table: React.FC<TableProps> = ({ children }) => {
  return <table>{children}</table>;
};

export default Table;
