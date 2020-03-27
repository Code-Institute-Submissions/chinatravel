
$(document).ready(function () {
    var chart = dc.barChart('#beijingTemp');
    function renderBarChart() {

        d3.csv("assets/beijingTemp.csv").then(function (temperate_records) {
            var ndx = crossfilter(temperate_records);
            var tempDimension = ndx.dimension(function (data) 
            { 
                return parseInt(data['high'])
            });
            var speedSumGroup = tempDimension.group()

            chart
                .width(500)
                .height(200)
                .x(d3.scaleLinear().domain([1, 12]))
                .brushOn(false)
                .yAxisLabel("Average Temperature")
                .xAxisLabel("Month")
                .dimension(tempDimension)
                .group(speedSumGroup)
                .on('renderlet', function (chart) {
                    chart.selectAll('rect').on('click', function (d) {
                        console.log('click!', d);
                    });
                });
            chart.render();
        });
    }
    
    renderBarChart();
});