 function TW_SeaMap(map_){
        // show TW map boundary
        var box_extents = [
                [121+44/60+00/3600, 25+7/60+35/3600, 121+48/60+17/3600, 25+12/60+50/3600],  //0353A-基隆港
                [121+48/60+45/3600, 25+7/60+7/3600, 121+50/60+15/3600, 25+8/60+14/3600]  //0353B-深澳灣
                ];
        var boxes  = new OpenLayers.Layer.Boxes( "海圖" );  //TWD67 TM2 方格
        for (var i = 0; i < box_extents.length; i++) {
                    ext = box_extents[i];
                    bounds = OpenLayers.Bounds.fromArray(ext).transform(
                        new OpenLayers.Projection("EPSG:4326"), /* WGS84 */
                        //new OpenLayers.Projection("EPSG:3821"),
                        map.getProjectionObject()) ;
                    box = new OpenLayers.Marker.Box(bounds);
                    /*
                    box.events.register("click", box, function (e) {
                        this.setBorder("yellow");
                        });*/
                    box.setBorder("yellow",1);
                    boxes.addMarker(box);
                    }
                map_.addLayer(boxes);
    }
