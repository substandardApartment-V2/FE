import ApartMap from "@/components/Main/ApartMap/ApartMap";
import WholeWeakApartInfo from "@/components/WeakApart/WholeWeakApartInfo/WholeWeakApartInfo";
import styels from "./WeakApartInfoPage.module.scss";

export default function WeakApartInfoPage() {
  return (
    <div className={styels.weak}>
      <WholeWeakApartInfo />
      <ApartMap />
    </div>
  );
}
