var size = 0;
var placement = 'point';

var style_AccesoaelectricidadHogares_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("P_ENERGIA");
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
    if (value >= 24.240000 && value <= 35.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,112,120,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 35.000000 && value <= 68.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(56,140,146,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 68.000000 && value <= 86.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(112,168,172,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 86.000000 && value <= 96.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(168,196,198,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 96.000000 && value <= 100.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,224,224,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
