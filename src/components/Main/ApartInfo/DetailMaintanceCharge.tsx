import MaintanceChargeChart from "../Chart/MaintanceChargeChart";
import styles from "./DetailMaintanceCharge.module.scss";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIcon.svg";
import ApartHeadInfo from "./ApartHeadInfo";
import useGetApartData from "@/hooks/Api/useGetApartData";
import explanationIcon from "@/assets/Main/DetailInfo/explanationIcon.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { TMaintanceChargeResponse } from "@/types/TApi/TAPITypes";
import { Tooltip } from "react-tooltip";
import {
  totalIndividualManagementHtml,
  totalCommonManagementHtml,
  longtermRepairReserveHtml,
} from "@/utils/tooltip/tooltipHtml";

export default function DetailMaintanceCharge() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const apartInfo = useMainInfoStore((state) => state.apartInfo);

  const { data } = useGetApartData<TMaintanceChargeResponse>(
    `${import.meta.env.VITE_LOCAL_API_CALL}/apt/feeDetail?id=${
      apartInfo?.aptInfo.detailId
    }`
  );

  return (
    <section className={styles.maintances}>
      <div className={styles.mobileApartHeadInfo}>
        <ApartHeadInfo
          apartName={apartInfo?.aptInfo.name}
          apartRegion={apartInfo?.aptInfo.roadAddress}
          zipCode={apartInfo?.aptInfo.zipCode}
          mobile={true}
        />
      </div>
      <section className={styles.chargeCharts}>
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
                  data-tooltip-html={totalIndividualManagementHtml}
                />
                <Tooltip
                  className={styles.tooltip}
                  id="individual"
                  place="bottom"
                  noArrow={true}
                  style={{
                    width: "40rem",
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
              data-tooltip-html={totalCommonManagementHtml}
            />
            <Tooltip
              className={styles.tooltip}
              id="totalCommonManagement"
              place="bottom"
              noArrow={true}
              style={{
                width: "40rem",
                background: "#ffffff",
                color: "#142337",
                borderRadius: 0,
              }}
            />
          </h4>
          {data && (
            <MaintanceChargeChart
              data={data?.data.totalCommonManagementFeeSum}
            />
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
              data-tooltip-html={longtermRepairReserveHtml}
            />
            <Tooltip
              className={styles.tooltip}
              id="reserveFund"
              place="bottom"
              style={{
                width: "40rem",
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
    </section>
  );
}
