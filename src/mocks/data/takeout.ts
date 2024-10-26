import type { ProductionScheduleDataType, TakeoutDataType } from "../types";

export const takeoutData: TakeoutDataType[] = [
  {
    check: "✴︎",
    productCategory: "号口",
    productNumber: "1",
    orderDate: "2021-01-01",
    count: 10,
    orderId: "1",
    mros: 1,
    arrivalTime: "2021-01-01",
    orderSheetCount: 10,
    receivedSheetCount: 10,
    orderCount: 0,
    receivedCount: 0,
    dailyForecast: 0,
    dailyTotalOrderCount: 0,
  },
  {
    check: "",
    productCategory: "号口",
    productNumber: "2",
    orderDate: "2021-01-02",
    count: 10,
    orderId: "2",
    mros: 2,
    arrivalTime: "2021-01-02",
    orderSheetCount: 10,
    receivedSheetCount: 10,
    orderCount: 0,
    receivedCount: 0,
    dailyForecast: 0,
    dailyTotalOrderCount: 0,
  },
];

export const productionScheduleData: ProductionScheduleDataType[] = [
  {
    process: "受入",
    count: 10,
  },
  {
    process: "Pレーン",
    count: 10,
  },
  {
    process: "Pレーン->Bレーン運送中",
    count: 10,
  },
  {
    process: "Bレーン",
    count: 10,
  },
  {
    process: "Bレーン->棚運送中",
    count: 10,
  },
  {
    process: "フローラック",
    count: 10,
  },
  {
    process: "Total",
    count: 10,
  },
];
