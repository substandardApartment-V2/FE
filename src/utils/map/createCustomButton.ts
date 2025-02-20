// 네이버 지도 커스텀 버튼 생성 함수

import zoomUpIcon from "@/assets/Main/Map/zoomUpIcon.svg";
import zoomDownIcon from "@/assets/Main/Map/zoomDownIcon.svg";

export default function createCustumButton(map: naver.maps.Map) {
  const zoomUpBtnHtml = `<button><img src="${zoomUpIcon}"/></button>`;
  const zoomDownBtnHtml = `<button><img src="${zoomDownIcon}"/></button>`;

  const zoomUpControl = new naver.maps.CustomControl(zoomUpBtnHtml, {
    position: naver.maps.Position.TOP_RIGHT,
  });

  const zoomDownControl = new naver.maps.CustomControl(zoomDownBtnHtml, {
    position: naver.maps.Position.TOP_RIGHT,
  });

  naver.maps.Event.once(map, "init", function () {
    zoomUpControl.setMap(map);
    naver.maps.Event.addDOMListener(zoomUpControl.getElement(), "click", () => {
      const currentZoom = map.getZoom();
      if (currentZoom < 21) {
        map.setZoom(currentZoom + 1, true);
      }
    });
  });

  naver.maps.Event.once(map, "init", function () {
    zoomDownControl.setMap(map);
    naver.maps.Event.addDOMListener(
      zoomDownControl.getElement(),
      "click",
      () => {
        const currentZoom = map.getZoom();
        if (currentZoom > 1) {
          map.setZoom(currentZoom - 1, true);
        }
      }
    );
  });
}
