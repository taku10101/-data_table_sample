import type { DataSourceType, TableColumnsType } from "../../types";
//TODO:画面のほうのPRがマージされたらindex.tsの型を修正する
import type { CsvDataType, CsvHeaderType } from "../../types/csv";
type objValueType = string | Date | number;

export const transform_csv = (
  tableColumns: TableColumnsType[],
  data: DataSourceType[]
): { headers: CsvHeaderType[]; csvData: CsvDataType[] } => {
  // CSVのヘッダーを作成
  const headers: CsvHeaderType[] = tableColumns.map((column) => ({
    label: column.title,
    key: column.key,
  }));

  // データ内のnumber型をstringに変換
  const csvData: CsvDataType[] = data.map((item) => {
    const transformedItem: CsvDataType = {};

    // 各プロパティを確認し、number型の場合はstringに変換
    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        const value = item[key as keyof DataSourceType] as objValueType;
        transformedItem[key] =
          typeof value === "number" ? value.toString() : value;
      }
    }
    return transformedItem;
  });

  return { headers, csvData };
};
