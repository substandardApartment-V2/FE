import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

export default function Main({ children }: PropsWithChildren) {
  return <main>{children || <Outlet />}</main>;
}
