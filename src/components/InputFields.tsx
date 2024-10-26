import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { useState } from "react";
import type { FileOutputDataType } from "../mocks/types";

const Fields = [
  { key: "acceptance", label: "受入", placeholder: "xxx" },
  { key: "supplierCode", label: "仕入先", placeholder: "xxx" },
  { key: "supplierPlant", label: "工区", placeholder: "xxx" },
  { key: "shipDock", label: "出荷場", placeholder: "xxx" },
  { key: "kanbanNo", label: "背番号", placeholder: "xxx" },
  { key: "partNo", label: "品番", placeholder: "xxx" },
  { key: "course", label: "コース", placeholder: "xxx" },
  { key: "location", label: "所在地", placeholder: "xxx" },
  { key: "groupCode", label: "組班コード", placeholder: "xxx" },
  { key: "To", label: "期間(To)", placeholder: "xxx" },
  { key: "From", label: "期間(From)", placeholder: "xxx" },
];

type InputValueKeyType = keyof FileOutputDataType;

type InputValuesType = {
  [key in InputValueKeyType]?: string;
};

export const InputFields = () => {
  const [, setInputValues] = useState<InputValuesType>({});

  const handleInputChange = (key: InputValueKeyType, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <div>
      <Row gutter={18} style={{ margin: "0 auto" }}>
        {Fields.map((field) => (
          <Col span={7} key={field.key}>
            <div style={{ padding: "5px" }}>
              <label
                htmlFor={field.key} // Associate label with input
                style={{
                  width: "100%",
                  textAlign: "left",
                  marginTop: "5px",
                  marginRight: "5px",
                }}
              >
                {field.label}
              </label>
              <Input
                id={field.key} // Set id to match label's htmlFor
                placeholder={field.placeholder}
                onChange={(e) =>
                  handleInputChange(
                    field.key as InputValueKeyType,
                    e.target.value
                  )
                }
              />
            </div>
          </Col>
        ))}
      </Row>
      <Col
        span={6}
        style={{
          marginTop: "10px",
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            alert("クリア");
          }}
        >
          ALLクリア
        </Button>
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={() => {
            alert("検索しました");
          }}
        >
          検索
        </Button>
      </Col>
    </div>
  );
};
