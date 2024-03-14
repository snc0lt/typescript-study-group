import { Equal, Expect } from "../../../helper";
import { expect, it } from "vitest";

// 7. Object.keys correct typing

const typedObjectKeys = <T extends string>(obj: Record<T, number>) => {
  return Object.keys(obj) as T[];
};

it("Should return the keys of the object", () => {
  const result1 = typedObjectKeys({
    a: 1,
    b: 2,
  });
	
  expect(result1).toEqual(["a", "b"]);

  type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});