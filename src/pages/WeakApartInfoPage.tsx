import ApartMap from "@/components/Main/Map";
import WholeWeakApartInfo from "@/components/WeakApart/WholeWeakApartInfo";
import styels from "./WeakApartInfoPage.module.scss";

export default function WeakApartInfoPage() {
  return (
    <div className={styels.weak}>
      <WholeWeakApartInfo />
      <ApartMap />
    </div>
  );
}
