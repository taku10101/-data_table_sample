import type { InventoryTrend2DataType } from "../types";

export const inventoryTrend2Data: InventoryTrend2DataType[] = [
  {
    bcNo: 1,
    date: "01-01",
    time: "08:00:00",
    boxCapacity: 10,
    boxStockCount: 10,
    fractionStockCount: 0,
    stockCount: 100,
    tConsumptions: 10,
    count: 10,
    orderNo: 1,
    mros: 10,
    excessFlag: true,
    shortageFlag: false,
  },

  {
    bcNo: 2,
    date: "01-01",
    time: "08:00:00",
    boxCapacity: 10,
    boxStockCount: 10,
    fractionStockCount: 0,
    stockCount: 100,
    tConsumptions: 10,
    count: 10,
    orderNo: 1,
    mros: 10,
    excessFlag: true,
    shortageFlag: true,
  },
];
