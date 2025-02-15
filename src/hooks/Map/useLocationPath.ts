import { useLocation } from "react-router-dom";

export default function useLocationPath() {
  const location = useLocation();
  return location.pathname === "/weak" ? "defect" : "apt";
}
