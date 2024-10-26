import { stringify } from "csv-stringify/browser/esm/sync";
import type { DataSourceType, TableColumnsType } from "../../types";
import { transform_csv } from "./transform_csv";

type Props = {
  filename: string;
  tableColumns: TableColumnsType[];
  data: DataSourceType[];
};

export const handleDownload = (props: Props) => {
  const { filename, tableColumns, data } = props;
  const { headers, csvData } = transform_csv(tableColumns, data);

  const csv = {
    fields: headers.map((header) => header.label),
    data: csvData.map((row) => headers.map((header) => row[header.key])),
  };
  const csv_data = stringify(csv.data, { header: true, columns: csv.fields });

  const bom = "\uFEFF";
  const blob = new Blob([bom + csv_data], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
