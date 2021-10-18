import { resolve } from "dns";

export const range = (start: number, end: number) =>
  [...new Array(end - start)].map((_, i) => i).map((n) => n + start);

console.log(range(1, 101).filter((n) => n % 8 === 0));

const arr = [...new Array(10)].map((_, i) => i);
console.log(arr.map((n) => n * 2));
console.log(arr.filter((n) => n % 3 === 0));
console.log(arr.find((n) => n > 4));
console.log(arr.findIndex((n) => n > 4));
console.log(arr.every((n) => n !== 0));
console.log(arr.some((n) => n > 10));
console.log(arr.reduce((n, m) => n + m));
console.log(arr.slice().sort((n, m) => (n > m ? -1 : 1)));

const user = {
  id: 3,
  name: "takashi",
  username: "taka",
  email: "takshi@gmail.com",
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const greeter = (target: string) => () => {
  console.log(`Hi ${target}`);
};

const raise = (a: number, b: number, ...rest: number[]) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};

raise(1, 2, 3, 4, 5);

const withMultiple = (n: number) => (m: number) => n * m;
console.log(withMultiple(3)(5));

const triple = withMultiple(3);
console.log(triple(5));

let count = 0;

const counter = () => {
  let count = 0;

  const increment = () => (count += 1);
  return increment;
};

const counter1 =
  (count = 0) =>
  (adds = 1) =>
    (count += adds);

const isSucceeded = true;

const promise = new Promise((resolve, reject) => {
  if (isSucceeded) {
    resolve("Success");
  } else {
    reject(new Error("Failure"));
  }
});

promise
  .then((value) => {
    console.log("1.", value);
    return "Success again";
  })
  .then((value) => {
    console.log("2.", value);
  })
  .catch((error) => {
    console.log("3.", error);
  })
  .finally(() => {
    console.log("4.", "Completed");
  });
