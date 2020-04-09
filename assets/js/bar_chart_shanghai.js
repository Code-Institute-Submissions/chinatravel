//Stacked Bar Chart using ChartJS library to appear on shanghai.html page
//Average high and low temperatures of Shanghai 
//data from https://www.climatestotravel.com/

$ ( document ).ready(function() {
var barChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			datasets: [{
				label: 'Low Temperatures',
				backgroundColor: '#0100C7',
				data: [
                    36,
                    39,
					45,
					54,
					63,
					72,
                    79,
                    79,
                    72,
                    63,
                    52,
                    41
				]
			}, {
                label: 'High Temperatures',
				backgroundColor: '#c80000',
				data: [
					46,
				    50,
					57,
					68,
					77,
					82,
                    90,
                    90,
                    82,
                    73,
                    63,
                    52
				]
			}] 
		};
		window.onload = function() {
			var ctx = document.getElementById('bar_chart_shanghai').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					title: {
						display: true,
						text: 'Average Temperatures of Shanghai'
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

		document.getElementById('bar_chart_shanghai').addEventListener('click', function() {
			barChartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return data();
				});
			});
			window.myBar.update();
        });
        });