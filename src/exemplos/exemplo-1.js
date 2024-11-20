import { interval } from "rxjs";

const observable = interval(1000); // 1 segundo

const subscribe1 = observable.subscribe((value) => {
  console.log(value);
});

const subscribe2 = observable.subscribe((value) => {
  console.log(value * 100);
});

setTimeout(() => {
  console.log("subscribe 1 encerrado!");
  subscribe1.unsubscribe();
}, 3000);

setTimeout(() => {
  console.log("subscribe 2 encerrado!");
  subscribe2.unsubscribe();
}, 5000);
