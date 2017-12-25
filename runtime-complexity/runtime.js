// Code to time and graph how long functions take to run.
// Work in Progress.
// Note: Actual function definitions have been moved to runtime1-analyzing.js

const now = require('performance-now');

const api_key = 'IlT5XbxZvXloYjG2Yhoh';
const username = 'rcoh';
const plotly = require('plotly')(username, api_key);
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
  //console.log(timeUsed);
  }
  const warmUp = 100;
  for (let i = 0; i < warmUp; i++) {
    f(1000, () => {
    }, () => {
    })
  }

  const data = {
    type: "scatter",
    x: [],
    y: []
  }

  ns.map(n => {
    const label = `Running, n = ${n}`
    for (let run = 0; run < runs; run++) {
      f(n, timeStart, timeEnd);
    }
    const timeMs = timeUsed.toFixed(3);
    console.log(`${label} ${timeMs}ms`);
    data.x.push(n);
    data.y.push(timeMs);
    timeUsed = 0;
  });

  return data;
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


// evaluate(insert);

//evaluate(wrapArray(mysteryFunction1));
//evaluate(wrapString(mysteryFunction2));
const nop = () => {
};
// console.log(wrapArray(logN, true)(1024 * 1024, nop, nop));
// evaluate(wrapArray(logN, true));
//evaluate(wrapArray(nLogN));
const timings = [
  evaluate(wrapArray(constant1)),
  evaluate(wrapArray(constant2)),
  evaluate(wrapArray(mysteryFunction1)),
  evaluate(wrapString(mysteryFunction2)),
  //evaluate(wrapArray(logN, true)),
  evaluate(wrapN(nSquared), [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600])
]


var graphOptions = {
  filename: "basic-line",
  fileopt: "overwrite"
};
plotly.plot(timings, graphOptions, function(err, msg) {
  console.log(msg);
});
