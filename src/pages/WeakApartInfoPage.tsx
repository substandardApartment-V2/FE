import ApartMap from "@/components/Main/ApartMap/ApartMap";
import WholeWeakApartInfo from "@/components/WeakApart/WholeWeakApartInfo/WholeWeakApartInfo";
import styels from "./WeakApartInfoPage.module.scss";
import WeakApartInfo from "@/components/WeakApart/WholeWeakApartInfo/WeakApartInfo";
import { useMainInfoStore } from "@/store/useMainInfoStore";

export default function WeakApartInfoPage() {
  const mainInfo = useMainInfoStore((state) => state.mainInfo);

  return (
    <div className={styels.weak}>
      {mainInfo === "WHOLE" && <WholeWeakApartInfo />}
      {mainInfo === "SELECT" && <WeakApartInfo />}
      <ApartMap />
    </div>
  );
}
