
// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.seriesContainer.resizable = false;
chart.zoomControl = new am4maps.ZoomControl();
chart.chartContainer.wheelable = false;

// // Set map definition
chart.geodata = am4geodata_usaLow;

// // Set projection
chart.projection = new am4maps.projections.AlbersUsa();

// // Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;

// // Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
// // polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#DEE7F0");
polygonTemplate.stroke = am4core.color("#FFFFFF");
polygonTemplate.strokeWidth = 2;


// ============== Helpers ==============
// Slugify a string
function slugify(str)
{
    str = str.replace(/^\s+|\s+$/g, '');

    // Make the string lowercase
    str = str.toLowerCase();

    // Remove accents, swap ñ for n, etc
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    // Remove invalid chars
    str = str.replace(/[^a-z0-9 -]/g, '') 
    // Collapse whitespace and replace by -
    .replace(/\s+/g, '-') 
    // Collapse dashes
    .replace(/-+/g, '-'); 

    return str;
}
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function (search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
        }
    });
}

// ============== Data ==============
const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL',
                'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
                'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX',
                'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

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
        city: 'Roseville',
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
const mapStates = $('[data-m-area="states"]');
const mapCities = $('[data-m-area="cities"]');
const mapSearch = $('[data-m-area="search"]');
const mainArea = $('[data-m-area="main"]');

// ============== DOM builders ==============
function __m__build_item(item) {
    return '<div class="mo-item">' +
    '    <div class="mo-item-cell name">'+item.name+'</div>' +
    '    <div class="mo-item-cell phone"><a href="tel:'+item.phone+'">'+item.phone+'</a></div>' +
    '    <div class="mo-item-cell website"><a href="https://'+item.website+'">'+item.website+'</a></div>' +
    '    <div class="mo-item-cell city">'+item.city+'</div>' +
    '    <div class="mo-item-cell state">'+item.state+'</div></div>';
}

function __m__build_list(list) {
    let output = '';
    list.map(i => {
        output += __m__build_item(i);
    });
    mapArea.html(output);
}

function __m__build_states(states) {
    let output = '';
    states.map(s => output += '<option value="' + s + '">' + s + '</option>');
    mapStates.html(output);
}

function __m__collect_cities() {
    let cities = [], output = '';
    offices.map(o => !cities.includes(o.city) ? cities.push(o.city) : null );
    cities.map(c => output += '<option value="'+c+'">'+c+'</option>');
    mapCities.html(output);
}

// ============== DOM startup ==============
// build cities dropdown
__m__collect_cities();

// build states dropdown
__m__build_states(states);

// starter list
__m__build_list(offices);

// ============== Filter functions ==============
function __m__filter_by_name(q) {
    const r = offices.filter(o => o.name.toLowerCase().includes(q.toLowerCase()));
    r.length > 0 ? __m__build_list(r) : mainArea.trigger('map:not-found');
}
function __m__filter_by_state(q) {
    const r = offices.filter(o => o.state === q);
    r.length > 0 ? __m__build_list(r) : mainArea.trigger('map:not-found');
}
function __m__filter_by_city(q) {
    const r = offices.filter(o => o.city === q);
    r.length > 0 ? __m__build_list(r) : mainArea.trigger('map:not-found');
}

// ============== Filter events ==============
// Search input
mainArea.on('map:search', (e, q) => {
    __m__filter_by_name(q);
});

// Change State 
mainArea.on('map:state', (e, value) => {
    __m__filter_by_state(value);
});

// Change City
mainArea.on('map:city', (e, value) => {
    __m__filter_by_city(value);
});

// no filter/search result
mainArea.on('map:not-found', () => {
    __m__build_list(offices);
});

// ============== Dom events ==============
mapSearch.on('keyup', e => mainArea.trigger('map:search', e.target.value));
mapStates.on('change', e => mainArea.trigger('map:state', e.target.value));
mapCities.on('change', e => mainArea.trigger('map:city', e.target.value));
