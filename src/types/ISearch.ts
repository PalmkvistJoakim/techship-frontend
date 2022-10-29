export interface ISearchContext {
  searchQuery: string;
  onChange: (searchQuery: string) => void;
}
