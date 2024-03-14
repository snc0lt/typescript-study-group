import { Equal, Expect } from "../../../helper";

// 10. even more inference, you won't forget it...
// Whoever manages to solve this, I'm gonna buy them a beer... uwu

/*
    Let's define a generic type MakeStatus<T> that represents an array of the same string literals as 
    the input array T.
    
    The makeStatus function takes a tuple type T and returns MakeStatus<T>.
    
    Finally, let's use the readonly modifier to ensure immutability of the resulting array.
    
    In the Tests type, we assert that the inferred type of statuses matches the expected 
    ReadonlyArray<"INFO" | "DEBUG" | "ERROR" | "WARNING">.
*/

type MakeStatusType<T extends readonly string[]> = ReadonlyArray<T[number]>;

const makeStatus = <T extends readonly string[]>(statuses: T): MakeStatusType<T> => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"] as const);

type tests = [
  Expect<Equal<typeof statuses, ReadonlyArray<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>,
];
