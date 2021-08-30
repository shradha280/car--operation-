$(document).ready(function () {
  Highcharts.chart('sales_makewise_lead_chart', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Makewise<br>Lead<br>Count',
      align: 'center',
      verticalAlign: 'middle',
      y: 70
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          /* enabled: true,*/
          distance: 10,
          style: {
            textOverflow: 'clip'
          },
          format: '<b>{point.name}</b>: {point.y}'
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '100%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Make',
      innerSize: '50%',
      data: [
        ['Mercedes Benz', 25],
        ['Audi', 35],
        ['Jaguar', 15],
        ['Range Rover', 40],
        ['Land Rover', 20],
        ['BMW', 20],
        ['Mini Cooper', 20],
      ]
    }]
  });

});

$(document).ready(function () {
  Highcharts.chart('sales_monthly_eval_chart', {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Segmenwise total sales monthly evaluation'
      },
      // stackLabels: {
      //     enabled: true,
      //     shadow: false,
      //     style: {
      //         fontWeight: 'bold',
      //         color: ( // theme
      //             Highcharts.defaultOptions.title.style &&
      //             Highcharts.defaultOptions.title.style.color
      //         ) || 'gray'
      //     }
      // }
    },
    legend: {
      align: 'center',
      x: -30,
      verticalAlign: 'top',
      y: -10,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'D',
      data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
      name: 'E',
      data: [2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2]
    }, {
      name: 'F',
      data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
      name: 'F+',
      data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
      name: 'J',
      data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
      name: 'S',
      data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }]
  });
});

$(document).ready(function () {
  Highcharts.chart('sales_yearly_segment_policy_count_chart', {
    colors: ['#120edf', '#3686d9', '#f26b0b', '#e7f608', '#7536d9', '#0cecae'],
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['2021', '2022']
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
      // stackLabels: {
      //     enabled: true,
      //     shadow: false,
      //     style: {
      //         fontWeight: 'bold',
      //         color: ( // theme
      //             Highcharts.defaultOptions.title.style &&
      //             Highcharts.defaultOptions.title.style.color
      //         ) || 'gray'
      //     }
      // }
    },
    legend: {
      align: 'center',
      x: -30,
      verticalAlign: 'top',
      y: -10,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'D',
      data: [3, 4]
    }, {
      name: 'E',
      data: [2, 2]
    }, {
      name: 'F',
      data: [3, 4]
    }, {
      name: 'F+',
      data: [3, 4]
    }, {
      name: 'J',
      data: [3, 4]
    }, {
      name: 'S',
      data: [3, 4]
    }]
  });
});

$(document).ready(function () {
  function getPointCategoryName(point, dimension) {
    var series = point.series,
      isY = dimension === 'y',
      axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
  }
  Highcharts.chart('crm_total_eval_comp_count_chart', {

    chart: {
      type: 'heatmap',
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1
    },


    title: {
      text: ''
    },

    xAxis: {
      categories: ['CRM 1', 'CRM 2', 'CRM 3', 'CRM 4']
    },

    yAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: null,
      reversed: true
    },

    accessibility: {
      point: {
        descriptionFormatter: function (point) {
          var ix = point.index + 1,
            xName = getPointCategoryName(point, 'x'),
            yName = getPointCategoryName(point, 'y'),
            val = point.value;
          return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
        }
      }
    },

    colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0]
    },

    legend: {
      align: 'right',
      layout: 'vertical',
      margin: 0,
      verticalAlign: 'top',
      y: 25,
      symbolHeight: 280
    },

    tooltip: {
      formatter: function () {
        return '<b>' + getPointCategoryName(this.point, 'x') + '</b> Completed <br><b>' +
          this.point.value + '</b> Evaluation on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
      }
    },

    series: [{
      name: 'Sales per employee',
      borderWidth: 1,
      data: [
        [0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67],
        [0, 5, 10], [0, 6, 19], [0, 7, 8], [0, 8, 24], [0, 9, 67],
        [0, 10, 10], [0, 11, 19],

        [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48],
        [1, 5, 10], [1, 6, 19], [1, 7, 8], [1, 8, 24], [1, 9, 67],
        [1, 10, 10], [1, 11, 19],

        [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52],
        [2, 5, 10], [2, 6, 19], [2, 7, 8], [2, 8, 24], [2, 9, 67],
        [2, 10, 10], [2, 11, 19],

        [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16],
        [3, 5, 10], [3, 6, 19], [3, 7, 8], [3, 8, 24], [3, 9, 67],
        [3, 10, 10], [3, 11, 19]],
      dataLabels: {
        enabled: true,
        color: '#000000'
      }
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          yAxis: {
            labels: {
              formatter: function () {
                return this.value.charAt(0);
              }
            }
          }
        }
      }]
    }

  });
});

$(document).ready(function () {
  Highcharts.chart('crm_total_eval_scheduled_count_chart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Total Evaluation Scheduled'
    },
    /* subtitle: {
        text: 'Source: WorldClimate.com'
    }, */
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
      backgroundColor: '#fff'
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'CRM 1',
      data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]

    }, {
      name: 'CRM 2',
      data: [83, 78, 98, 93, 106, 84, 105, 104, 91, 83, 106, 92]

    }, {
      name: 'CRM 3',
      data: [48, 38, 39, 41, 47, 48, 59, 59, 52, 65, 59, 51]

    }, {
      name: 'CRM 4',
      data: [42, 33, 34, 39, 52, 75, 57, 60, 47, 39, 46, 51]

    }]
  });
});

$(document).ready(function () {
  Highcharts.chart('crm_dealer_eval_comp_chart', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'dealerwise evaluation completed'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    /* accessibility: {
        point: {
            valueSuffix: '%'
        }
    }, */
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y}'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Shaman',
        y: 20,
        /* sliced: true,
        selected: true */
      }, {
        name: 'Auto Hangar',
        y: 10
      }, {
        name: 'Autospoke',
        y: 30
      }]
    }]
  });
});

$(document).ready(function () {
  Highcharts.chart('sales_monthwise_source_revenue_count_chart', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name} <b>{point.name}</b>:<br/> {point.y}<br/> {point.x}'
    },
    /* accessibility: {
        point: {
            valueSuffix: '%'
        }
    }, */
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>:<br/> {point.y}<br/> {point.x}'
        }
      }
    },
    series: [{
      name: 'Source',
      colorByPoint: true,
      data: [{
        name: 'DSA',
        y: 20,
        x: 20000,
        /* sliced: true,
        selected: true */
      }, {
        name: 'Dealer',
        y: 10,
        x: 10000
      }, {
        name: 'Advertisement',
        y: 30,
        x: 30000
      }]
    }]
  });
});

$(document).ready(function () {
  Highcharts.chart('sales_monthwise_source_count_chart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthwise Source count'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: ( // theme
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'gray'
        }
      }
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 0,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'DSA',
      data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3]
    }, {
      name: 'Advertisement',
      data: [2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2]
    }, {
      name: 'Online Marketing',
      data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }]
  });
});

$(document).ready(function () {
  Highcharts.chart('crmwise_count_revenue_chart', {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        /* format: '{value}°C',
        style: {
            color: Highcharts.getOptions().colors[1]
        } */
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        /* format: '{value} mm',
        style: {
            color: Highcharts.getOptions().colors[0]
        } */
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 0,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,100)'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'Numbers',
      type: 'column',
      yAxis: 1,
      data: [49, 71, 106, 129, 144, 176, 135, 145, 216, 194, 95, 54],
      tooltip: {
        /* valueSuffix: ' mm' */
      }

    }, {
      name: 'Evaluation',
      type: 'spline',
      yAxis: 1,
      data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9],
      tooltip: {
        /* valueSuffix: '°C' */
      }
    }, {
      name: 'Revenue',
      type: 'spline',
      data: [10000, 15000, 5000, 25000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 95000],
      tooltip: {
        /* valueSuffix: '°C' */
      }
    }]
  });
});

$(document).ready(function () {
  Highcharts.chart('saleswise_count_revenue_chart', {
    chart: {
      zoomType: 'xy'
    },
    colors: ['#99df0e', '#711edf'],
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        /* format: '{value}°C',
        style: {
            color: Highcharts.getOptions().colors[1]
        } */
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        /* format: '{value} mm',
        style: {
            color: Highcharts.getOptions().colors[0]
        } */
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 0,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,100)'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'Numbers',
      type: 'column',
      yAxis: 1,
      data: [49, 71, 106, 129, 144, 176, 135, 145, 216, 194, 95, 54],
      tooltip: {
        /* valueSuffix: ' mm' */
      }

    }, {
      name: 'Revenue',
      type: 'spline',
      data: [10000, 15000, 5000, 25000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 95000],
      tooltip: {
        /* valueSuffix: '°C' */
      }
    }]
  });
});

$(document).ready(function () {
  Highcharts.chart('source_mothly_count_eval_chart', {
    chart: {
      zoomType: 'xy'
    },
    colors: ['#FFD700', '#1985b8'],
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        /* format: '{value}°C',
        style: {
            color: Highcharts.getOptions().colors[1]
        } */
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        /* format: '{value} mm',
        style: {
            color: Highcharts.getOptions().colors[0]
        } */
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 0,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,100)'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'Numbers',
      type: 'column',
      yAxis: 1,
      data: [49, 71, 106, 129, 144, 176, 135, 145, 216, 194, 95, 54],
      tooltip: {
        /* valueSuffix: ' mm' */
      }

    }, {
      name: 'Evaluation',
      type: 'spline',
      data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9],
      tooltip: {
        /* valueSuffix: '°C' */
      }
    }]
  });
});

$(document).ready(function () {
  Highcharts.chart('yearwise_policy_count_chart', {
    chart: {
      zoomType: 'xy'
    },
    colors: ['#13dce6', '#711edf', '#ffb100'],
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: [{
      categories: ['2 years', '3 years', '4 years'],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        /* format: '{value}°C',
        style: {
            color: Highcharts.getOptions().colors[1]
        } */
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        /* format: '{value} mm',
        style: {
            color: Highcharts.getOptions().colors[0]
        } */
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 0,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,100)'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'Numbers',
      type: 'column',
      yAxis: 1,
      data: [49, 71, 106],
      tooltip: {
        /* valueSuffix: ' mm' */
      }
    }]
  });
});

$(document).ready(function () {
  Highcharts.chart('segmentwise_monthly_eval_count_chart', {
    colors: ['#FFD700', '#1985b8', '#99df0e', '#13dce6', '#711edf', '#ffb100'],
    chart: {
      type: 'column',
      inverted: true,
      polar: true
    },
    title: {
      text: ''
    },
    tooltip: {
      outside: true
    },
    pane: {
      size: '95%',
      innerSize: '20%',
      endAngle: 270
    },
    xAxis: {
      // tickInterval: 1,
      // labels: {
      //     align: 'right',
      //     useHTML: true,
      //     allowOverlap: true,
      //     step: 1,
      //     y: 3,
      //     style: {
      //         fontSize: '13px'
      //     }
      // },
      // lineWidth: 0,
      categories: [
        'ASE 1',
        'ASE 2',
        'ASE 3',
        'ASE 4',
        'ASE 5',
      ]
    },
    yAxis: {
      // crosshair: {
      //     enabled: true,
      //     color: '#333'
      // },
      // lineWidth: 0,
      // tickInterval: 25,
      // reversedStacks: false,
      // endOnTick: true,
      // showLastLabel: true
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0,
        pointPadding: 0,
        groupPadding: 0.15
      }
    },
    series: [{
      name: 'D',
      data: [132, 105, 92, 73, 64]
    }, {
      name: 'E',
      data: [125, 110, 86, 64, 81]
    }, {
      name: 'F',
      data: [111, 90, 60, 62, 87]
    }, {
      name: 'F+',
      data: [80, 95, 50, 70, 80]
    }, {
      name: 'J',
      data: [130, 60, 62, 87]
    }, {
      name: 'S',
      data: [132, 105, 92, 73, 150]
    }]
  });
});

$(document).ready(function () {
  Highcharts.chart('crmwise_won_count_chart', {
    chart: {
      type: 'bar'
    },
    title: {
      text: ''
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -50,
      y: 0,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      /* plotBands: [{ // visualize the weekend
          from: 4.5,
          to: 6.5,
          color: 'rgba(68, 170, 213, .2)'
      }] */
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    tooltip: {
      shared: true,
      /* valueSuffix: ' units' */
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5
      }
    },
    series: [{
      name: 'CRM 1',
      data: [3, 4, 3, 5, 4, 7, 9, 3, 4, 3, 5, 4]
    }, {
      name: 'CRM 2',
      data: [1, 3, 4, 5, 3, 5, 4, 1, 3, 4, 3, 3]
    }]
  });
});

$(document).ready(function () {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });

  Highcharts.chart('saleswise_monthly_revenue', {
    chart: {
      type: 'bar'
    },
    title: {
      text: ''
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -50,
      y: 0,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      /* plotBands: [{ // visualize the weekend
          from: 4.5,
          to: 6.5,
          color: 'rgba(68, 170, 213, .2)'
      }] */
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    tooltip: {
      shared: true,
      /* valueSuffix: ' units' */
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5
      }
    },
    series: [{
      name: 'SE 1',
      data: [30000, 40000, 30000, 50000, 40000, 70000, 90000, 30000, 40000, 30000, 50000, 40000]
    }, {
      name: 'SE 2',
      data: [10000, 30000, 40000, 50000, 30000, 50000, 40000, 10000, 30000, 40000, 30000, 30000]
    }]
  });
});

$(document).ready(function () {
  Highcharts.chart('sales_performance_chart', {
    colors: ['#711edf', '#ffb100'],
    chart: {
      type: 'bar'
    },
    title: {
      text: ''
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -50,
      y: 0,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      /* plotBands: [{ // visualize the weekend
          from: 4.5,
          to: 6.5,
          color: 'rgba(68, 170, 213, .2)'
      }] */
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    tooltip: {
      shared: true,
      /* valueSuffix: ' units' */
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5
      }
    },
    series: [{
      name: 'SE 1',
      data: [3, 4, 3, 5, 4, 7, 9, 3, 4, 3, 5, 4]
    }, {
      name: 'SE 2',
      data: [1, 3, 4, 5, 3, 5, 4, 1, 3, 4, 3, 3]
    }]
  });
});

$(document).ready(function () {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });

  Highcharts.chart('crmwise_monthly_revenue_amt_chart', {
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    labels: {
      items: [{
        html: 'Total Revenue',
        style: {
          left: '25px',
          top: '0px',
          color: ( // theme
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'black'
        }
      }]
    },
    series: [{
      type: 'column',
      name: 'CRM 1',
      data: [3000, 2000, 1000, 3000, 4000, 3000, 2000, 1000, 3000, 4000, 3000, 2000],
    }, {
      type: 'column',
      name: 'CRM 2',
      data: [2000, 3000, 5000, 7000, 6000, 2000, 3000, 5000, 7000, 6000, 2000, 3000]
    }, {
      type: 'column',
      name: 'CRM 3',
      data: [4000, 3000, 3000, 9000, 1000, 4000, 3000, 3000, 9000, 1000, 4000, 3000]
    }, /* {
          type: 'spline',
          name: 'Average',
          data: [3, 2.67, 3, 6.33, 3.33],
          marker: {
              lineWidth: 2,
              lineColor: Highcharts.getOptions().colors[3],
              fillColor: 'white'
          } 
      },*/
    {
      type: 'pie',
      name: 'Total Revenue',
      data: [{
        name: 'CRM 1',
        y: 13,
        color: Highcharts.getOptions().colors[0] // Jane's color
      }, {
        name: 'CRM 2',
        y: 23,
        color: Highcharts.getOptions().colors[1] // John's color
      }, {
        name: 'CRM 3',
        y: 19,
        color: Highcharts.getOptions().colors[2] // Joe's color
      }],
      center: [50, 50],
      size: 80,
      showInLegend: false,
      dataLabels: {
        enabled: false
      }
    }]
  });

});

$(document).ready(function () {
  var dataPrev = {
    2021: [
      ['Sales (no.)', 1000],
      ['After Sales (no.)', 2000],
      ['Total Sales (no.)', 2200],
      ['Total Evaluation (no.)', 1100],
      ['Total Discount (amt.)', 24000],
      ['Sales (amt.)', 38000],
      ['After Sales (amt.)', 29000],
      ['Total Amount', 46000],
      ['Average Sales Price', 46000]
    ],
    2020: [
      ['Sales (no.)', 1300],
      ['After Sales (no.)', 1000],
      ['Total Sales (no.)', 2000],
      ['Total Evaluation (no.)', 1800],
      ['Total Discount (amt.)', 22000],
      ['Sales (amt.)', 51000],
      ['After Sales (amt.)', 19000],
      ['Total Amount', 36000],
      ['Average Sales Price', 46000]
    ]
  };

  var data = {
    2021: [
      ['Sales (no.)', 1800],
      ['After Sales (no.)', 2200],
      ['Total Sales (no.)', 3200],
      ['Total Evaluation (no.)', 1700],
      ['Total Discount (amt.)', 19000],
      ['Sales (amt.)', 27000],
      ['After Sales (amt.)', 36000],
      ['Total Amount', 46000],
      ['Average Sales Price', 56000]
    ],
    2020: [
      ['Sales (no.)', 1300],
      ['After Sales (no.)', 1000],
      ['Total Sales (no.)', 1500],
      ['Total Evaluation (no.)', 1900],
      ['Total Discount (amt.)', 24000],
      ['Sales (amt.)', 38000],
      ['After Sales (amt.)', 29000],
      ['Total Amount', 37000],
      ['Average Sales Price', 46000]
    ]
  };

  var countries = [{
    name: 'Sales (no.)',
    flag: 197582,
    color: 'rgb(201, 36, 39)'
  }, {
    name: 'After Sales (no.)',
    flag: 197604,
    color: 'rgb(201, 36, 39)'
  }, {
    name: 'Total Sales (no.)',
    flag: 197507,
    color: 'rgb(0, 82, 180)'
  }, {
    name: 'Total Evaluation (no.)',
    flag: 197571,
    color: 'rgb(0, 0, 0)'
  }, {
    name: 'Total Discount (amt.)',
    flag: 197408,
    color: 'rgb(240, 240, 240)'
  }, {
    name: 'Sales (amt.)',
    flag: 197375,
    color: 'rgb(255, 217, 68)'
  }, {
    name: 'After Sales (amt.)',
    flag: 197374,
    color: 'rgb(0, 82, 180)'
  }, {
    name: 'Total Amount',
    flag: 197484,
    color: 'rgb(215, 0, 38)'
  }, {
    name: 'Average Sales Price',
    flag: 197484,
    color: 'rgb(215, 0, 38)'
  }];


  function getData(data) {
    return data.map(function (country, i) {
      return {
        name: country[0],
        y: country[1],
        color: countries[i].color
      };
    });
  }

  var chart = Highcharts.chart('sales_yearly_comparison', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Yearly Comparison 2020 - 2021',
      align: 'center'
    },
    subtitle: {
      text: '',
      align: 'left'
    },
    plotOptions: {
      series: {
        grouping: false,
        borderWidth: 0
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      shared: true,
      headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} </b><br/>'
    },
    xAxis: {
      type: 'category',
      max: 8,
      labels: {
        useHTML: true,
        animate: true,
        formatter: function () {
          var value = this.value,
            output;

          countries.forEach(function (country) {
            if (country.name === value) {
              output = country.name;
            }
          });

          return '<span>' + output + '</span>';
        }
      }
    },
    yAxis: [{
      title: {
        text: ''
      },
      showFirstLabel: false
    }],
    series: [{
      color: 'rgb(158, 159, 163)',
      pointPlacement: -0.2,
      linkedTo: 'main',
      data: dataPrev[2021].slice(),
      name: '2020'
    }, {
      name: '2021',
      id: 'main',
      dataSorting: {
        enabled: true,
        matchByName: true
      },
      dataLabels: [{
        enabled: true,
        inside: true,
        style: {
          fontSize: '16px'
        }
      }],
      data: getData(data[2021]).slice()
    }],
    exporting: {
      allowHTML: true
    }
  });

});

$(document).ready(function () {
  Highcharts.chart('sales_dashboard_count_revenue_chart', {
    chart: {
      zoomType: 'xy'
    },
    colors: ['#5c8de6','#99df0e', '#13dce6', '#711edf', '#ffb100','#120edf', '#3686d9', '#f26b0b', '#e7f608', '#0cecae','#7536d9'],
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        /* format: '{value}°C',
        style: {
            color: Highcharts.getOptions().colors[1]
        } */
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        /* format: '{value} mm',
        style: {
            color: Highcharts.getOptions().colors[0]
        } */
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 0,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,100)'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'Sales (no.)',
      type: 'column',
      yAxis: 1,
      data: [49, 71, 106, 129, 144, 176, 135, 145, 216, 194, 95, 54],
      tooltip: {
        /* valueSuffix: ' mm' */
      }

    }, {
      name: 'After Sales (no.)',
      type: 'spline',
      data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
    }, {
      name: 'Total Sales (no.)',
      type: 'spline',
      data: [7, 6, 9, 10, 14, 18, 21, 22, 19, 14, 9, 4]
    }, {
      name: 'Total Evaluation (no.)',
      type: 'spline',
      data: [21, 22, 19, 14, 9, 4, 7, 6, 9, 10, 14, 18]
    }, {
      name: 'Total Discount (amt.)',
      type: 'spline',
      data: [14, 9, 4, 7, 6, 9, 10, 21, 22, 19, 14, 18]
    }, {
      name: 'Sales (amt.)',
      type: 'spline',
      data: [14, 9, 4, 7, 6, 9, 10, 21, 22, 19, 14, 18]
    }, {
      name: 'After Sales (amt.)',
      type: 'spline',
      data: [14, 9, 4, 7, 6, 9, 10, 21, 22, 19, 14, 18]
    }, {
      name: 'Total (amt.)',
      type: 'spline',
      data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
    }, {
      name: 'Avg Sales Price (amt.)',
      type: 'spline',
      data: [18, 21, 25, 26, 23, 18, 13, 9, 7, 6, 9, 14]
    }]
  });
});

$(document).ready(function () {
  var date_string = "";
  var from_date = "";
  var to_date = "";
  total_leads();
  lost_leads();
  $('#to_from_date').click(function () {
    date_string = "";
    from_date = $("#feedback_fromdate").val();
    to_date = $("#feedback_todate").val();
    if (from_date.length > 0 && to_date.length > 0) {
      date_string += 'from_date=' + from_date + '&to_date=' + to_date;

    }
    if (from_date === "" && to_date.length > 0) {
      date_string += 'to_date=' + to_date;
    }
    if (to_date === "" && from_date.length > 0) {
      date_string += 'from_date=' + from_date;
    }
    console.log(date_string);
    total_leads();
    lost_leads();

  });
  function total_leads() {
    var dataPoints = [];
    $.ajax({
      url: baseURL + '/total_number_of_leads?' + date_string,
      method: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Token ' + token);
      },
      success: function (data) {
        console.log(data);
        if (data.Status == true && data.Message == "Fetch Record successfully") {
          $.each(data.stage_data, function (key, value) {
            dataPoints.push([key, value]);
          });
          // data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
          Highcharts.chart('first_report', {
            chart: {
              type: 'funnel'
            },
            title: {
              text: ''
            },
            plotOptions: {
              series: {
                dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b> ({point.y:,.0f})',
                  softConnector: true
                },
                center: ['40%', '50%'],
                neckWidth: '30%',
                neckHeight: '25%',
                width: '80%'
              }
            },
            legend: {
              enabled: false
            },
            series: [{
              name: 'Unique users',
              data: dataPoints,

            }],

            responsive: {
              rules: [{
                condition: {
                  maxWidth: 500
                },
                chartOptions: {
                  plotOptions: {
                    series: {
                      dataLabels: {
                        inside: true
                      },
                      center: ['50%', '50%'],
                      width: '100%'
                    }
                  }
                }
              }]
            }
          });
        }
      }
    });
  }
  function lost_reason(dataPoints) {
    Highcharts.chart('lost_reason_analysis', {
      chart: {
        type: 'pyramid'
      },
      title: {
        text: ''
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b> ({point.y:,.0f})',
            softConnector: true,
            style: {
              textOverflow: 'clip'
            },
          },
          center: ['40%', '50%'],
          neckWidth: '30%',
          neckHeight: '25%',
          width: '60%',
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'Unique users',
        data: [
          ['Lost to competition', 1545],
          ['Lost to dealer', 4064],
          ['Budget constraint', 1987],
          ['Out of criteria', 976],
          ['Vehicle sold', 846],
          ['Unreasonable expectations', 846]
      ]
        // data: dataPoints
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            plotOptions: {
              series: {
                dataLabels: {
                  inside: true
                },
                center: ['50%', '50%'],
                width: '100%'
              }
            }
          }
        }]
      }
    });
  }
  function lost_leads() {
    var dataPoints = [];
    $.ajax({
      url: baseURL + '/total_number_of_lost_reason_leads?' + date_string,
      method: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Token ' + token);
      },
      success: function (data) {
        console.log(data);
        if (data.Status == true && data.Message == "Fetch Record successfully") {
          $.each(data.lost_reason_data, function (key, value) {
            //   if (value === "" || value.lost_reason === null){
            //     delete data.lost_reason_data[key];
            // }
            dataPoints.push([value.lost_reason, value.lead]);
            console.log(dataPoints);
            $("#Lost_sales_pie_chart_table").append("<tr role='row' class='topborder'><td role='cell'><div class='table_show_on_mobile'><strong>Lost Reason</strong></div>" + this.lost_reason + "</td><td role='cell'><div class='table_show_on_mobile'><strong>Number of Leads</strong></div><p>" + this.lead + " </p></td></tr>"
            );

          });
          lost_reason(dataPoints);

        }
      }

    });
  }
  $.ajax({
    url: baseURL + '/total_number_of_leads_by_make',
    method: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', 'Token ' + token);
    },
    success: function (data) {
      console.log(data);
      if (data.Status == true && data.Message == "Fetch Record successfully") {
        // data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
        $.each(data.make_data, function () {
          $("#head_make_sales_pie_chart_table").append("<td role='cell'><div class='table_show_on_mobile'></div><strong>" + this.make + "</strong></td>"
          );
        });
        $("#make_sales_pie_chart_table").append("<tr role='row' class='topborder'<div class='table_show_on_mobile'></div></tr>");

        $.each(data.make_data, function () {
          $("#make_sales_pie_chart_table").append("<td role='cell'><div class='table_show_on_mobile'></div><strong>" + this.lead + "</strong></td>"
          );
        });

      }
    }
  });


  $('#to_from_date').attr('disabled', true);
  $('.sales_from_to_date input[type=date]').change(function () {
    if ($(this).val().length != 0)
      $('#to_from_date').attr('disabled', false);
    else
      $('#to_from_date').attr('disabled', true);
  })
});


