var size = 0;
var placement = 'point';

var style_AccesibilidadalespaciopblicoabiertoDistanciaMts_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("E_PUB");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.010000 && value <= 400.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,240,215,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 400.000000 && value <= 1954.598995) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,162,77,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
