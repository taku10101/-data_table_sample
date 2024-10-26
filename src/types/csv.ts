export type CsvDataType = {
  [key: string]: string | Date;
};

export interface CsvHeaderType {
  label: string;
  key: string;
}

export interface CsvObject {
  headers: CsvHeaderType[];
  data: CsvDataType[];
}
