//Stacked Bar Chart using ChartJS library to appear on suzhou.html page
//Average high and low temperatures of each city 
//data from https://www.climatestotravel.com/

var temperatureData = {
	'suzhou': {
		'low': [36, 39, 45, 54, 63, 72, 79, 79, 72, 63, 52, 41],
		'high': [46, 50, 57, 68, 77, 82, 90, 90, 82, 73, 63, 52]
	},
	'shanghai': {
		'low': [36, 39, 45, 54, 63, 72, 79, 79, 72, 63, 52, 41],
		'high': [46, 50, 57, 68, 77, 82, 90, 90, 82, 73, 63, 52]
	},
	'qingdao': {
		'low': [27, 28, 36, 46, 55, 64, 72, 73, 66, 55, 43, 32],
		'high': [46, 50, 57, 68, 77, 82, 90, 90, 82, 73, 63, 52]
	},
	'guilin': {
		'low': [34, 39, 45, 57, 66, 73, 79, 77, 70, 59, 46, 37],
		'high': [46, 52, 59, 72, 81, 86, 91, 90, 82, 73, 63, 52],
	},
	'chengdu': {
		'low': [37, 41, 46, 55, 63, 70, 72, 72, 66, 59, 50, 39],
		'high': [48, 54, 61, 72, 81, 82, 86, 86, 79, 70, 61, 51],
	},
	'beijing': {
		'low': [18, 21, 32, 46, 57, 66, 72, 70, 59, 46, 32, 21],
		'high': [36, 41, 54, 68, 79, 86, 88, 86, 79, 66, 50, 39]
	}
}


function createChart(data, place) {
	var barChartData = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		datasets: [{
			label: 'Low Temperatures',
			backgroundColor: '#0100C7',
			data: data['low']
		}, {
			label: 'High Temperatures',
			backgroundColor: '#c80000',
			data: data['high']
		}]
	};

	var ctx = document.getElementById('bar_chart_' + place).getContext('2d');
	window.myBar = new Chart(ctx, {
		type: 'bar',
		data: barChartData,
		options: {
			title: {
				display: true,
				text: 'Average Temperatures of ' + place.charAt(0).toUpperCase() + place.slice(1)
			},
			tooltips: {
				mode: 'index',
				intersect: false
			},
			responsive: true,
			scales: {
				xAxes: [{
					stacked: true,
				}],
				yAxes: [{
					stacked: true
				}]
			}
		}
	});

	document.getElementById('bar_chart_' + place).addEventListener('click', function () {
		barChartData.datasets.forEach(function (dataset) {
			dataset.data = dataset.data.map(function () {
				return data();
			});
		});
		window.myBar.update();
	});
}


$(document).ready(function () {
	let barChart = document.getElementsByTagName("canvas")[0]
	let place = barChart.getAttribute("place")
	createChart(temperatureData[place], place);
});