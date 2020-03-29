// Code to time and graph how long functions take to run.
// Work in Progress.
// Note: Some of the function definitions have been moved to runtime1-analyzing.js

const now = require('performance-now');
const Chart = require('chart.js')
const randomstring = require('randomstring');
const evaluate = function(f, _ns) {
  const ns = _ns || [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000, 40000];
  const runs = 100;

  let timeUsed = 0;
  let startTs = 0;
  const timeStart = () => {
    startTs = now();
  }

  const timeEnd = () => {
    timeUsed += now() - startTs;
  }
  const warmUp = 100;
  for (let i = 0; i < warmUp; i++) {
    f(1000, () => {
    }, () => {
    })
  }

  const points = []

  ns.map(n => {
    const label = `Running, n = ${n}`
    for (let run = 0; run < runs; run++) {
      f(n, timeStart, timeEnd);
    }
    const timeMs = timeUsed.toFixed(3);
    console.log(`${label} ${timeMs}ms`);
    points.push({
      x: n,
      y: timeMs
    });
    timeUsed = 0;
  });

  return points;
}

const wrapArray = (f, sorted) => {
  const ret = (n, startTime, endTime) => {
    const a = new Array(n);
    for (let i = 0; i < n; i++) {
      a[i] = Math.random(); //Math.floor(Math.random() * n * n);
    }
    if (sorted) {
      a.sort();
    }
    startTime();
    const res = f(a);
    endTime();
    return res;
  }
  return ret;
}

const wrapString = (f) => {
  const ret = (n, startTime, endTime) => {
    const s = randomstring.generate(n);
    startTime();
    f(s);
    endTime();
  }
  return ret;
}

const wrapN = (f) => {
  return (n, startTime, endTime) => {
    startTime();
    f(n);
    endTime();
  }
}

const mysteryFunction0 = function(array) {
  const myFavoriteNum = 7;
  for (i = 0; i < array.length; i++) {
    if (array[i] === myFavoriteNum) {
      return true;
    }
  }
  return false;
}

const mysteryFunction1 = function(array) {
  index = 4;
  return array[index];
}

const timings = [
  {
    label: 'mysteryFunction0',
    data: evaluate(wrapArray(mysteryFunction0)),
    pointBorderColor: "rgba(255,0,0,1)"
  },
  {
    label: 'mysteryFunction1',
    data: evaluate(wrapArray(mysteryFunction1)),
    pointBorderColor: "rgba(0,255,0,1)"
  }
]

main = function(document) {

  const elem = document.getElementById("myChart");
  const ctx = elem.getContext("2d");
  const myChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: timings
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'time in milliseconds'
                  }
              }],
              xAxes: [{
                ticks: {
                    beginAtZero:true
                },
                scaleLabel: {
                  display: true,
                  labelString: 'n (number of elements)'
                }
            }]
          },
          title: {
            display: true,
            text: 'Runtimes'
          }
      }
  });
}
