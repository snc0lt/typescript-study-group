/*3. 
   Using what we now know, create a function "returnBothOfWhatIPassIn" that accepts 
   2 arguments and return the correct type for both
*/

const returnWhatIPassIn = <T1 extends number, T2 extends number>(a: T1, b: T2) => {
  return {
    a,
    b
 };
};


const result = returnWhatIPassIn(1, 2);
console.log(result);


