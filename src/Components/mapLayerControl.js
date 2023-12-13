import { LayersControl, TileLayer } from "react-leaflet";
export default function MapLayerControl() {
    return (
        <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="GoogleSateliteHybrid">
                <TileLayer
                    url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="GoogleMaps">
                <TileLayer
                    url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Esri World Street Map">
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                    minZoom={0}
                    maxZoom={20}
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Esri World Imagery">
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    minZoom={0}
                    maxZoom={20}
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Esri Nat Geo World Map">
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
                    minZoom={0}
                    maxZoom={16}
                />
            </LayersControl.BaseLayer>
        </LayersControl>
    )
}