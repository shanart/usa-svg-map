"use strict";

am4core.ready(function () {
  var chart = am4core.create("chartdiv", am4maps.MapChart);
  chart.geodata = am4geodata_worldLow;
  chart.projection = new am4maps.projections.Miller();
  chart.seriesContainer.resizable = false;
  chart.zoomControl = new am4maps.ZoomControl();
  chart.chartContainer.wheelable = false;
  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.exclude = ["AQ"];
  polygonSeries.useGeodata = true;
  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.polygon.fillOpacity = 0;
  var aquaSeries = chart.series.push(new am4maps.MapImageSeries());
  aquaSeries.mapImages.template.propertyFields.longitude = "longitude";
  aquaSeries.mapImages.template.propertyFields.latitude = "latitude";
  aquaSeries.mapImages.template.propertyFields.blank = "blank";
  aquaSeries.mapImages.template.propertyFields.id = "id";
  var marker = aquaSeries.mapImages.template.createChild(am4core.Image); // marker.href = "<?php src('/img/pin.svg'); ?>";

  marker.propertyFields.href = "icon";
  marker.width = 66;
  marker.height = 66;
  marker.nonScaling = true;
  marker.horizontalCenter = "middle";
  marker.verticalCenter = "middle";
  aquaSeries.mapImages.template.events.on('hit', function (ev) {
    buildModal(ev.target.id, ev.point);
  }, this);
  var colorSet = new am4core.ColorSet();
  aquaSeries.data = 'data';

  function buildModal(id, point) {
    document.querySelector('.project-popup').classList.remove('active');
    ;
    var modal = document.querySelector('.project-popup');
    var aqua = aquaSeries.data.filter(function (a) {
      return a.id === id;
    });
    modal.classList.remove('empty');

    if (aqua.length) {
      if (aqua[0].blank) {
        modal.classList.add('empty');
      }

      if (!aqua[0].blank) {
        document.querySelector('[project-d-url]').setAttribute('href', aqua[0].url);
        document.querySelector('[project-d-title-link]').setAttribute('href', aqua[0].url);
      } else {
        document.querySelector('[project-d-url]').setAttribute('href', '#');
        document.querySelector('[project-d-title-link]').setAttribute('href', "#");
      }

      document.querySelector('[project-d-date]').innerHTML = aqua[0].date;
      document.querySelector('[project-d-title]').innerHTML = aqua[0].title;
      document.querySelector('[project-d-country]').innerHTML = aqua[0].country;
      document.querySelector('[project-d-image]').setAttribute('src', aqua[0].image);
    }

    modal.style.top = point.y - 65 + 'px'; // + document window height

    modal.style.left = point.x - 55 + 'px';
    modal.classList.add('active');

    if (!aqua[0].blank) {
      document.querySelector('.project-popup-content').addEventListener('click', function () {
        window.location.href = aqua[0].url;
      });
    }

    document.querySelector('[project-d-close]').addEventListener('click', function () {
      modal.classList.remove('active');
    });

    window.onscroll = function () {
      modal.classList.remove('active');
    };

    window.addEventListener('click', function (event) {
      if (event.target.nodeName != 'image') {
        modal.classList.remove('active');
      }
    });
  }

  ;
});