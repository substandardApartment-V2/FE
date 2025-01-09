import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Main.module.scss";

export default function Main({ children }: PropsWithChildren) {
  return <main className={styles.main}>{children || <Outlet />}</main>;
}
