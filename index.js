comp = (...f) =>
  (...args) => {
    innerComp = (g) =>
    (g.length === 1
      ? g[0](...args)
      : g[0](innerComp(g.slice(1))));
    return innerComp(f);
  }
increment = (n) => n + 1;
plus = (...n) => n.reduce((acc, val) => acc + val, 0);

console.log(comp(increment, plus)(1, 2, 3));