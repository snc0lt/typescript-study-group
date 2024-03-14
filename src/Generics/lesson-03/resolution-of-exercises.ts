import { Equal, Expect } from "../../../helper";
import { expect, it, test } from "vitest";

// -------------------------Exercise 1 and 2--------------------------------------------

/* extends -> extender de ese object
*  implements -> 
*  T extends string, 
*/

const createOwnSet = <Type = string | number>(): Set<Type> => {
  return new Set<Type>();
};

const stringSet = createOwnSet<string>();
const numberSet = createOwnSet<number>();
const defaultString = createOwnSet();


type tests = [Expect<Equal<typeof stringSet, Set<string>>>, Expect<Equal<typeof numberSet, Set<number>>>, Expect<Equal<typeof defaultString, Set<string | number>>>];


// -------------------------Exercise 3--------------------------------------------




it("Should clone the props from a passed-in Component", () => {
  class Component<TProps> {
    private props: TProps;
    // private, public, protected, static,
  
    constructor(props: TProps) {
      this.props = props;
    }
  
    getProps = () => this.props;
  }
  
  const component = new Component({ a: 1, b: 2, c: "Hello world" });
  
  const cloneComponent = <T>(component: Component<T>) => new Component(component.getProps());
  
  const clonedComponent = cloneComponent(component);

  const props1 = component.getProps();
  const props2 = clonedComponent.getProps();
  
  const result = clonedComponent.getProps();
  expect(result).toEqual({ a: 1, b: 2, c: 3 });
  type tests = [
    Expect<Equal<typeof result, { a: number; b: number; c: number }>>
  ];
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
const fetchData = async <T>(path = "people/1", query?: string): Promise<T> => {
  const baseURL = "https://swapi.dev/api/";
  return (await fetch("https://swapi.dev/api/people/1").then((response) => response.json())) as T;
};

 const response = await fetchData<{ name: string }>();
 const response2 = await fetchData<{ age: number }>();

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
