$( document ).ready(function() {
var barChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			datasets: [{
				label: 'Low Temperatures',
				backgroundColor: '#0100C7',
				data: [
                    18,
                    21,
					32,
					46,
					57,
					66,
                    72,
                    70,
                    59,
                    46,
                    32,
                    21
				]
			}, {
                label: 'High Temperatures',
				backgroundColor: '#c80000',
				data: [
					36,
				    41,
					54,
					68,
					79,
					86,
                    88,
                    86,
                    79,
                    66,
                    50,
                    39
				]
			}] 
		};
		window.onload = function() {
			var ctx = document.getElementById('bar_chart_beijing').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					title: {
						display: true,
						text: 'Average Temperatures of Beijing'
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

		document.getElementById('bar_chart_beijing').addEventListener('click', function() {
			barChartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return data();
				});
			});
			window.myBar.update();
        });
        });