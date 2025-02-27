import MaintanceChargeChart from "../Chart/MaintanceChargeChart";
import styles from "./DetailMaintanceCharge.module.scss";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIcon.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import useGetApartData from "@/hooks/Api/useGetApartData";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { TMaintanceChargeResponse } from "@/types/TApi/TAPITypes";
import explanationIcon from "@/assets/Main/DetailInfo/explanationIcon.svg";
import { Tooltip } from "react-tooltip";

export default function DetailMaintanceCharge() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const apartInfo = useMainInfoStore((state) => state.apartInfo);

  const { data, isLoading } = useGetApartData<TMaintanceChargeResponse>(
    `${import.meta.env.VITE_LOCAL_API_CALL}/apt/feeDetail?id=${
      apartInfo?.aptInfo.detailId
    }`
  );

  return (
    <section className={styles.maintances}>
      <section className={styles.eachArea}>
        <div>
          <div>
            <h4 className={styles.title}>
              <span>개별 사용료</span>
              <span>{data?.data.year}</span>
              <img
                src={explanationIcon}
                alt="개별 사용료 설명"
                data-tooltip-id="individual"
                data-tooltip-content={
                  "난방비(공용) + 난방비(전용) + 급탕비(공용) + 급탕비(전용) + 가스사용료(공용) + 가스사용료(전용) + 전기료(공용) + 전기료(전용) + 수도료(공용) + 수도료(전용) + TV 수신료 + 정화조 오물 수수료 + 생활폐기물 수수료 + 입대의 운영비 + 건물 보험료 + 선관위 운영비 + 기타"
                }
              />
              <Tooltip
                className={styles.tooltip}
                id="individual"
                place="right"
                noArrow={true}
                style={{
                  width: "23rem",
                  background: "#ffffff",
                  color: "#142337",
                  borderRadius: 0,
                }}
              />
            </h4>
          </div>
          <button
            onClick={() => {
              setIsDetailInfo(null);
            }}
          >
            <img src={closeButtonIcon} />
          </button>
        </div>
        {data?.data && (
          <MaintanceChargeChart data={data?.data.individualUsageSum} />
        )}
      </section>
      <section className={styles.eachArea}>
        <h4 className={styles.title}>
          <span>공용 관리비</span>
          <span>{data?.data.year}</span>
          <img
            src={explanationIcon}
            alt="공용 관리비 설명"
            data-tooltip-id="totalCommonManagement"
            data-tooltip-content={
              "인건비 + 제사무비 + 제세공과금 + 피복비 + 교육훈련비 + 차량유지비 + 그 밖의 부대비용 + 청소비 + 경비비 + 소독비 + 승강기 유지비 + 지능형 네트워크 유지비 + 수선비 + 시설 유지비 + 안전 점검비 + 재해예방비 + 위탁관리 수수료"
            }
          />
          <Tooltip
            className={styles.tooltip}
            id="totalCommonManagement"
            place="right"
            noArrow={true}
            style={{
              width: "23rem",
              background: "#ffffff",
              color: "#142337",
              borderRadius: 0,
            }}
          />
        </h4>
        {data && (
          <MaintanceChargeChart data={data?.data.totalCommonManagementFeeSum} />
        )}
      </section>
      <section className={styles.eachArea}>
        <h4 className={styles.title}>
          <span>장충금 월 부과액</span>
          <span>{data?.data.year}</span>
          <img
            src={explanationIcon}
            alt="장충금 설명"
            data-tooltip-id="reserveFund"
            data-tooltip-content={
              "일반적으로 아파트나 공동주택에서 거주자들이 매월 지불하는 관리비의 일부로, 건물이나 시설의 장기 수선이나 보수를 위해 적립되는 기금"
            }
          />
          <Tooltip
            className={styles.tooltip}
            id="reserveFund"
            place="right"
            style={{
              width: "23rem",
              background: "#ffffff",
              color: "#142337",
              borderRadius: 0,
            }}
            noArrow={true}
          />
        </h4>
        {data && (
          <MaintanceChargeChart data={data?.data.reserveFundMonthlyCharge} />
        )}
      </section>
    </section>
  );
}
