import type { TableColumnsType } from "../../types";

export const AlertHistoryColumns: TableColumnsType[] = [
  { title: "発生時刻", key: "supplierCode", dataIndex: "regDtm" },
  { title: "完了時刻", key: "supplierCode", dataIndex: "finishedAt" },
  { title: "受入", key: "supplierCode", dataIndex: "acceptance" },
  { title: "仕入先", key: "supplierCode", dataIndex: "supplierCode" },
  { title: "工区", key: "supplierPlant", dataIndex: "supplierPlant" },
  { title: "出荷場", key: "shipDock", dataIndex: "shipDock" },
  { title: "品番", key: "partNo", dataIndex: "partNo" },
  { title: "コース", key: "course", dataIndex: "course" },
  { title: "所在地", key: "location", dataIndex: "location" },
];
