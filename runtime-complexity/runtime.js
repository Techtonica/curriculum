const now = require('performance-now');

const api_key = 'IlT5XbxZvXloYjG2Yhoh';
const username = 'rcoh';
const plotly = require('plotly')(username, api_key);
const evaluate = function(f) {
  const ns = [1000, 2000, 3000, 4000, 5000, 10000];
  const runs = 10;

  let timeUsed = 0;
  let startTs = 0;
  const timeStart = () => {
    startTs = now();
  }

  const timeEnd = () => {
    timeUsed += now() - startTs;
  //console.log(timeUsed);
  }
  const warmUp = 10000;
  for (let i = 0; i < warmUp; i++) {
    f(1000, () => {
    }, () => {
    })
  }

  const data = {
    x: [],
    y: [],
    type: "scatter"
  };

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

  console.log(data);

  var graphOptions = {
    filename: "basic-line",
    fileopt: "overwrite"
  };
  plotly.plot(data, graphOptions, function(err, msg) {
    console.log(msg);
  });
}

const wrapArray = (f) => {
  const ret = (n, startTime, endTime) => {
    const a = new Array(n);
    for (let i = 0; i < n; i++) {
      a[i] = Math.floor(Math.random() * 100);
    }
    startTime();
    f(a);
    endTime();
  }
  return ret;
}

const mysteryFunction0 = function(n, startTime, endTime) {
  const a = [];
  startTime();
  for (let i = 0; i < n; i++) {
    a.push(i);
  }
  endTime();
}

// array count
var mysteryFunction1 = function(array) {
  myFavoriteNum = 7;
  let numFavorites = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === myFavoriteNum) {
      numFavorites += 1;
    }
  }
  return numFavorites;
}

// num e's
var mysteryFunction2 = function(string) {
  eCount = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === 'e') {
      eCount++;
    }
  }
  return eCount;
}

// evaluate(insert);

evaluate(wrapArray(mysteryFunction1));
