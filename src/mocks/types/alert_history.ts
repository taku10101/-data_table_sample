export interface AlertHistoryDataType {
  regDtm: string; //発生時刻
  finishedAt: string; //完了時刻
  acceptance: string; //受入
  supplierCode: string; //仕入先
  supplierPlant: string; //仕入先工区
  shipDock: string; //出荷場
  partNo: string; //品番
  course: string;
  location: string; //所在地
}
