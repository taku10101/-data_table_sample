export interface TakeoutDataType {
  check: string;
  productCategory: string;
  productNumber: string;
  orderDate: string;
  count: number;
  orderId: string;
  mros: number;
  arrivalTime: string;
  orderSheetCount: number;
  receivedSheetCount: number;
  orderCount: number;
  receivedCount: number;
  dailyForecast: number;
  dailyTotalOrderCount: number;
}

export interface ProductionScheduleDataType {
  process: string;
  count: number;
}
