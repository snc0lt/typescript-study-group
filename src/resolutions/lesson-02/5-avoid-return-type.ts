import { Equal, Expect } from "../../../helper";
import { expect, it} from "vitest";

// 5. avoid an any return type in a fetch calls using generics

const fetchData = async <T>(url: string): Promise<T> => {
  const data = await fetch(url).then((response) => response.json());
  return data;
};

it("Should fetch data from an API", async () => {
  const data = await fetchData<{ name: string }>(
    "https://swapi.dev/api/people/1",
  );
  expect(data.name).toEqual("Luke Skywalker");

  type tests = [Expect<Equal<typeof data, { name: string }>>];
});
