import type { ReactNode } from "react";

type PropsType = {
  value: boolean;
  color?: string;
  display?: string | ReactNode;
};
export const ColumnFragment = (props: PropsType) => {
  const { value, color, display } = props;
  return (
    <>
      {value ? (
        <span
          style={{
            // TODO:親側からデータを指定して背景色をつけたれるように変更
            padding: "15px",
            backgroundColor: color,
          }}
        >
          {display}
        </span>
      ) : null}
    </>
  );
};
