var size = 0;
var placement = 'point';

var style_ProximidadaequipamientosdeeducacinDistanciaenKm_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("EDU");
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
    if (value >= 0.000000 && value <= 0.197074) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,224,224,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.197074 && value <= 0.396000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(168,196,198,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.396000 && value <= 0.800000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(112,168,172,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.800000 && value <= 1.670748) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(56,140,146,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.670748 && value <= 3.108399) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,112,120,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
