// 2. use the same example above, but now onlky allow string as returnWhatIPassIn args

const returnWhatIPassIn = <T extends string | number>(t: T) => {
  return t;
};

const text = returnWhatIPassIn("text");
console.log(text);

const num = returnWhatIPassIn(1);
console.log(num);

