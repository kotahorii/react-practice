export type Animal = "Dog" | "Cat" | "Rabbit";

const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d", "e"];
console.log(arr2);

const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = { ...obj1, d: 99, e: 5 };

const user = {
  id: 1,
  name: "takshi",
  email: "takashi@gmail.com",
  age: 8,
};

const { id, ...rest } = user;
console.log(id, rest);

const showName = (a: number, b: number, ...rest: number[]) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};

showName(1, 2, 3, 4);

const toArrayVariably = <T>(...args: T[]): T[] => [...args];
toArrayVariably(1, 2, 3, 4, 5);

type TCurrency = {
  unit: Unit;
  amount: number;
};

type A = {
  foo: number;
};
type B = { bar: string };
type C = { foo?: number; baz: boolean };

type AnB = A & B;
type AnC = A & C;
type CnAorB = (C & A) | B;

type Unit = "USD" | "EUR" | "JPY" | "GBP";
interface Currency {
  unit: Unit;
  amount: number;
}
interface IPayment extends Currency {
  date: Date;
}

type TPayment = Currency & {
  date: Date;
};

const date = new Date("2020-09-01T12:00+0900");
const pay: TPayment = { unit: "USD", amount: 100, date };
