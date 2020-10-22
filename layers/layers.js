var wms_layers = [];

var format_RecoleccinderesiduosslidosHogares_0 = new ol.format.GeoJSON();
var features_RecoleccinderesiduosslidosHogares_0 = format_RecoleccinderesiduosslidosHogares_0.readFeatures(json_RecoleccinderesiduosslidosHogares_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RecoleccinderesiduosslidosHogares_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecoleccinderesiduosslidosHogares_0.addFeatures(features_RecoleccinderesiduosslidosHogares_0);
var lyr_RecoleccinderesiduosslidosHogares_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RecoleccinderesiduosslidosHogares_0, 
                style: style_RecoleccinderesiduosslidosHogares_0,
                interactive: true,
    title: 'Recolección de residuos sólidos (% Hogares)<br />\
    <img src="styles/legend/RecoleccinderesiduosslidosHogares_0_0.png" /> 1 - 38<br />\
    <img src="styles/legend/RecoleccinderesiduosslidosHogares_0_1.png" /> 38 - 67<br />\
    <img src="styles/legend/RecoleccinderesiduosslidosHogares_0_2.png" /> 67 - 85<br />\
    <img src="styles/legend/RecoleccinderesiduosslidosHogares_0_3.png" /> 85 - 96<br />\
    <img src="styles/legend/RecoleccinderesiduosslidosHogares_0_4.png" /> 96 - 100<br />'
        });
var format_IPM_1 = new ol.format.GeoJSON();
var features_IPM_1 = format_IPM_1.readFeatures(json_IPM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPM_1.addFeatures(features_IPM_1);
var lyr_IPM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IPM_1, 
                style: style_IPM_1,
                interactive: true,
    title: 'IPM %<br />\
    <img src="styles/legend/IPM_1_0.png" /> 0 - 8,2<br />\
    <img src="styles/legend/IPM_1_1.png" /> 8,2 - 20,3<br />\
    <img src="styles/legend/IPM_1_2.png" /> 20,3 - 33,7<br />\
    <img src="styles/legend/IPM_1_3.png" /> 33,7 - 50,7<br />\
    <img src="styles/legend/IPM_1_4.png" /> 50,7 - 100<br />'
        });
var format_PoblacinnacidaenVenezuela_2 = new ol.format.GeoJSON();
var features_PoblacinnacidaenVenezuela_2 = format_PoblacinnacidaenVenezuela_2.readFeatures(json_PoblacinnacidaenVenezuela_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinnacidaenVenezuela_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinnacidaenVenezuela_2.addFeatures(features_PoblacinnacidaenVenezuela_2);
var lyr_PoblacinnacidaenVenezuela_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinnacidaenVenezuela_2, 
                style: style_PoblacinnacidaenVenezuela_2,
                interactive: true,
    title: 'Población nacida en Venezuela (#)<br />\
    <img src="styles/legend/PoblacinnacidaenVenezuela_2_0.png" /> 1 - 4<br />\
    <img src="styles/legend/PoblacinnacidaenVenezuela_2_1.png" /> 4 - 13<br />\
    <img src="styles/legend/PoblacinnacidaenVenezuela_2_2.png" /> 13 - 31<br />\
    <img src="styles/legend/PoblacinnacidaenVenezuela_2_3.png" /> 31 - 86<br />\
    <img src="styles/legend/PoblacinnacidaenVenezuela_2_4.png" /> 86 - 307<br />'
        });
var format_AccesibilidadalespaciopblicoabiertoDistanciaMts_3 = new ol.format.GeoJSON();
var features_AccesibilidadalespaciopblicoabiertoDistanciaMts_3 = format_AccesibilidadalespaciopblicoabiertoDistanciaMts_3.readFeatures(json_AccesibilidadalespaciopblicoabiertoDistanciaMts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccesibilidadalespaciopblicoabiertoDistanciaMts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccesibilidadalespaciopblicoabiertoDistanciaMts_3.addFeatures(features_AccesibilidadalespaciopblicoabiertoDistanciaMts_3);
var lyr_AccesibilidadalespaciopblicoabiertoDistanciaMts_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AccesibilidadalespaciopblicoabiertoDistanciaMts_3, 
                style: style_AccesibilidadalespaciopblicoabiertoDistanciaMts_3,
                interactive: true,
    title: 'Accesibilidad al espacio público abierto (Distancia Mts)<br />\
    <img src="styles/legend/AccesibilidadalespaciopblicoabiertoDistanciaMts_3_0.png" /> 1- 400<br />\
    <img src="styles/legend/AccesibilidadalespaciopblicoabiertoDistanciaMts_3_1.png" /> 401 - 1955<br />'
        });
var format_UsosdelSuelo_4 = new ol.format.GeoJSON();
var features_UsosdelSuelo_4 = format_UsosdelSuelo_4.readFeatures(json_UsosdelSuelo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsosdelSuelo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsosdelSuelo_4.addFeatures(features_UsosdelSuelo_4);
var lyr_UsosdelSuelo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UsosdelSuelo_4, 
                style: style_UsosdelSuelo_4,
                interactive: true,
    title: 'Usos del Suelo<br />\
    <img src="styles/legend/UsosdelSuelo_4_0.png" /> Actividad Central<br />\
    <img src="styles/legend/UsosdelSuelo_4_1.png" /> Actividad Comercial<br />\
    <img src="styles/legend/UsosdelSuelo_4_2.png" /> Actividad Industrial<br />\
    <img src="styles/legend/UsosdelSuelo_4_3.png" /> Actividad Portuaria<br />\
    <img src="styles/legend/UsosdelSuelo_4_4.png" /> Actividad Residencial<br />\
    <img src="styles/legend/UsosdelSuelo_4_5.png" /> Area de Reserva y Proteccion<br />\
    <img src="styles/legend/UsosdelSuelo_4_6.png" /> Espacio Publico<br />\
    <img src="styles/legend/UsosdelSuelo_4_7.png" /> Infraestructura de Servicios Publicos<br />\
    <img src="styles/legend/UsosdelSuelo_4_8.png" /> Institucional<br />'
        });
var format_AccesoainternetHogares_5 = new ol.format.GeoJSON();
var features_AccesoainternetHogares_5 = format_AccesoainternetHogares_5.readFeatures(json_AccesoainternetHogares_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccesoainternetHogares_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccesoainternetHogares_5.addFeatures(features_AccesoainternetHogares_5);
var lyr_AccesoainternetHogares_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AccesoainternetHogares_5, 
                style: style_AccesoainternetHogares_5,
                interactive: true,
    title: 'Acceso a internet (% Hogares)<br />\
    <img src="styles/legend/AccesoainternetHogares_5_0.png" /> 1- 21<br />\
    <img src="styles/legend/AccesoainternetHogares_5_1.png" /> 22 - 43<br />\
    <img src="styles/legend/AccesoainternetHogares_5_2.png" /> 44 - 66<br />\
    <img src="styles/legend/AccesoainternetHogares_5_3.png" /> 67 - 85<br />\
    <img src="styles/legend/AccesoainternetHogares_5_4.png" /> 86 - 100<br />'
        });
var format_ProximidadaequipamientosdeeducacinDistanciaenKm_6 = new ol.format.GeoJSON();
var features_ProximidadaequipamientosdeeducacinDistanciaenKm_6 = format_ProximidadaequipamientosdeeducacinDistanciaenKm_6.readFeatures(json_ProximidadaequipamientosdeeducacinDistanciaenKm_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProximidadaequipamientosdeeducacinDistanciaenKm_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProximidadaequipamientosdeeducacinDistanciaenKm_6.addFeatures(features_ProximidadaequipamientosdeeducacinDistanciaenKm_6);
var lyr_ProximidadaequipamientosdeeducacinDistanciaenKm_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProximidadaequipamientosdeeducacinDistanciaenKm_6, 
                style: style_ProximidadaequipamientosdeeducacinDistanciaenKm_6,
                interactive: true,
    title: 'Proximidad a equipamientos de educación (Distancia en Km)<br />\
    <img src="styles/legend/ProximidadaequipamientosdeeducacinDistanciaenKm_6_0.png" /> 0 - 0,2<br />\
    <img src="styles/legend/ProximidadaequipamientosdeeducacinDistanciaenKm_6_1.png" /> 0,2 - 0,4<br />\
    <img src="styles/legend/ProximidadaequipamientosdeeducacinDistanciaenKm_6_2.png" /> 0,4 - 0,8<br />\
    <img src="styles/legend/ProximidadaequipamientosdeeducacinDistanciaenKm_6_3.png" /> 0,8 - 1,7<br />\
    <img src="styles/legend/ProximidadaequipamientosdeeducacinDistanciaenKm_6_4.png" /> 1,7 - 3,1<br />'
        });
var format_ProximidadaequipamientosdesaludDistanciaenKm_7 = new ol.format.GeoJSON();
var features_ProximidadaequipamientosdesaludDistanciaenKm_7 = format_ProximidadaequipamientosdesaludDistanciaenKm_7.readFeatures(json_ProximidadaequipamientosdesaludDistanciaenKm_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProximidadaequipamientosdesaludDistanciaenKm_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProximidadaequipamientosdesaludDistanciaenKm_7.addFeatures(features_ProximidadaequipamientosdesaludDistanciaenKm_7);
var lyr_ProximidadaequipamientosdesaludDistanciaenKm_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProximidadaequipamientosdesaludDistanciaenKm_7, 
                style: style_ProximidadaequipamientosdesaludDistanciaenKm_7,
                interactive: true,
    title: 'Proximidad a equipamientos de salud (Distancia en Km)<br />\
    <img src="styles/legend/ProximidadaequipamientosdesaludDistanciaenKm_7_0.png" /> 0,1 - 0,3<br />\
    <img src="styles/legend/ProximidadaequipamientosdesaludDistanciaenKm_7_1.png" /> 0,3 - 0,7<br />\
    <img src="styles/legend/ProximidadaequipamientosdesaludDistanciaenKm_7_2.png" /> 0,7 - 1,9<br />\
    <img src="styles/legend/ProximidadaequipamientosdesaludDistanciaenKm_7_3.png" /> 1,9 - 3,6<br />\
    <img src="styles/legend/ProximidadaequipamientosdesaludDistanciaenKm_7_4.png" /> 3,6 - 6,8<br />'
        });
var format_Densidadpoblacional_8 = new ol.format.GeoJSON();
var features_Densidadpoblacional_8 = format_Densidadpoblacional_8.readFeatures(json_Densidadpoblacional_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densidadpoblacional_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densidadpoblacional_8.addFeatures(features_Densidadpoblacional_8);
var lyr_Densidadpoblacional_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Densidadpoblacional_8, 
                style: style_Densidadpoblacional_8,
                interactive: true,
    title: 'Densidad poblacional <br />\
    <img src="styles/legend/Densidadpoblacional_8_0.png" /> 0 - 0,03<br />\
    <img src="styles/legend/Densidadpoblacional_8_1.png" /> 0,04 - 0,05<br />\
    <img src="styles/legend/Densidadpoblacional_8_2.png" /> 0,06 - 0,12<br />\
    <img src="styles/legend/Densidadpoblacional_8_3.png" /> 0,13 - 0,23<br />\
    <img src="styles/legend/Densidadpoblacional_8_4.png" /> 0,24 - 0,74<br />'
        });
var format_AccesoaelectricidadHogares_9 = new ol.format.GeoJSON();
var features_AccesoaelectricidadHogares_9 = format_AccesoaelectricidadHogares_9.readFeatures(json_AccesoaelectricidadHogares_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccesoaelectricidadHogares_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccesoaelectricidadHogares_9.addFeatures(features_AccesoaelectricidadHogares_9);
var lyr_AccesoaelectricidadHogares_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AccesoaelectricidadHogares_9, 
                style: style_AccesoaelectricidadHogares_9,
                interactive: true,
    title: 'Acceso a electricidad (% Hogares)<br />\
    <img src="styles/legend/AccesoaelectricidadHogares_9_0.png" /> 24 - 35<br />\
    <img src="styles/legend/AccesoaelectricidadHogares_9_1.png" /> 36 - 68<br />\
    <img src="styles/legend/AccesoaelectricidadHogares_9_2.png" /> 69 - 86<br />\
    <img src="styles/legend/AccesoaelectricidadHogares_9_3.png" /> 87 - 96<br />\
    <img src="styles/legend/AccesoaelectricidadHogares_9_4.png" /> 97 - 100<br />'
        });
var format_AccesoasaneamientoadecuadoHogares_10 = new ol.format.GeoJSON();
var features_AccesoasaneamientoadecuadoHogares_10 = format_AccesoasaneamientoadecuadoHogares_10.readFeatures(json_AccesoasaneamientoadecuadoHogares_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccesoasaneamientoadecuadoHogares_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccesoasaneamientoadecuadoHogares_10.addFeatures(features_AccesoasaneamientoadecuadoHogares_10);
var lyr_AccesoasaneamientoadecuadoHogares_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AccesoasaneamientoadecuadoHogares_10, 
                style: style_AccesoasaneamientoadecuadoHogares_10,
                interactive: true,
    title: 'Acceso a saneamiento adecuado (% Hogares)<br />\
    <img src="styles/legend/AccesoasaneamientoadecuadoHogares_10_0.png" /> 0 - 38<br />\
    <img src="styles/legend/AccesoasaneamientoadecuadoHogares_10_1.png" /> 39 - 53,1<br />\
    <img src="styles/legend/AccesoasaneamientoadecuadoHogares_10_2.png" /> 68 - 85<br />\
    <img src="styles/legend/AccesoasaneamientoadecuadoHogares_10_3.png" /> 86 - 96<br />\
    <img src="styles/legend/AccesoasaneamientoadecuadoHogares_10_4.png" /> 97 - 100<br />'
        });
var format_HacinamientoHogares_11 = new ol.format.GeoJSON();
var features_HacinamientoHogares_11 = format_HacinamientoHogares_11.readFeatures(json_HacinamientoHogares_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HacinamientoHogares_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HacinamientoHogares_11.addFeatures(features_HacinamientoHogares_11);
var lyr_HacinamientoHogares_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HacinamientoHogares_11, 
                style: style_HacinamientoHogares_11,
                interactive: true,
    title: 'Hacinamiento (% Hogares)<br />\
    <img src="styles/legend/HacinamientoHogares_11_0.png" /> 0 - 17<br />\
    <img src="styles/legend/HacinamientoHogares_11_1.png" /> 18 - 31<br />\
    <img src="styles/legend/HacinamientoHogares_11_2.png" /> 32 - 47<br />\
    <img src="styles/legend/HacinamientoHogares_11_3.png" /> 47 - 76<br />\
    <img src="styles/legend/HacinamientoHogares_11_4.png" /> 77 - 100<br />'
        });
var format_AguamejoradaHogares_12 = new ol.format.GeoJSON();
var features_AguamejoradaHogares_12 = format_AguamejoradaHogares_12.readFeatures(json_AguamejoradaHogares_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AguamejoradaHogares_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AguamejoradaHogares_12.addFeatures(features_AguamejoradaHogares_12);
var lyr_AguamejoradaHogares_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AguamejoradaHogares_12, 
                style: style_AguamejoradaHogares_12,
                interactive: true,
    title: 'Agua mejorada (% Hogares)<br />\
    <img src="styles/legend/AguamejoradaHogares_12_0.png" /> 4 - 45<br />\
    <img src="styles/legend/AguamejoradaHogares_12_1.png" /> 46 - 73<br />\
    <img src="styles/legend/AguamejoradaHogares_12_2.png" /> 74 - 88<br />\
    <img src="styles/legend/AguamejoradaHogares_12_3.png" /> 89 - 97<br />\
    <img src="styles/legend/AguamejoradaHogares_12_4.png" /> 98 - 100<br />'
        });
var format_ViviendaadecuadaHogares_13 = new ol.format.GeoJSON();
var features_ViviendaadecuadaHogares_13 = format_ViviendaadecuadaHogares_13.readFeatures(json_ViviendaadecuadaHogares_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendaadecuadaHogares_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendaadecuadaHogares_13.addFeatures(features_ViviendaadecuadaHogares_13);
var lyr_ViviendaadecuadaHogares_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendaadecuadaHogares_13, 
                style: style_ViviendaadecuadaHogares_13,
                interactive: true,
    title: 'Vivienda adecuada (% Hogares)<br />\
    <img src="styles/legend/ViviendaadecuadaHogares_13_0.png" /> 0 - 38<br />\
    <img src="styles/legend/ViviendaadecuadaHogares_13_1.png" /> 39 - 69<br />\
    <img src="styles/legend/ViviendaadecuadaHogares_13_2.png" /> 70 - 86<br />\
    <img src="styles/legend/ViviendaadecuadaHogares_13_3.png" /> 87 - 96<br />\
    <img src="styles/legend/ViviendaadecuadaHogares_13_4.png" /> 97 - 100<br />'
        });
var format_Remocinenmasa_14 = new ol.format.GeoJSON();
var features_Remocinenmasa_14 = format_Remocinenmasa_14.readFeatures(json_Remocinenmasa_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Remocinenmasa_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Remocinenmasa_14.addFeatures(features_Remocinenmasa_14);
var lyr_Remocinenmasa_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Remocinenmasa_14, 
                style: style_Remocinenmasa_14,
                interactive: true,
    title: 'Remoción en masa<br />\
    <img src="styles/legend/Remocinenmasa_14_0.png" /> Alta<br />\
    <img src="styles/legend/Remocinenmasa_14_1.png" /> Muy Alta<br />'
        });
var format_Zonasinundadas_15 = new ol.format.GeoJSON();
var features_Zonasinundadas_15 = format_Zonasinundadas_15.readFeatures(json_Zonasinundadas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonasinundadas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasinundadas_15.addFeatures(features_Zonasinundadas_15);
var lyr_Zonasinundadas_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonasinundadas_15, 
                style: style_Zonasinundadas_15,
                interactive: true,
    title: 'Zonas inundadas <br />\
    <img src="styles/legend/Zonasinundadas_15_0.png" /> INUNDACION 2010-2011<br />\
    <img src="styles/legend/Zonasinundadas_15_1.png" /> INUNDABLE<br />'
        });
var format_LocalidadesBarranquilla_16 = new ol.format.GeoJSON();
var features_LocalidadesBarranquilla_16 = format_LocalidadesBarranquilla_16.readFeatures(json_LocalidadesBarranquilla_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesBarranquilla_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesBarranquilla_16.addFeatures(features_LocalidadesBarranquilla_16);
var lyr_LocalidadesBarranquilla_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesBarranquilla_16, 
                style: style_LocalidadesBarranquilla_16,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesBarranquilla_16.png" /> Localidades Barranquilla'
            });

        var lyr_Mapabase_17 = new ol.layer.Tile({
            'title': 'Mapa base',
            'type': 'base',
            'opacity': 0.300000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var group_CONVENCIONES = new ol.layer.Group({
                                layers: [lyr_LocalidadesBarranquilla_16,],
                                title: "CONVENCIONES"});
var group_AMENAZARIESGO = new ol.layer.Group({
                                layers: [lyr_Remocinenmasa_14,lyr_Zonasinundadas_15,],
                                title: "AMENAZA/RIESGO"});
var group_INFRAESTRUCTURAYDESARROLLO = new ol.layer.Group({
                                layers: [lyr_AccesoainternetHogares_5,lyr_ProximidadaequipamientosdeeducacinDistanciaenKm_6,lyr_ProximidadaequipamientosdesaludDistanciaenKm_7,lyr_Densidadpoblacional_8,lyr_AccesoaelectricidadHogares_9,lyr_AccesoasaneamientoadecuadoHogares_10,lyr_HacinamientoHogares_11,lyr_AguamejoradaHogares_12,lyr_ViviendaadecuadaHogares_13,],
                                title: "INFRAESTRUCTURA Y DESARROLLO"});
var group_EQUIDADEINCLUSINSOCIAL = new ol.layer.Group({
                                layers: [lyr_UsosdelSuelo_4,],
                                title: "EQUIDAD E INCLUSIÓN SOCIAL"});
var group_CALIDADDEVIDA = new ol.layer.Group({
                                layers: [lyr_IPM_1,lyr_PoblacinnacidaenVenezuela_2,lyr_AccesibilidadalespaciopblicoabiertoDistanciaMts_3,],
                                title: "CALIDAD DE VIDA"});
var group_SOSTENIBILIDADAMBIENTAL = new ol.layer.Group({
                                layers: [lyr_RecoleccinderesiduosslidosHogares_0,],
                                title: "SOSTENIBILIDAD AMBIENTAL"});

lyr_RecoleccinderesiduosslidosHogares_0.setVisible(true);lyr_IPM_1.setVisible(true);lyr_PoblacinnacidaenVenezuela_2.setVisible(true);lyr_AccesibilidadalespaciopblicoabiertoDistanciaMts_3.setVisible(true);lyr_UsosdelSuelo_4.setVisible(true);lyr_AccesoainternetHogares_5.setVisible(true);lyr_ProximidadaequipamientosdeeducacinDistanciaenKm_6.setVisible(true);lyr_ProximidadaequipamientosdesaludDistanciaenKm_7.setVisible(true);lyr_Densidadpoblacional_8.setVisible(true);lyr_AccesoaelectricidadHogares_9.setVisible(true);lyr_AccesoasaneamientoadecuadoHogares_10.setVisible(true);lyr_HacinamientoHogares_11.setVisible(true);lyr_AguamejoradaHogares_12.setVisible(true);lyr_ViviendaadecuadaHogares_13.setVisible(true);lyr_Remocinenmasa_14.setVisible(true);lyr_Zonasinundadas_15.setVisible(true);lyr_LocalidadesBarranquilla_16.setVisible(true);lyr_Mapabase_17.setVisible(true);
var layersList = [group_SOSTENIBILIDADAMBIENTAL,group_CALIDADDEVIDA,group_EQUIDADEINCLUSINSOCIAL,group_INFRAESTRUCTURAYDESARROLLO,group_AMENAZARIESGO,group_CONVENCIONES,lyr_Mapabase_17];
lyr_RecoleccinderesiduosslidosHogares_0.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_IPM_1.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_PoblacinnacidaenVenezuela_2.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_AccesibilidadalespaciopblicoabiertoDistanciaMts_3.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_UsosdelSuelo_4.set('fieldAliases', {'SIMB_ACTIV': 'SIMB_ACTIV', 'ACTIVIDAD': 'ACTIVIDAD', 'POLIGONO': 'POLIGONO', 'NOMBRE_USO': 'NOMBRE_USO', 'ETIQUETA': 'ETIQUETA', 'AREA_HAS': 'AREA_HAS', 'AREA_M2': 'AREA_M2', 'ID_USOS': 'ID_USOS', 'ID_POLIGON': 'ID_POLIGON', 'obser': 'obser', });
lyr_AccesoainternetHogares_5.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_ProximidadaequipamientosdeeducacinDistanciaenKm_6.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_ProximidadaequipamientosdesaludDistanciaenKm_7.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_Densidadpoblacional_8.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_AccesoaelectricidadHogares_9.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_AccesoasaneamientoadecuadoHogares_10.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_HacinamientoHogares_11.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_AguamejoradaHogares_12.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_ViviendaadecuadaHogares_13.set('fieldAliases', {'cod_dane': 'cod_dane', 'FID_1': 'FID_1', 'cod_dane_1': 'cod_dane_1', 'cod_dane_2': 'cod_dane_2', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_Remocinenmasa_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Amenaza': 'Amenaza', 'AREA_HAS': 'AREA_HAS', 'AREA_M2': 'AREA_M2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Zonasinundadas_15.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID': 'OBJECTID', 'TIPO': 'TIPO', 'Shape_Leng': 'Shape_Leng', 'are': 'are', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Le_3': 'Shape_Le_3', 'Shape_Area': 'Shape_Area', });
lyr_LocalidadesBarranquilla_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCALIDAD': 'LOCALIDAD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ID_LOC': 'ID_LOC', });
lyr_RecoleccinderesiduosslidosHogares_0.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_IPM_1.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_PoblacinnacidaenVenezuela_2.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_AccesibilidadalespaciopblicoabiertoDistanciaMts_3.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_UsosdelSuelo_4.set('fieldImages', {'SIMB_ACTIV': 'TextEdit', 'ACTIVIDAD': 'TextEdit', 'POLIGONO': 'TextEdit', 'NOMBRE_USO': 'TextEdit', 'ETIQUETA': 'TextEdit', 'AREA_HAS': 'TextEdit', 'AREA_M2': 'TextEdit', 'ID_USOS': 'TextEdit', 'ID_POLIGON': 'TextEdit', 'obser': 'TextEdit', });
lyr_AccesoainternetHogares_5.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_ProximidadaequipamientosdeeducacinDistanciaenKm_6.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_ProximidadaequipamientosdesaludDistanciaenKm_7.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_Densidadpoblacional_8.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_AccesoaelectricidadHogares_9.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_AccesoasaneamientoadecuadoHogares_10.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_HacinamientoHogares_11.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_AguamejoradaHogares_12.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_ViviendaadecuadaHogares_13.set('fieldImages', {'cod_dane': 'TextEdit', 'FID_1': 'Range', 'cod_dane_1': 'TextEdit', 'cod_dane_2': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_Remocinenmasa_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'Amenaza': 'TextEdit', 'AREA_HAS': 'TextEdit', 'AREA_M2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zonasinundadas_15.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID': 'TextEdit', 'TIPO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'are': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Le_3': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LocalidadesBarranquilla_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ID_LOC': 'Range', });
lyr_RecoleccinderesiduosslidosHogares_0.set('fieldLabels', {});
lyr_IPM_1.set('fieldLabels', {});
lyr_PoblacinnacidaenVenezuela_2.set('fieldLabels', {});
lyr_AccesibilidadalespaciopblicoabiertoDistanciaMts_3.set('fieldLabels', {});
lyr_UsosdelSuelo_4.set('fieldLabels', {});
lyr_AccesoainternetHogares_5.set('fieldLabels', {});
lyr_ProximidadaequipamientosdeeducacinDistanciaenKm_6.set('fieldLabels', {});
lyr_ProximidadaequipamientosdesaludDistanciaenKm_7.set('fieldLabels', {});
lyr_Densidadpoblacional_8.set('fieldLabels', {});
lyr_AccesoaelectricidadHogares_9.set('fieldLabels', {});
lyr_AccesoasaneamientoadecuadoHogares_10.set('fieldLabels', {});
lyr_HacinamientoHogares_11.set('fieldLabels', {});
lyr_AguamejoradaHogares_12.set('fieldLabels', {});
lyr_ViviendaadecuadaHogares_13.set('fieldLabels', {});
lyr_Remocinenmasa_14.set('fieldLabels', {});
lyr_Zonasinundadas_15.set('fieldLabels', {});
lyr_LocalidadesBarranquilla_16.set('fieldLabels', {});
lyr_LocalidadesBarranquilla_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});