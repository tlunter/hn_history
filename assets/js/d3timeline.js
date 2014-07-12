var drawTimeline = function(entries, node) {
  /* Read CSV file: first row =>  state,murder,forcible_rape,robbery,aggravated_assault,burglary,larceny_theft,motor_vehicle_theft,population,pop100k,state_type  */
  var val_array = new Array(),
      date_array = new Array();

  var sampsize = entries.length;

  for (var i=0; i < sampsize; i++) {
    date_array[i] = new Date(entries[i].created_at * 1000);
    val_array[i] = { title: entries[i].title, created_at: date_array[i], y: entries[i].position };
  }

  var yMaxValue = 30,
      yMinValue = 1;

  var b = 5,
      w = b * sampsize,
      h = 500,
      p = 80,
      x = d3.scale.linear().domain([0, sampsize]).range([0, w]);
      xTime = d3.time.scale().domain([date_array[0], date_array[sampsize-1]]).range([0, w]),
      y = d3.scale.linear().domain([yMaxValue, yMinValue ]).range([h, 0]);

  var vis = d3.select(node)
     .data([val_array])
     .append("svg")
     .attr("width", w + p * 2)
     .attr("height", h + p + 5)
     .append("g")
       .attr("transform", "translate(" + p + ",5)");

  var xAxis = d3.svg.axis()
    .scale(xTime)
    .ticks(sampsize / 8)
    .tickFormat(d3.time.format("%b %d %I:%M"));

  vis.append("g")
    .attr("transform", "translate(0," + h + ")")
    .attr("class", "axis")
    .call(xAxis)
    .selectAll("text")
    .attr("transform", "translate(-27, 38) rotate(295)");

  var yAxis = d3.svg.axis()
    .scale(y)
    .tickValues([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]);

  vis.append("g")
    .attr("transform", "translate(0,0)")
    .attr("class", "axis")
    .call(yAxis.orient("left"));

  vis.append("g")
    .attr("transform", "translate(" + w + ",0)")
    .attr("class", "axis")
    .call(yAxis.orient("right"));

  var line = d3.svg.line()
    .x(function(d) { return xTime(d.created_at) })
    .y(function(d) { return y(d.y) })
    .interpolate('cardinal');

  vis.append("path")
    .datum(val_array)
    .attr('class', 'line')
    .attr('d', line);

  vis.selectAll("circle")
     .data(val_array)
     .enter().append("circle")
       .attr("cx", function(d) { return xTime(d.created_at); })
       .attr("cy", function(d) { return y(d.y); })
       .attr("r", function(d) { return Math.sqrt( 5 / Math.PI); });
};
