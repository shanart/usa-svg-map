"use strict";

/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */
// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.seriesContainer.resizable = false;
chart.zoomControl = new am4maps.ZoomControl();
chart.chartContainer.wheelable = false; // Set map definition

chart.geodata = am4geodata_usaLow; // Set projection

chart.projection = new am4maps.projections.AlbersUsa(); // Create map polygon series

var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true; // Configure series

var polygonTemplate = polygonSeries.mapPolygons.template; // polygonTemplate.tooltipText = "{name}";

polygonTemplate.fill = am4core.color("#DEE7F0");
polygonTemplate.stroke = am4core.color("#FFFFFF");
polygonTemplate.strokeWidth = 2;