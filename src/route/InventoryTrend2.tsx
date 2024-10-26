import { Button } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { CheckList, DataTable, InputFields } from "../components";
import { CSVOutputButton } from "../components/csv";
import { InventoryTrend2TableColumns } from "../components/inventory_trend2";
import { useInventoryTrend2 } from "../hooks";

export const InventoryTrend2: React.FC = () => {
  const { inventoryTrend2 } = useInventoryTrend2();

  return (
    <div style={{ padding: "20px", background: "#ADD8E6", minHeight: "100vh" }}>
      <h2>2-1-2. 在庫推移画面</h2>

      <InputFields />
      <CheckList />
      <DataTable
        tableColumns={InventoryTrend2TableColumns}
        data={inventoryTrend2}
      />

      <ButtonGroup>
        <Button
          type="default"
          href="/takeout"
          style={{ textDecoration: "none" }}
        >
          2-2 持ち帰り・工程別在庫数画面
        </Button>
        <Button>POWER BI画面</Button>
        <CSVOutputButton
          filename="output"
          tableColumns={InventoryTrend2TableColumns}
          data={inventoryTrend2}
        />
        <Button>閉じる</Button>
      </ButtonGroup>
    </div>
  );
};
