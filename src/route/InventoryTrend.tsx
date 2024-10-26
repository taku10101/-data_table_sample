import { Button } from "antd";
import { CheckList, DataTable, InputFields } from "../components";
import { CSVOutputButton } from "../components/csv";
import { InventoryTrendTableColumns } from "../components/inventory_trend";
import { useInventoryTrend } from "../hooks";

export const InventoryTrend: React.FC = () => {
  const { inventoryTrend } = useInventoryTrend();

  //2-1-2 在庫推移画面リンク
  //2-2 持ち帰り画面リンク
  return (
    <div style={{ padding: "20px", background: "#ADD8E6", minHeight: "100vh" }}>
      <h2>2-1-1. 在庫推移画面</h2>

      <InputFields />
      <CheckList />
      <DataTable
        tableColumns={InventoryTrendTableColumns}
        data={inventoryTrend}
      />

      <Button type="default" href="/trend2" style={{ textDecoration: "none" }}>
        2-1-2 在庫推移画面
      </Button>

      <Button type="default" href="/takeout" style={{ textDecoration: "none" }}>
        2-2 持ち帰り・工程別在庫数画面
      </Button>
      <CSVOutputButton
        filename="output"
        tableColumns={InventoryTrendTableColumns}
        data={inventoryTrend}
      />
    </div>
  );
};
