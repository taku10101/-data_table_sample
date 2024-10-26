import { Checkbox, Col, Row } from "antd";
import { DataTable, InputFields } from "../components";
import { CSVOutputButton } from "../components/csv";
import { KanbanResetTableColumns } from "../components/kanban_reset";
import { useKanbanReset } from "../hooks";

export const KanbanReset: React.FC = () => {
  const { kanbanReset } = useKanbanReset();
  return (
    <div style={{ padding: "20px", background: "#ADD8E6", minHeight: "100vh" }}>
      <h2>2-1-2. 在庫推移画面</h2>
      <InputFields />

      <Row style={{ marginTop: "10px" }}>
        <Col span={4}>
          <Checkbox>ALL</Checkbox>
        </Col>
      </Row>
      {
        <DataTable
          tableColumns={KanbanResetTableColumns()}
          data={kanbanReset}
        />
      }

      <CSVOutputButton
        filename="output"
        tableColumns={KanbanResetTableColumns()}
        data={kanbanReset}
      />
    </div>
  );
};
