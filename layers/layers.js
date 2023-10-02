var wms_layers = [];

var format_baujahr_amsterdam__bouwjaar_0 = new ol.format.GeoJSON();
var features_baujahr_amsterdam__bouwjaar_0 = format_baujahr_amsterdam__bouwjaar_0.readFeatures(json_baujahr_amsterdam__bouwjaar_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_baujahr_amsterdam__bouwjaar_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_baujahr_amsterdam__bouwjaar_0.addFeatures(features_baujahr_amsterdam__bouwjaar_0);
var lyr_baujahr_amsterdam__bouwjaar_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_baujahr_amsterdam__bouwjaar_0, 
                style: style_baujahr_amsterdam__bouwjaar_0,
                interactive: true,
    title: 'baujahr_amsterdam__bouwjaar<br />\
    <img src="styles/legend/baujahr_amsterdam__bouwjaar_0_0.png" /> 1850 - 1927<br />\
    <img src="styles/legend/baujahr_amsterdam__bouwjaar_0_1.png" /> 1927 - 1960<br />\
    <img src="styles/legend/baujahr_amsterdam__bouwjaar_0_2.png" /> 1960 - 1986<br />\
    <img src="styles/legend/baujahr_amsterdam__bouwjaar_0_3.png" /> 1986 - 2001<br />\
    <img src="styles/legend/baujahr_amsterdam__bouwjaar_0_4.png" /> 2001 - 2019<br />'
        });

lyr_baujahr_amsterdam__bouwjaar_0.setVisible(true);
var layersList = [lyr_baujahr_amsterdam__bouwjaar_0];
lyr_baujahr_amsterdam__bouwjaar_0.set('fieldAliases', {'fid': 'fid', 'Bouwjaar': 'Bouwjaar', });
lyr_baujahr_amsterdam__bouwjaar_0.set('fieldImages', {'fid': 'TextEdit', 'Bouwjaar': 'Range', });
lyr_baujahr_amsterdam__bouwjaar_0.set('fieldLabels', {'fid': 'no label', 'Bouwjaar': 'no label', });
lyr_baujahr_amsterdam__bouwjaar_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});