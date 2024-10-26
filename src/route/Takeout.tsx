import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import Flex from "antd/es/flex";
import { CheckList, DataTable, InputFields } from "../components";
import {
  ProductionScheduleTableColumns,
  TakeoutTableColumns,
} from "../components/takeout/columns";
import { useProductionSchedule, useTakeout } from "../hooks";

export const Takeout: React.FC = () => {
  const { takeout } = useTakeout();
  const { productionSchedule } = useProductionSchedule();

  return (
    <div style={{ padding: "20px", background: "#ADD8E6", minHeight: "100vh" }}>
      <h2>2-2.持ち帰り・工程別在庫数画面</h2>

      <InputFields />
      <CheckList />
      <Flex style={{ gap: "50px" }}>
        <DataTable tableColumns={TakeoutTableColumns} data={takeout} />
        <DataTable
          pagination={false}
          tableColumns={ProductionScheduleTableColumns}
          data={productionSchedule}
        />
      </Flex>

      <ButtonGroup>
        <Button type="default" icon={<DownloadOutlined />}>
          在庫推移画面
        </Button>
        <Button>閉じる</Button>
      </ButtonGroup>
    </div>
  );
};
