// https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8
// compose(h, g, f)(x) == h(g(f(x)))
const compose = (...fns) =>
  x => fns.reduceRight((y, f) => f(y), x);