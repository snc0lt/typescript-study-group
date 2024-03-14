import { Equal, Expect } from "../../../helper";
/*2. 
    same as above but now we want a default type string if nothing is passed,
	notice the test is also asking us to type it as Set<string> when no generic is passed 
    to the function. 
*/

type SetType = string | number;

export const createOwnSet = <T extends SetType = string>(t: Iterable<T> = []) => {
  return new Set(t);
};

const stringSet = createOwnSet<string>(["set"]);
const numberSet = createOwnSet<number>([1]);
const defaultString = createOwnSet();

type tests = [
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof defaultString, Set<string>>>,
];