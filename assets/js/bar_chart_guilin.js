$ ( document ).ready(function() {
var barChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			datasets: [{
				label: 'Low Temperatures',
				backgroundColor: '#0100C7',
				data: [
                    34,
                    39,
                    45,
                    57,
                    66,
                    73,
                    79,
                    77,
                    70,
                    59,
                    46,
                    37
				]
			}, {
                label: 'High Temperatures',
				backgroundColor: '#c80000',
				data: [
                    46,
                    52,
                    59,
                    72,
                    81,
                    86,
                    91,
                    90,
                    82,
                    73,
                    63,
                    52

				]
			}] 
		};
		window.onload = function() {
			var ctx = document.getElementById('bar_chart_guilin').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					title: {
						display: true,
						text: 'Average Temperatures of Guilin'
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
		};

		document.getElementById('bar_chart_guilin').addEventListener('click', function() {
			barChartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return data();
				});
			});
			window.myBar.update();
        });
        });