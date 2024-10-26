import { Checkbox, Col, Row } from "antd";
import { DataTable, InputFields } from "../components";
import { AlertHistoryColumns } from "../components/alert_history";
import { useAlertHistory } from "../hooks";

import { CSVOutputButton } from "../components/csv";

export const AlertHistory = () => {
  const { alertHistory } = useAlertHistory();
  return (
    <div style={{ padding: "20px", background: "#ADD8E6", minHeight: "100vh" }}>
      <h2>5. アラート履歴参照画面</h2>
      <InputFields />

      <Row style={{ marginTop: "10px" }}>
        <Col span={4}>
          <Checkbox>ALL</Checkbox>
        </Col>
      </Row>
      {<DataTable tableColumns={AlertHistoryColumns} data={alertHistory} />}

      <CSVOutputButton
        filename="output"
        tableColumns={AlertHistoryColumns}
        data={alertHistory}
      />
    </div>
  );
};
