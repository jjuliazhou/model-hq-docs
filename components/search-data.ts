import type { SearchResult } from "./search-result";
import { v0SearchData } from "./v0-search-data";
import { v1SearchData } from "./v1-search-data";
import { serverSearchData } from "./server-search-data";

const searchData: SearchResult[] = [
  // V0 Documentation
  ...v0SearchData,
  
  // V1 Documentation
  ...v1SearchData,

  // Server / Developer Documentation
  ...serverSearchData,
];

export default searchData;

