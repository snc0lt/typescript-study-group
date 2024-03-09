import { Expect, Equal } from "../../../helper";

// 1. intro to typescript generics, here we want to return the param with the correct type
export const returnWhatIPassIn = <T>(t: T) => {
   return t; 
};

const one = returnWhatIPassIn(1); // should be a number
const miguel = returnWhatIPassIn("miguel"); // should be a string

export type test = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof miguel, "miguel">>];


