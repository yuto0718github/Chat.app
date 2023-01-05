$(document).ready(function() {
    console.log("script js done");
    pieChartData();
    // lineChartData();
    // barChartData();
});

console.log("script js done 2");

const pieChartData = async () => {
    Highcharts.chart('pieChart', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Covid-19 Confirmed, Deaths, Recovered'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Data',
            colorByPoint: true,
            data: [{
                name: 'Confirmed',
                // y: confirmedData,
                selected: true,
                color: '#33F4FF'
            }, {
                name: 'Deaths',
                // y: deathsData,
                color: '#FF3633'
            }, {
                name: 'Recovered',
                // y: recoveredData,
                color: '#56FF33'
            }]
        }]
    });
}

// const lineChartData = async () => {
//     let datesArray = [];
//     let confirmedArray = [];
//     let deathsArray = [];
//     await $.ajax({
//         url: '/dailyData',
//         type: 'GET',
//         datatype: 'json',
//         success: (response) => {
//             if(response !== null){
//                 response.forEach(element => {
//                    datesArray.push(element.reportDate);
//                    confirmedArray.push(element.confirmed.total);
//                    deathsArray.push(element.deaths.total); 
//                 });
//             }
//         },
//         error: (err) => {
//             console.log(err);
//         }
//     })
//     Highcharts.chart('lineChart', {
//         chart: {
//             type: 'areaspline'
//         },
//         title: {
//             text: 'Covid-19 Daily Data Confirmed and Deaths'
//         },    
//         yAxis: {
//             title: {
//                 text: 'Total'
//             }
//         },
    
//         xAxis: {
//             categories: datesArray,
//             crosshair: true
//         },
    
//         legend: {
//             layout: 'horizontal',
//             align: 'center',
//             verticalAlign: 'bottom'
//         },    
//         series: [{
//             name: 'Confirmed',
//             color: '#33F4FF',
//             data: confirmedArray
//         }, {
//             name: 'Deaths',
//             color: '#FF3633',
//             data: deathsArray
//         }],
    
//         responsive: {
//             rules: [{
//                 condition: {
//                     maxWidth: 500
//                 },
//                 chartOptions: {
//                     legend: {
//                         layout: 'horizontal',
//                         align: 'center',
//                         verticalAlign: 'bottom'
//                     }
//                 }
//             }]
//         }
    
//     });
// }

// const barChartData = async () => {
//     let datesArray = [];
//     let confirmedArray = [];
//     let deathsArray = [];
//     await $.ajax({
//         url: '/dailyData',
//         type: 'GET',
//         datatype: 'json',
//         success: (response) => {
//             if(response !== null){
//                 response.forEach(element => {
//                    datesArray.push(element.reportDate);
//                    confirmedArray.push(element.confirmed.total);
//                    deathsArray.push(element.deaths.total); 
//                 });
//             }
//         },
//         error: (err) => {
//             console.log(err);
//         }
//     })
//     Highcharts.chart('barChart', {
//         chart: {
//             type: 'bar'
//         },
//         title: {
//             text: 'Covid-19 Daily Data Confirmed and Deaths'
//         },    
//         yAxis: {
//             title: {
//                 text: 'Total'
//             }
//         },
    
//         xAxis: {
//             categories: datesArray,
//             crosshair: true
//         },
    
//         legend: {
//             layout: 'horizontal',
//             align: 'center',
//             verticalAlign: 'bottom'
//         },    
//         series: [{
//             name: 'Confirmed',
//             color: '#33F4FF',
//             data: confirmedArray
//         }, {
//             name: 'Deaths',
//             color: '#FF3633',
//             data: deathsArray
//         }],
    
//         responsive: {
//             rules: [{
//                 condition: {
//                     maxWidth: 500
//                 },
//                 chartOptions: {
//                     legend: {
//                         layout: 'horizontal',
//                         align: 'center',
//                         verticalAlign: 'bottom'
//                     }
//                 }
//             }]
//         }
    
//     });
// }