
// Create map instance
// var chart = am4core.create("chartdiv", am4maps.MapChart);
// chart.seriesContainer.resizable = false;
// chart.zoomControl = new am4maps.ZoomControl();
// chart.chartContainer.wheelable = false;

// // Set map definition
// chart.geodata = am4geodata_usaLow;

// // Set projection
// chart.projection = new am4maps.projections.AlbersUsa();

// // Create map polygon series
// var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
// polygonSeries.useGeodata = true;

// // Configure series
// var polygonTemplate = polygonSeries.mapPolygons.template;
// // polygonTemplate.tooltipText = "{name}";
// polygonTemplate.fill = am4core.color("#DEE7F0");
// polygonTemplate.stroke = am4core.color("#FFFFFF");
// polygonTemplate.strokeWidth = 2;

const offices = [
    {
        name: 'Acacio Fertility Center',
        phone: '949-249-9200',
        website: 'acaciofertility.com',
        city: 'Laguna Niguel',
        lat: 33.5293205,
        lng: -117.7413646,
        state: 'CA'
    },
    {
        name: 'California Center for Reproductive Health',
        phone: '310-550-1951',
        website: 'center4reproduction.com',
        city: 'West Hollywood',
        lat: 33.5293205,
        lng: -117.7413646,
        state: 'CA'
    },
    {
        name: 'California Fertility Partners',
        phone: '310-828-4008',
        website: 'californiafertilitypartners.com',
        city: 'Los Angeles',
        lat: 33.5293205,
        lng: -117.7413646,
        state: 'CA'
    },
    {
        name: 'CARE for the Bay Area',
        phone: '408-628-0783',
        website: 'care4ba.com',
        city: 'Los Gatos',
        lat: 33.5293205,
        lng: -117.7413646,
        state: 'CA'
    },
    {
        name: 'Huntington Reproductive Center (Encino)',
        phone: '408-628-0783',
        website: 'care4ba.com',
        city: 'Los Gatos',
        lat: 33.5293205,
        lng: -117.7413646,
        state: 'CA'
    },
    {
        name: 'Huntington Reproductive Center (Fullerton)',
        phone: '714-738-4200',
        website: 'havingbabies.com',
        city: 'Fullerton',
        lat: 33.5293205,
        lng: -117.7413646,
        state: 'CA'
    },
    {
        name: 'Huntington Reproductive Center (Newport Beach)',
        phone: '949-287-5600',
        website: 'havingbabies.com',
        city: 'Newport Beach',
        lat: 33.5293205,
        lng: -117.7413646,
        state: 'CA'
    },
    {
        name: 'Lane Fertility Center',
        phone: '415-893-0391',
        website: 'lanefertilityinstitute.com',
        city: 'San Francisco',
        lat: 33.5293205,
        lng: -117.7413646,
        state: 'CA'
    },
    {
        name: 'Newport Fertility Center',
        phone: '949-222-1290',
        website: 'newportfertility.com',
        city: 'Newport Beach',
        lat: 33.5293205,
        lng: -117.7413646,
        state: 'CA'
    },
    {
        name: 'Northern California Fertility Medical Center',
        phone: '916-773-2229',
        website: 'ncfmc.com',
        city: 'Roseville',
        lat: 33.5293205,
        lng: -117.7413646,
        state: 'CA'
    }
];

const mapArea = $('[data-m-area="map-area"]');

function build_list(item) {
    return '<div class="mo-item" data-location-lng="'+item.lng+'" data-location-lat="'+item.lat+'">' +
    '    <div class="mo-item-cell name">'+item.name+'</div>'+
    '    <div class="mo-item-cell phone">'+item.phone+'</div>'+
    '    <div class="mo-item-cell website">'+item.website+'</div>'+
    '    <div class="mo-item-cell city">'+item.city+'</div>'+
    '    <div class="mo-item-cell state">'+item.state+'</div>'+
    '</div>';
}


