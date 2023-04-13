require(['esri/config', 'esri/request', 'esri/layers/TileLayer',
        "esri/layers/WebTileLayer", "esri/layers/MapImageLayer", "esri/layers/FeatureLayer",
        "esri/layers/GeoJSONLayer", 'esri/Map', "esri/Graphic",
        "esri/layers/GraphicsLayer", "esri/layers/GroupLayer", "esri/geometry/Point",
        "esri/geometry/Polygon", "esri/geometry/support/jsonUtils", 'esri/Basemap',
        'esri/views/MapView', "esri/widgets/Fullscreen", "esri/widgets/Search",
        "esri/widgets/Expand", "esri/widgets/Legend", "esri/widgets/Measurement",
        "esri/geometry/support/webMercatorUtils", "esri/widgets/BasemapToggle"],
    function (esriConfig, esriRequest, TileLayer,
              WebTileLayer, MapImageLayer, FeatureLayer,
              GeoJSONLayer, Map, Graphic,
              GraphicsLayer, GroupLayer, Point,
              Polygon, geometryJsonUtils, Basemap,
              MapView, Fullscreen, Search,
              Expand, Legend, Measurement,
              webMercatorUtils, BasemapToggle) {


        let basemap = new Basemap({
            baseLayers: [new TileLayer({
                /*小水库在线地址*/
                url: 'http://小水库域名/hnslmap/arcgis/rest/services/Basemap/HNBasemap_LSB_CLEAN/MapServer',
                title: "Basemap"
            })], title: "basemap",
            id: "basemap"
        });

        let map = new Map({
            basemap: basemap
        });

        let mapView = new MapView({
            map: map,
            container: "regionMap",
            ui: {components: ['zoom', 'home']},
            zoom: 7,
            center: [113.50716043881533, 33.97950623964144],
            popup: {
                alignment: "top-center", spinnerEnabled: false
            },
            constraints: {
                maxZoom: 16,
                minZoom: 7,
                lods: [
                    {level: 0, levelValue: 0, resolution: 156543.03392800014, scale: 5.91657527591555E8},
                    {level: 1, levelValue: 1, resolution: 78271.51696399994, scale: 2.95828763795777E8},
                    {level: 2, levelValue: 2, resolution: 39135.75848200009, scale: 1.47914381897889E8},
                    {level: 3, levelValue: 3, resolution: 19567.87924099992, scale: 7.3957190948944E7},
                    {level: 4, levelValue: 4, resolution: 9783.93962049996, scale: 3.6978595474472E7},
                    {level: 5, levelValue: 5, resolution: 4891.96981024998, scale: 1.8489297737236E7},
                    {level: 6, levelValue: 6, resolution: 2445.98490512499, scale: 9244648.868618},
                    {level: 7, levelValue: 7, resolution: 922.992452562495, scale: 3022324.434309},
                    {level: 8, levelValue: 8, resolution: 305.74811314055756, scale: 1555581.108577},
                    {level: 9, levelValue: 9, resolution: 152.87405657041106, scale: 577790.554289},
                    {level: 10, levelValue: 10, resolution: 76.43702828507324, scale: 288895.277144},
                    {level: 11, levelValue: 11, resolution: 38.21851414253662, scale: 144447.638572},
                    {level: 12, levelValue: 12, resolution: 19.10925707126831, scale: 72223.819286},
                    {level: 13, levelValue: 13, resolution: 9.554628535634155, scale: 36111.909643},
                    {level: 14, levelValue: 14, resolution: 4.77731426794937, scale: 18055.954822},
                    {level: 15, levelValue: 15, resolution: 2.388657133974685, scale: 9027.977411}
                ],
                rotationEnabled: false
            },
        });


        const regionLayer = new GeoJSONLayer({
            id: "regionLayer",
            url: "./data/geojson.json",
        });
        map.add(regionLayer);

        // $.ajax({
        //     type: "GET",
        //     url: "./data/geojson.json",
        //     dataType: "json",
        //     success: function (result) {
        //         const blob = new Blob([result], {
        //             type: "application/json"
        //         });
        //         const url = URL.createObjectURL(blob);
        //
        //     }
        // });

    })
