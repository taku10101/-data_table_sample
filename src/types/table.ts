import type { ReactNode } from "react";
import type {
	AlertHistoryDataType,
	FileOutputDataType,
	InventoryTrend2DataType,
	InventoryTrendDataType,
	KanbanResetDataType,
	ProductionScheduleDataType,
	TakeoutDataType,
} from "../mocks/types";

export type TableColumnsType = HeaderColumnsType | ChildeColumnsType;

export interface ChildeColumnsType {
	title: string;
	key: string;
	alert?: boolean;
	dataIndex: string;
	children?: ChildeColumnsType[];
	render?: (value?: boolean) => JSX.Element | ReactNode;
}

export interface HeaderColumnsType {
	title: string;
	key: string;
	children: ChildeColumnsType[];
}

export type DataSourceType =
	| FileOutputDataType
	| InventoryTrendDataType
	| AlertHistoryDataType
	| InventoryTrend2DataType
	| TakeoutDataType
	| ProductionScheduleDataType
	| KanbanResetDataType;
