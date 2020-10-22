var size = 0;
var placement = 'point';
function categories_UsosdelSuelo_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Actividad Central':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(179,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Actividad Comercial':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(203,37,25,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Actividad Industrial':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,74,51,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Actividad Portuaria':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,107,70,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Actividad Residencial':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,141,89,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Area de Reserva y Proteccion':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,173,113,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Espacio Publico':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,204,138,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Infraestructura de Servicios Publicos':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,222,178,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Institucional':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,240,217,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_UsosdelSuelo_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ACTIVIDAD");
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
    
var style = categories_UsosdelSuelo_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
