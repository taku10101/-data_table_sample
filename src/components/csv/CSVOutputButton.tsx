import { Button } from "antd";
import type { DataSourceType, TableColumnsType } from "../../types";
import { handleDownload } from "./csv-export";

type Props = {
  filename: string;
  tableColumns: TableColumnsType[];
  data: DataSourceType[];
};
export const CSVOutputButton: React.FC<Props> = (props: Props) => {
  return <Button onClick={() => handleDownload(props)}>CSV出力</Button>;
};
