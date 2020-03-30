$ ( document ).ready(function() {
var barChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			datasets: [{
				label: 'Low Temperatures',
				backgroundColor: '#0100C7',
				data: [
                    37,
                    41,
					46,
					55,
					63,
					70,
                    72,
                    72,
                    66,
                    59,
                    50,
                    39
				]
			}, {
                label: 'High Temperatures',
				backgroundColor: '#c80000',
				data: [
					48,
				    54,
					61,
					72,
					81,
					82,
                    86,
                    86,
                    79,
                    70,
                    61,
                    51
				]
			}] 
		};
		window.onload = function() {
			var ctx = document.getElementById('bar_chart_chengdu').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					title: {
						display: true,
						text: 'Average Temperatures of Chengdu'
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

		document.getElementById('bar_chart_chengdu').addEventListener('click', function() {
			barChartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return data();
				});
			});
			window.myBar.update();
        });
        });