	
function loadAreas() {
	$.getJSON("http://localhost:3000/getName", function(data) {
		$.each(data, function(key, val) {
			$("#nameSelector")
			.append($("<option></option>")
				.attr("value",key)
				.text(val.name)); 
		});
	});
}