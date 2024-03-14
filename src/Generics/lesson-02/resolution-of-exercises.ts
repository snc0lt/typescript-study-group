import { Equal, Expect } from "../../../helper";
import { expect, it, test } from "vitest";

// -------------------------Exercise 1--------------------------------------------

// type tests = [
//   Expect<Equal<typeof stringSet, Set<string>>>,
//   Expect<Equal<typeof numberSet, Set<number>>>,
//   Expect<Equal<typeof unknownSet, Set<unknown>>>,
// ];

// -------------------------Exercise 2--------------------------------------------

// type tests = [
//   Expect<Equal<typeof stringSet, Set<string>>>,
//   Expect<Equal<typeof numberSet, Set<number>>>,
//   Expect<Equal<typeof defaultString, Set<string>>>,
// ];

// -------------------------Exercise 3--------------------------------------------

it("Should clone the props from a passed-in Component", () => {
  // const component = new Component({ a: 1, b: 2, c: 3 });
  // const clonedComponent = cloneComponent(component);
  // const result = clonedComponent.getProps();
  // expect(result).toEqual({ a: 1, b: 2, c: 3 });
  // type tests = [
  //   Expect<Equal<typeof result, { a: number; b: number; c: number }>>
  // ];
});


// -------------------------Exercise 4--------------------------------------------
it("Should resolve to an object where name is the key", () => {
//   expect(obj).toEqual({
//     John: {
//       name: "John",
//     },
//     Steve: {
//       name: "Steve",
//     },
//   });

//   type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});


// -------------------------Exercise 5--------------------------------------------
it("Should fetch data from an API", async () => {
//   const data = await fetchData<{ name: string }>(
//     "https://swapi.dev/api/people/1",
//   );
//   expect(data.name).toEqual("Luke Skywalker");

//   type tests = [Expect<Equal<typeof data, { name: string }>>];
});
// -------------------------Exercise 6--------------------------------------------

const config = {
  rawConfig: {
    featureFlags: {
      homePage: { darkMode: true },
    },
  },
};

// -------------------------Exercise 7--------------------------------------------
// -------------------------Exercise 8--------------------------------------------
// -------------------------Exercise 9--------------------------------------------
