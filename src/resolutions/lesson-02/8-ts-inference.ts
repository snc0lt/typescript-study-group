import { Equal, Expect } from "../../../helper";
/*
9. don't tell me you forgot it already? TS inference 
(look for what the test 'line 193' is expecting) and type the function correctly using generics
if we remove @ts-expect-error from line 199 and 204 it should give an error if the solucion is correct
*/

export const inferItemLiteral = <T extends string | number>(t: T)  => {
  return {
    output: t ,
  };
};

const result1 = inferItemLiteral("a");
const result2 = inferItemLiteral(123);

type tests = [
  Expect<Equal<typeof result1, { output: "a" }>>,
  Expect<Equal<typeof result2, { output: 123 }>>
];

/*
 Effectively, brings error when //@ts-expect-error is removed.
*/

// @ts-expect-error
// const error1 = inferItemLiteral({
//   a: 1,
// });

const error1 = inferItemLiteral({
  a: 1,
});

// @ts-expect-error
// const error2 = inferItemLiteral([1, 2]);

const error2 = inferItemLiteral([1, 2]);