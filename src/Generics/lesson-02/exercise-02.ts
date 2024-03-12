import { Equal, Expect } from "../../../helper";
import { expect, it, test} from "vitest";

/*1. apply the knoowledge from lesson 01 to type this funciton correctly,
	notice the test is also asking us to type it as Set<unknown> when no generic is passed to the function. 
*/
// export const createOwnSet = () => {
//   return new Set();
// };

// const stringSet = createOwnSet<string>();
// const numberSet = createOwnSet<number>();
// const unknownSet = createOwnSet();

// type tests = [
//   Expect<Equal<typeof stringSet, Set<string>>>,
//   Expect<Equal<typeof numberSet, Set<number>>>,
//   Expect<Equal<typeof unknownSet, Set<unknown>>>,
// ];

/*2. 2 same as above but now we want a default type string if nothing is passed,
	notice the test is also asking us to type it as Set<string> when no generic is passed to the function. 
*/
// export const createOwnSet = () => {
//   return new Set();
// };

// const stringSet = createOwnSet<string>();
// const numberSet = createOwnSet<number>();
// const defaultString = createOwnSet();

// type tests = [
//   Expect<Equal<typeof stringSet, Set<string>>>,
//   Expect<Equal<typeof numberSet, Set<number>>>,
//   Expect<Equal<typeof defaultString, Set<string>>>,
// ];

// // 3. infer props on clonedComponent :?
// export class Component<TProps> {
//   private props: TProps;

//   constructor(props: TProps) {
//     this.props = props;
//   }

//   getProps = () => this.props;
// }

// const cloneComponent = (component: unknown) => {
//   return new Component(component.getProps());
// };

// it("Should clone the props from a passed-in Component", () => {
//   const component = new Component({ a: 1, b: 2, c: 3 });

//   const clonedComponent = cloneComponent(component);

//   const result = clonedComponent.getProps();

//   expect(result).toEqual({ a: 1, b: 2, c: 3 });

//   type tests = [
//     Expect<Equal<typeof result, { a: number; b: number; c: number }>>
//   ];
// });

// // 4. correctly type a reduce using generics
// const array = [
//   {
//     name: "John",
//   },
//   {
//     name: "Steve",
//   },
// ];

// const obj = array.reduce((accum, item) => {
//   accum[item.name] = item;
//   return accum;
// }, {});

// it("Should resolve to an object where name is the key", () => {
//   expect(obj).toEqual({
//     John: {
//       name: "John",
//     },
//     Steve: {
//       name: "Steve",
//     },
//   });

//   type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
// });

// // 5. avoid an any return type in a fetch calls using generics
// const fetchData = async (url: string) => {
//   const data = await fetch(url).then((response) => response.json());
//   return data;
// };

// it("Should fetch data from an API", async () => {
//   const data = await fetchData<{ name: string }>(
//     "https://swapi.dev/api/people/1",
//   );
//   expect(data.name).toEqual("Luke Skywalker");

//   type tests = [Expect<Equal<typeof data, { name: string }>>];
// });

// 6. a bit more complex (still manageable), at what level should the generic live? (hint: think low)
// export const getHomePageFeatureFlags = (
//   config: unknown,
//   override: (flags: unknown) => unknown
// ) => {
//   return override(config.rawConfig.featureFlags.homePage);
// };

// test("getHomePageFeatureFlags", () => {
//   const EXAMPLE_CONFIG = {
//     apiEndpoint: "https://api.example.com",
//     rawConfig: {
//       featureFlags: {
//         homePage: {
//           showBanner: true,
//           showLogOut: false,
//         },
//         loginPage: {
//           showCaptcha: true,
//           showConfirmPassword: false,
//         },
//       },
//     },
//   };
//   it("Should return the homePage flag object", () => {
//     const flags = getHomePageFeatureFlags(
//       EXAMPLE_CONFIG,
//       (defaultFlags) => defaultFlags
//     );

//     expect(flags).toEqual({
//       showBanner: true,
//       showLogOut: false,
//     });

//     type tests = [
//       Expect<Equal<typeof flags, { showBanner: boolean; showLogOut: boolean }>>
//     ];
//   });

//   it("Should allow you to modify the result", () => {
//     const flags = getHomePageFeatureFlags(EXAMPLE_CONFIG, (defaultFlags) => ({
//       ...defaultFlags,
//       showBanner: false,
//     }));

//     expect(flags).toEqual({
//       showBanner: false,
//       showLogOut: false,
//     });

//     type tests = [
//       Expect<Equal<typeof flags, { showBanner: boolean; showLogOut: boolean }>>
//     ];
//   });
// });

// 7. Object.keys correct typing
// const typedObjectKeys = (obj: unknown) => {
//   return Object.keys(obj);
// };

// it("Should return the keys of the object", () => {
//   const result1 = typedObjectKeys({
//     a: 1,
//     b: 2,
//   });
	
//   expect(result1).toEqual(["a", "b"]);

//   type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
// });

// 9. don't tell me you forgot it already? TS inference (look for what the test 'line 193' is expecting) and type the fuinction correctly using generics
// if we remove @ts-expect-error from line 199 and 204 it should give an error if the solucion is correct
// export const inferItemLiteral = (t: unknown) => {
//   return {
//     output: t ,
//   };
// };

// const result1 = inferItemLiteral("a");
// const result2 = inferItemLiteral(123);

// type tests = [
//   Expect<Equal<typeof result1, { output: "a" }>>,
//   Expect<Equal<typeof result2, { output: 123 }>>
// ];

// // @ts-expect-error
// const error1 = inferItemLiteral({
//   a: 1,
// });

// // @ts-expect-error
// const error2 = inferItemLiteral([1, 2]);

// 10. even more inference, you won't forget it...
// Whoever manages to solve this, I'm gonna buy them a beer... uwu
// const makeStatus = (statuses) => {
//   return statuses;
// };

// const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

// type tests = [
//   Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>,
// ];

// 11. more inference??
// FOR REAL, Whoever manages to solve this, I'm gonna buy them a beer...
// const createClassNamesFactory =
//   (classes: unknown) =>
//   (type: unknown, ...otherClasses: unknown[]) => {
//     const classList = [classes[type], ...otherClasses];
//     return classList.join(" ");
//   };

// const getBg = createClassNamesFactory({
//   primary: "bg-blue-500",
//   secondary: "bg-gray-500",
// });

// it("Should let you create classes from a className factory", () => {
//   expect(getBg("primary")).toEqual("bg-blue-500");
//   expect(getBg("secondary")).toEqual("bg-gray-500");
// });

// it("Should let you pass additional classes which get appended", () => {
//   expect(getBg("primary", "text-white", "rounded", "p-4")).toEqual(
//     "bg-blue-500 text-white rounded p-4"
//   );
// });