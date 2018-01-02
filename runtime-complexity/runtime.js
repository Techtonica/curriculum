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

const nLogN = (a) => a.sort();

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

// binary searc
const logN = function(array) {
  // console.log(array);
  const lookingFor = 9;
  let lowerBound = 0;
  let upperBound = array.length - 1;
  let guessIndex = Math.floor(upperBound / 2);
  while (lowerBound <= upperBound) {
    // console.log(lowerBound, upperBound, guessIndex);
    if (array[guessIndex] === lookingFor) {
      return true;
    } else if (lookingFor < array[guessIndex]) {
      upperBound = guessIndex - 1;
    } else {
      lowerBound = guessIndex + 1;
    }
    guessIndex = Math.floor((lowerBound + upperBound) / 2);
  }
  return false;
}

// get from array
const constant1 = function(array) {
  index = 4;
  return array[index];
}

// if array has even or odd num elements
const constant2 = function(array) {
  myLength = array.length;
  if (myLength % 2 == 0) {
    return "even length";
  } else {
    return "odd length";
  }
}

var nSquared = function(n) {
  let primes = []
  for (i = 2; i < n; i++) {
    let iPrime = true;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        iPrime = false;
      }
    }
    if (iPrime === true) {
      primes.push(i);
    }
  }
  return primes.length;
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
