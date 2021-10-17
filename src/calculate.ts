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

