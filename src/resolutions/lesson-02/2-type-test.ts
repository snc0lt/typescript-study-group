import { Equal, Expect } from "../../../helper";

/*2. 
  Igual que antes, pero ahora queremos un tipo predeterminado string si no se pasa nada,
	nota que el test también nos pide tiparlo como Set<string> cuando no se pasa ningún genérico a la función. 
*/

type SetType = string | number;

export const createOwnSet = <T extends SetType = string>() => {
  return new Set<T>();
};

const stringSet = createOwnSet<string>();
const numberSet = createOwnSet<number>();
const defaultString = createOwnSet();

type tests = [
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof defaultString, Set<string>>>,
];
