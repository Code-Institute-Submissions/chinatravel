$ ( document ).ready(function() {
var barChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			datasets: [{
				label: 'Low Temperatures',
				backgroundColor: '#0100C7',
				data: [
                    27,
                    28,
                    36,
                    46,
                    55,
                    64,
                    72,
                    73,
                    66,
                    55,
                    43,
                    32
				]
			}, {
                label: 'High Temperatures',
				backgroundColor: '#c80000',
				data: [
                    37,
                    41,
                    48,
                    59,
                    68,
                    75,
                    81,
                    82,
                    77,
                    68,
                    54,
                    43
				]
			}] 
		};
		window.onload = function() {
			var ctx = document.getElementById('bar_chart_qingdao').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					title: {
						display: true,
						text: 'Average Temperatures of Qingdao'
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

		document.getElementById('bar_chart_qingdao').addEventListener('click', function() {
			barChartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return data();
				});
			});
			window.myBar.update();
        });
        });