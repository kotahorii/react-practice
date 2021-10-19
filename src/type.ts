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

type Fig = "one" | "two" | "three";
type FigMap = { [k in Fig]: number };

const permissions = {
  r: 0b100,
  w: 0b010,
  x: 0b001,
} as const;

type PermsChar = keyof typeof permissions;
const readable: PermsChar = "r";
// type PermsNum = typeof permissions[PermsChar];

type ValueOf<T> = T[keyof T];
type PermsNum = ValueOf<typeof permissions>;

const species = ["rabbit", "bear", "fox", "dog"] as const;
type Species = typeof species[number];

const override = <T, U extends T>(obj1: T, obj2: U): T & U => ({
  ...obj1,
  ...obj2,
});
override({ a: 1 }, { a: 24, b: 8 });

type User = { id: unknown };
type NewUser = User & { id: string };
type OldUser = User & { id: number };
type Book = { isbn: string };

type IdOf<T> = T extends User ? T["id"] : never;

type NewUserId = IdOf<NewUser>;
type OldUserID = IdOf<OldUser>;
type BookId = IdOf<Book>;

type Flatten<T> = T extends Array<infer U> ? U : T;
const num = 5;
const arr = [3, 6, 9];
type Arr = Flatten<typeof arr>;
type N = Flatten<typeof num>;

type DataFormat = `${number}-${number}-${number}`;
const date1: DataFormat = "2020-12-15";

const tables = ["users", "posts", "comments"] as const;
type Table = typeof tables[number];
type AllSelect = `SELECT * FROM ${Table}`;
type LimitSelect = `${AllSelect} LIMIT ${number}`;

const createQuery = (table: Table, limit?: number): AllSelect | LimitSelect =>
  limit
    ? (`SELECT * FROM ${table} LIMIT ${limit}` as const)
    : `SELECT * FROM ${table}`;

const query = createQuery("users", 20);
console.log(query);

const q1 = "SELECT * FROM users";
const q2 = "SELECT id, body, createdAt FROM posts";
const q3 = "SELECT userId, postId, FROM comments";

type PickTable<T extends string> = T extends `SELECT ${string} FROM ${infer U}`
  ? U
  : never;

type Tables = PickTable<typeof q1 | typeof q2 | typeof q3>;

const foo: unknown = "1,2,3,4";
if (typeof foo === "string") {
  console.log(foo.split(","));
}

type User1 = { username: string; address: { zipcode: string; town: string } };

const isUser = (arg: unknown): arg is User1 => {
  const u = arg as User1;
  return (
    typeof u?.username === "string" &&
    typeof u?.address?.zipcode === "string" &&
    typeof u?.address?.town === "string"
  );
};

const u1: unknown = JSON.parse("{}");
const u2: unknown = JSON.parse('{"username":"patty", "address":"Maple Town"}');
const u3: unknown = JSON.parse(
  '{"username":"patty","address":{"zipcode":"111","town":"Maple Town"}}'
);

[u1, u2, u3].forEach((u) => {
  if (isUser(u)) {
    console.log(`${u.username} lives in ${u.address.town}`);
  } else {
    console.log("It's not User");
  }
});
