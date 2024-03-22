import { Equal, Expect } from "../../../helper";

// 10. even more inference, you won't forget it...
// Whoever manages to solve this, I'm gonna buy them a beer... uwu


const makeStatus = <T extends string>(statuses: T[]) => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

/*
When you call the makeStatus function with an array of string literals, 
TypeScript infers the type of T based on the array elements.
In this case, TypeScript infers T to be the string literals "INFO", "DEBUG", "ERROR", and "WARNING".
*/

type tests = [
  Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>,
];
