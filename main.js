import {AreaChart} from './AreaChart.js';
import {StackedAreaChart} from './StackedAreaChart.js';

var loadedData;
var data = d3.csv('unemployment.csv', d3.autoType).then(data => {
    loadedData = data;

    var columns = loadedData.columns.slice(1,-1);

    loadedData.forEach(
        d => {let sum = 0; 
        columns.forEach(col => sum = sum + d[col]); 
        console.log(sum); 
        d.total = sum;}
    );

    var chart = AreaChart(".total_chart");
    chart.update(loadedData);
    chart.on("brushed", (range)=>{
        chart2.filterByDate(range); 
    });

    var chart2 = StackedAreaChart(".stacked_chart");
    chart2.update(loadedData);
  
});