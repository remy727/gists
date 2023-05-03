function *foo(x) {
  while (x < 4) {
    x += yield x;
  }
  return x;
}
var bar = foo(3);
console.log( bar.next(1) );
console.log( bar.next(1) );
console.log( bar.next(1) );

/* answers: */
/*
{value: 3, done: false}
{value: 4, done: true}
{value: undefined, done: true}
*/
