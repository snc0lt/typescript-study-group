import { expect, it } from "vitest";
import { Expect, Equal } from "@/helper";

//6. create a function that return the correct "mapped user" 

type User = {
    firstName: string;
    lastName: string;
}

/*
interface User {
    firstName: string;
    lastName: string;
}

*/

export const concatenateFirstNameAndLastName = <T extends User>(user: T) => {
    return {
        ...user,
        fullName: `${user.firstName} ${user.lastName}`,
    };
};

// @test
it("Should add fullName to an object which only contains firstName and lastName", () => {
    const users = [
        {
            firstName: "Matt",
            lastName: "Pocock",
        },
    ];

    const newUsers = users.map(concatenateFirstNameAndLastName);

    expect(newUsers).toEqual([
        {
            firstName: "Matt",
            lastName: "Pocock",
            fullName: "Matt Pocock",
        },
    ]);

    type tests = [
        Expect<
            Equal<
                typeof newUsers,
                Array<{ firstName: string; lastName: string } & { fullName: string }>
            >
        >,
    ];
});

it("Should retain other properties passed in", () => {
    const users = [
        {
            id: 1,
            firstName: "Matt",
            lastName: "Pocock",
        },
    ];

    const newUsers = users.map(concatenateFirstNameAndLastName);

    expect(newUsers).toEqual([
        {
            id: 1,
            firstName: "Matt",
            lastName: "Pocock",
            fullName: "Matt Pocock",
        },
    ]);

    type tests = [
        Expect<
            Equal<
                typeof newUsers,
                Array<
                    { id: number; firstName: string; lastName: string } & {
                        fullName: string;
                    }
                >
            >
        >,
    ];
});
