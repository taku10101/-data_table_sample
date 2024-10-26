import { Button } from "antd";
import ButtonGroup from "antd/es/button/button-group";

interface ButtonListType {
  label: string;
  link: string;
}
export const Home = () => {
  const buttonList: ButtonListType[] = [
    {
      label: "1.過不足一括ファイル出力",
      link: "/output",
    },
    {
      label: "2-1.在庫推移",
      link: "/trend",
    },
    {
      label: "2-2.お持ち帰り・工程別在庫数",
      link: "/alerts",
    },

    {
      label: "3.POWER-BI",
      link: "/",
    },
    {
      label: "4.在庫調整",
      link: "/",
    },
    {
      label: "5.アラート履歴参照",
      link: "/",
    },
  ];
  return (
    <div>
      <ButtonGroup>
        {buttonList.map((button) => (
          <Button key={button.label} href={button.link}>
            {button.label}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
