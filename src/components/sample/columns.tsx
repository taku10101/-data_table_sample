import { Checkbox } from "antd";
import type { TableColumnsType } from "../../types";
export const sampleColumns = (): TableColumnsType[] => [
  {
    title: "チェック",
    key: "check",
    dataIndex: "check",
    render: () => <Checkbox />,
  },
  { title: "受入", key: "supplierCode", dataIndex: "acceptance" },
  {
    title: "仕入先",
    key: "supplierCode",
    children: [
      {
        title: "仕入先名",
        key: "supplierName",
        dataIndex: "supplierName",
      },
      {
        title: "仕入先コード",
        key: "supplierCode",
        dataIndex: "supplierCode",
      },
    ],
  },
  { title: "工区", key: "supplierPlant", dataIndex: "supplierPlant" },
  { title: "出荷場", key: "shipDock", dataIndex: "shipDock" },
  { title: "背番号", key: "kanbanNo", dataIndex: "kanbanNo" },
  { title: "品番", key: "partNo", dataIndex: "partNo" },
  { title: "コース", key: "course", dataIndex: "course" },
  { title: "所在地", key: "location", dataIndex: "location" },
];
