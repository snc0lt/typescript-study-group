
// const returnWhatIPassIn = <T1, T2>(t: { a: T1, b: T2 }) => {
//     return {
//         first: t.a,
//         second: t.b,
//     }
// }


const returnWhatIPassIn = <T1 extends {a: number, b: string}>(t: T1) => {
    return {
        first: t.a,
        second: t.b,
    }
}


const result = returnWhatIPassIn({ a: 123, b: 'world' });
console.log(result);
