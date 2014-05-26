	
		function refreshChart(areaCode) {
			var url = "http://ec2-54-237-33-114.compute-1.amazonaws.com:8020/ec2/Maternity/getMethodOfDelivery?id=" + areaCode;
			
			var options = {
				chart: {
					type: 'column',
					renderTo: 'chart'
				},
				title: {
					text: 'Method of Delivery'
				},
				xAxis: {
					categories: [],
					title: {
						text: 'Area'
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Incidents',
						align: 'high'
					},
					labels: {
						overflow: 'justify'
					}
				},
				series: []				 
			};
			
			$.getJSON(url, function(data) {
				var x_categories = [];
				var data_series = [];
				
				var series1 = [];
				
				$.each(data, function(key,val) { 
					if (key == "Spontaneous" || key == "Elective_caesarean" || key == "Emergency_caesarean" || key == "Instrumental" || key == "Unknown" )
					{
						x_categories.push(key);
						series1.push(val);
					}
				});
				
				options.xAxis.categories = x_categories;
			
				data_series.push({name: data.Description, data:series1});
				
				console.info(data_series);
				
				options.series = data_series;
				
				var chart = new Highcharts.Chart(options);
			});
		}

		
		function btnRefresh_Clicked() {
			var areaCode = $("#areaSelector").val();
			refreshChart(areaCode);
		}
	
		$(function() {
			loadAreas();
			refreshChart("RVV");
			
			$("#btnRefresh").click(btnRefresh_Clicked);
		});