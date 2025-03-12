import MaintanceChargeChart from "../Chart/MaintanceChargeChart";
import styles from "./DetailMaintanceCharge.module.scss";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIcon.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import useGetApartData from "@/hooks/Api/useGetApartData";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { TMaintanceChargeResponse } from "@/types/TApi/TAPITypes";
import explanationIcon from "@/assets/Main/DetailInfo/explanationIcon.svg";
import { Tooltip } from "react-tooltip";
import ApartHeadInfo from "./ApartHeadInfo";
import "@/App.scss";

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
                  data-tooltip-html={`<div style="display:flex; flex-direction:column; align-items: flex-start; gap : 2rem;">
                    <span style="color: #142337; font-size: 1.6rem;">개별 사용료 상세</span>
                    <ul style="display: flex; flex-direction: column; gap: 1.6rem; width: 100%;">
                     <li style="width : 100%; display: flex; gap: 1rem;">
                      <span style="color: #ffffff; padding: 0.6rem 1.2rem; background-color: #435464; border-radius: 1.4rem; height: fit-content; width: 6rem; text-align: center;">공용</span>
                        <ul style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">전기료</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">수도료</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">가스사용료</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">난방비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">급탕비</li>
                        </ul>
                      </li>
                      <li style="width : 100%; display: flex; gap: 1rem;">
                      <span style="color: #ffffff; padding: 0.6rem 1.2rem; background-color: #435464; border-radius: 1.4rem; height: fit-content; width: 6rem; text-align: center;">전용</span>
                        <ul style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">전기료</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">수도료</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">가스사용료</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">난방비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">급탕비</li>
                        </ul>
                      </li>
                      <li style="width: 100%; display: flex; gap: 1rem;">
                        <span style="position: relative; color: #ffffff; padding: 0.6rem 1.2rem; background-color: #435464; border-radius: 1.4rem; height: fit-content; width: 9rem; text-align: center;">일반</span>
                        <ul style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">TV수신료</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">정화조오물 수수료</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">생활폐기물 수수료</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">건물보혐료</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">선관위운영비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">입대의 운영비</li>
                        </ul>
                      </li>
                    </ul>
                    <div>`}
                />
                <Tooltip
                  className={styles.tooltip}
                  id="individual"
                  place="right"
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
              data-tooltip-html={`<div style="display: flex; flex-direction: column; align-items: flex-start; gap: 2rem;">
                    <span style="color: #142337; font-size: 1.6rem;">개별 사용료 상세</span>
                    <ul style="display: flex; flex-direction: column; gap: 1.6rem; width: 100%;">
                      <li style="width : 100%; display: flex; gap: 1rem;">
                      <span style="color: #ffffff; padding: 0.6rem 1.2rem; background-color: #435464; border-radius: 1.4rem; height: fit-content; width: 15rem; text-align: center;">유지비</span>
                        <ul style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">청소비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">소독비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">수선비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">차량유지비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">시설유지비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">안전점검비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">재해예방비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">승강기유지비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">지능형네트워크유지비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">위탁관리 수수료</li>

                        </ul>
                      </li>
                      <li style="width: 100%; display: flex; gap: 1rem;">
                        <span style="position: relative; color: #ffffff; padding: 0.6rem 1.2rem; background-color: #435464; border-radius: 1.4rem; height: fit-content; width: 10rem; text-align: center;">일반</span>
                        <ul style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">인건비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">경비비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">제사무비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">제세공과금</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">피복비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">교육훈련비</li>
                          <li style="border: 0.2rem solid #7F8A95; font-weight: 400; padding: 0.4rem 1.2rem; border-radius:1.4rem;">그 밖의 부대비용</li>
                        </ul>
                      </li>
                    </ul>
                    <div>`}
            />
            <Tooltip
              className={styles.tooltip}
              id="totalCommonManagement"
              place="right"
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
    </section>
  );
}
