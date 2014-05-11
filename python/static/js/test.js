myApp.controller('vivcontroller', function($scope, $http) {

	var months = {
		'Jan' : 1,
		'Feb' : 2,
		'Mar' : 3,
		'Apr' : 4,
		'May' : 5,
		'Jun' : 6,
		'Jul' : 7,
		'Aug' : 8,
		'Sep' : 9,
		'Oct' : 10,
		'Nov' : 11,
		'Dec' : 12
	};

	$scope.data = [
		{'date': '1-Jun-13', 'area': 'KOTHUNUR -', 'quantity': '100', 'schoolName': 'GHPS-GEDDALA HALLI'},
		{'date': '1-Jun-13', 'area': 'KOTHUNUR -', 'quantity': '100', 'schoolName': 'GHPS-GEDDALA HALLI'},
		{'date': '1-Jun-13', 'area': 'KOTHUNUR -', 'quantity': '50', 'schoolName': 'RAJMAHAL HS-NAGASHETTI HALLI'},
		{'date': '1-Jun-13', 'area': 'KOTHUNUR -', 'quantity': '50', 'schoolName': 'RAJMAHAL HS-NAGASHETTI HALLI'},
		{'date': '1-Jun-13', 'area': 'SHIVAJINAG', 'quantity': '170', 'schoolName': 'GHPS-PALACE GUTTAHALLI'},
		{'date': '1-Jun-13', 'area': 'SHIVAJINAG', 'quantity': '170', 'schoolName': 'GHPS-PALACE GUTTAHALLI'},
		{'date': '1-Jun-13', 'area': 'SHIVAJINAG', 'quantity': '60', 'schoolName': 'GUHPS-PALACE GUTTAHALLI'},
		{'date': '1-Jun-13', 'area': 'SHIVAJINAG', 'quantity': '60', 'schoolName': 'GUHPS-PALACE GUTTAHALLI'},
		{'date': '1-Jun-13', 'area': 'SHIVAJINAG', 'quantity': '100', 'schoolName': 'GHS-PALACE GUTTAHALLI'},
		{'date': '1-Jun-13', 'area': 'SHIVAJINAG', 'quantity': '100', 'schoolName': 'GHS-PALACE GUTTAHALLI'}
	];

	$scope.selectedDate = "2011-05-11";
	$scope.dateOnChange = function() {
		
	}

	data = [];
	for( var i = 0; i < $scope.data.length; i++) {
		data.push({
			x : i,
			y : parseInt($scope.data[i]['quantity'])
		});
	}

	var margin = {top: 20, right: 20, bottom: 30, left: 50};
	var svgWidth = 600;
	var svgHeight = 300;
	var yAxisOffset = 50;
	var xAxisOffset = 12;
	var dataMinValue = d3.min(data, function(d) { return d.y; });
	var dataMaxValue = d3.max(data, function(d) { return d.y; });
	var dataMinMaxExpandFraction = 0.1;

	var width = svgWidth - margin.left - margin.right - yAxisOffset;
	var height = svgHeight - margin.top - margin.bottom - xAxisOffset;

	var container = d3.select("#lineChart");
	var svgElement = container.append("svg")
		.attr({
			class : "chart",
			width : svgWidth,
			height : svgHeight
			})
		.style({
			display : "block",
			margin : "10 auto 10 auto"
		});

	var y = d3.scale.linear()
		.domain([dataMinValue * (1 - dataMinMaxExpandFraction), dataMaxValue * (1 + dataMinMaxExpandFraction)])
		.range([height, 0]);

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left");

	var barWidth = width / data.length;

	var bar =  svgElement.selectAll("g")
		.data(data).enter()
		.append("g")
		.attr({
				"transform" : function(d, i) { return "translate(" + (i * barWidth + margin.left + yAxisOffset) + ", " + margin.top + ")"; },
				"class" : "bar"
			});

	bar.append("rect")
		.attr({
			y : function(d) { return y(d.y); },
			height : function(d) { return height - y(d.y); },
			width : barWidth - 1
		})

	bar.append("text")
		.attr({
			x : barWidth / 2,
			y : function(d) { 
				return y(d.y) + 3; },
			dy : "0.75em",
			class : "yvalue"
		})
		.text(function(d) { return d.y; });

	bar.append("text")
		.attr({
			x : barWidth / 2,
			y : function(d) { return height + 3; },
			dy : "075em",
			class : "xvalue"
		})
		.style("fill", "#000000")
		.text(function(d) {return d.x});

	var yAxisGroup = svgElement.append("g")
		.attr({
			"transform" : "translate(" + (margin.left + yAxisOffset) + ", " + margin.top + ")",
			"class" : "axis"
		})
		.call(yAxis);
})