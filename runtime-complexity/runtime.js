const evaluate = function(f) {
  const ns = [1,10,1000,10000,100000];
  const runs = 1000;
  ns.map(n => {
    const label =`Running, n = ${n}`
    console.time(label);
    for (let run = 0; run < runs; run ++) {
      f(n);
    }
    console.timeEnd(label);
  })
}

const insert = function(n) {
  const a = [];
  for (let i = 0; i < n; i++) {
    a.push(i);
  }
}

evaluate(insert);
