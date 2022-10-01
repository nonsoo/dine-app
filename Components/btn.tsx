import { FC } from "react";

import styles from "../styles/comps/btn.module.css";

interface Props {
  btnName: string;
  exCSS?: string;
  onToggle?: () => void;
}

const Btn: FC<Props> = ({ btnName, exCSS, onToggle }) => {
  return (
    <button className={`${styles.btn} ${exCSS}`} onClick={onToggle}>
      {btnName}
    </button>
  );
};

export default Btn;
