import { IVideoask } from "../types/VideoAsk";

export function Paginate(
  data: IVideoask[],
  pageSize: number,
  selectedPage: number
) {
  const startIndex = (selectedPage - 1) * pageSize;
  const endIndex = selectedPage * pageSize;
  return data.slice(startIndex, endIndex);
}
