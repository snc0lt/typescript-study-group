import { expect, it } from "vitest";

// 11. more inference??
// FOR REAL, Whoever manages to solve this, I'm gonna buy them a beer...

// first approach:
type ClassNames = Record<string, string>;

const createClassNamesFactory =
    <T extends ClassNames>(classes: T) =>
        <K extends keyof T>(type: K, ...otherClasses: string[]) => {
            const classList = [classes[type], ...otherClasses];
            return classList.join(" ");
        };

// second approach:
//type ClassNames = Record<string, string>;

// const createClassNamesFactory = <T extends ClassNames>(
//     classes: T
// ) => (
//     type: keyof T,
//     ...otherClasses: string[]
// ) => {
//         const classList = [classes[type], ...otherClasses];
//         return classList.join(" ");
//     };

const getBg = createClassNamesFactory({
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
});

it("Should let you create classes from a className factory", () => {
    expect(getBg("primary")).toEqual("bg-blue-500");
    expect(getBg("secondary")).toEqual("bg-gray-500");
});

it("Should let you pass additional classes which get appended", () => {
    expect(getBg("primary", "text-white", "rounded", "p-4")).toEqual(
        "bg-blue-500 text-white rounded p-4"
    );
});