// 네이버지도 클러스터링 함수

export default function createCluster(
  newMarkers: naver.maps.Marker[],
  map: naver.maps.Map | null
) {
  const clusterMarkerIcon = {
    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(./clusterIcon.svg);background-size:contain;"></div>`,
    size: new naver.maps.Size(40, 40),
    anchor: new naver.maps.Point(20, 20),
  };

  if (newMarkers.length > 0) {
    new window.MarkerClustering({
      minClusterSize: 2,
      maxZoom: 14,
      map: map,
      markers: newMarkers.filter((marker) => marker),
      disableClickZoom: true,
      gridSize: 120,
      icons: [clusterMarkerIcon],
      indexGenerator: [10, 100, 200, 500, 1000],
      stylingFunction: function (clusterMarker, count: number) {
        const element = clusterMarker.getElement();
        if (element) {
          clusterMarker
            .getElement()
            .querySelector("div:first-child").innerText = count;
        }
      },
    });
  }
}
