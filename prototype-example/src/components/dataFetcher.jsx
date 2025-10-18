import { fakeServerData } from "../data/fakeServerData";

const DataFetcher = ({ prop }) => {
  return fakeServerData[prop];
};
export default DataFetcher;
