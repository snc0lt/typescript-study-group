import { Equal, Expect } from "../../../helper";

/*1. apply the knowledge from lesson 01 to type this funciton correctly,
	notice the test is also asking us to type it as Set<unknown> when no generic is passed 
    to the function. 
*/

type SetType = string | number | unknown;

export const createOwnSet = <T extends SetType = unknown>(t: Iterable<T> = []) => {
  return new Set(t);
};

const stringSet = createOwnSet<string>(["set"]);
const numberSet = createOwnSet<number>([1]);
const unknownSet = createOwnSet();

type tests = [
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof unknownSet, Set<unknown>>>,
];