import { red } from "@ant-design/colors";
import { Table } from "antd";
import { createStyles } from "antd-style";
import type {
  ChildeColumnsType,
  DataSourceType,
  TableColumnsType,
} from "../types";
const { Column, ColumnGroup } = Table;

type PropsType = {
  tableColumns: TableColumnsType[];
  data: DataSourceType[];
  pagination?: false | undefined;
};

export const DataTable: React.FC<PropsType> = (props) => {
  const useStyles = createStyles({
    alertCol: {
      backgroundColor: red.primary,
    },
  });
  const { styles } = useStyles();
  const { tableColumns, data, pagination } = props;

  return (
    <div>
      <Table
        dataSource={data}
        style={{ marginTop: "20px" }}
        pagination={pagination}
      >
        {tableColumns.map((column: TableColumnsType) =>
          column.children ? (
            <ColumnGroup title={column.title} key={column.key}>
              {column.children.map((child: ChildeColumnsType) => (
                <Column
                  title={child.title}
                  dataIndex={child.dataIndex}
                  key={child.key}
                  render={child.render}
                  className={child.alert ? styles.alertCol : ""}
                />
              ))}
            </ColumnGroup>
          ) : (
            <Column title={column.title} key={column.key} />
          )
        )}
      </Table>
    </div>
  );
};
