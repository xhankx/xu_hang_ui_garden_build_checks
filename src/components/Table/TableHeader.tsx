import React from 'react';
import { type TableHeaderProps } from './Table.types';

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <thead>{children}</thead>;
};

export default TableHeader;
