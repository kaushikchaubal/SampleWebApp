	
function loadAreas() {
	$.getJSON("http://ec2-54-237-33-114.compute-1.amazonaws.com:8020/ec2/Maternity/getTrustList", function(data) {
		$.each(data, function(key, val) {
			$("#areaSelector")
			.append($("<option></option>")
				.attr("value",key)
				.text(val.name)); 
		});
	});
}