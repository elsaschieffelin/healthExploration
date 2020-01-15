var width = 750;
var height = 750;
var svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g');
var proj =  d3.geoMercator()
                .scale(130)
                .translate([width/2, height/2]);
var path = d3.geoPath().projection(proj);
d3.json('js/world_countries.json', function(data) {
    var features = data.features;
    svg.append('g')
        .attr('class', 'country')
        .selectAll('path')
        .data(features)
        .enter().append('path')
        .attr('d', path)
        .style('fill', 'white')
        .style('stroke', 'black')
});
