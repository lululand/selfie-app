const chart2Data = [
  { x: 80, y: 200, z: 30, color: 'green' },
  { x: 50, y: 50, z: 70, color: 'yellow' },
  { x: 140, y: 240, z: 80, color: 'pink' },
  { x: 10, y: 120, z: 40, color: 'brown' },
  { x: 200, y: 280, z: 30, color: 'orange' }
];

// create svg - a container to hold our viz
const svg2 = d3.select('#chart2')
  .append('svg')
    .attr('width', 300)
    .attr('height', 300)
    .style('background-color', '#f1f1f1');

// create svg elements from data
svg2.selectAll('circle')    // create virtual circle template
    .data(chart2Data)     // bind data
    .enter()              // for each row in the data...
    .append('circle')     // bind the circle and data rows so that...
  // .attr('id', function(d) { return d[0]; })  // set circle's id accd to x
      .attr('cx', function (d) { return d.x; })     // set circle's h pos accd to x
      .attr('cy', function (d) { return d.y; })      // set circle's v pos accd to y
      .attr('r', function (d) { return d.z; })     // set the radius accd to z
      .attr('fill', (d) => d.color)
    .append('svg:title')
      .text(function (d) { return (d.x + ", " + d.y + ", " + d.z); });