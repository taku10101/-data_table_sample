import { Checkbox, Flex } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";

const lists: string[] = [
  "欠品アラート対象",
  "上限超過対象のみ",
  "下限超過対象のみ",
  "少量品のみ",
];

export const CheckList = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const onChange = (e: CheckboxChangeEvent) => {
    const value = e.target.value;
    setCheckedList((prev) =>
      e.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  return (
    <Flex>
      {lists.map((item: string) => (
        <Checkbox
          key={item}
          value={item}
          onChange={onChange}
          checked={checkedList.includes(item)}
        >
          {item}
        </Checkbox>
      ))}
    </Flex>
  );
};
