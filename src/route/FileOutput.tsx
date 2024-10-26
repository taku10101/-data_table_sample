import { Checkbox, Col, Row } from "antd";
import { DataTable, InputFields } from "../components";
import { CSVOutputButton } from "../components/csv";
import { fileOutputTableColumns } from "../components/file_output";
import { useFileOutput } from "../hooks";
import { fileOutputData } from "../mocks/data/file_output";

export const FileOutput: React.FC = () => {
  const { fileOutput } = useFileOutput();

  return (
    <div style={{ padding: "20px", background: "#ADD8E6", minHeight: "100vh" }}>
      <h2>2-1-2. 在庫推移画面</h2>
      <InputFields />

      <Row style={{ marginTop: "10px" }}>
        <Col span={4}>
          <Checkbox>ALL</Checkbox>
        </Col>
      </Row>
      {<DataTable tableColumns={fileOutputTableColumns()} data={fileOutput} />}

      <CSVOutputButton
        filename="output"
        tableColumns={fileOutputTableColumns()}
        data={fileOutputData}
      />
    </div>
  );
};
