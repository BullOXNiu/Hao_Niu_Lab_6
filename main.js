import {AreaChart} from './AreaChart.js';
import {StackedAreaChart} from './StackedAreaChart.js';

var loadedData;
var data = d3.csv('unemployment.csv', d3.autoType).then(data => {
    loadedData = data;
    var columns = loadedData.columns.slice(1,-1);

    loadedData.forEach(
        d => {let sum = 0; 
        columns.forEach(col => sum = sum + d[col]); 
        d.total = sum;}
    );

    var areaChart = AreaChart(".total_chart");
    areaChart.update(loadedData);
    areaChart.on("brushed", (range)=>{
        stackedChart.filterByDate(range); 
    });

    var stackedChart = StackedAreaChart(".stacked_chart");
    stackedChart.update(loadedData);
  
});