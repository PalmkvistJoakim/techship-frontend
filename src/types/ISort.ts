export interface ISort {
  path: string;
  order: boolean | "asc" | "desc";
}

export interface ISorts {
  sortColumn: ISort;
  onSort: (sortColumn: ISort) => void;
  onSortOrder: (order: boolean | "asc" | "desc") => void;
}
