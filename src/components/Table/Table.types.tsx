export interface TableProps {
    children: React.ReactNode;
  }
  
  export interface TableHeaderProps {
    children: React.ReactNode;
  }
  
  export interface TableRowProps {
    children: React.ReactNode;
  }
  
  export interface TableCellProps {
    children: React.ReactNode;
    isHeader?: boolean;
    colSpan?: number; // Add colSpan as an optional prop
  }
  
  export interface TableFooterProps {
    children: React.ReactNode;
  }
  