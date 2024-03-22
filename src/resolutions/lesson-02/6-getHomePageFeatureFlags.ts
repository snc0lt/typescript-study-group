import { Equal, Expect } from "../../../helper";
import { expect, it } from "vitest";
/* 
6. a bit more complex (still manageable), at what level should the generic live? (hint: think low)
*/

type Config<T> = {
    rawConfig: {
        featureFlags: {
            homePage: T;
        };
    };
};

export const getHomePageFeatureFlags = <T>(
    config: Config<T>,
    override: (flags: T) => T
) => {
    return override(config.rawConfig.featureFlags.homePage);
};

test("getHomePageFeatureFlags", () => {
    const EXAMPLE_CONFIG = {
        apiEndpoint: "https://api.example.com",
        rawConfig: {
            featureFlags: {
                homePage: {
                    showBanner: true,
                    showLogOut: false,
                },
                loginPage: {
                    showCaptcha: true,
                    showConfirmPassword: false,
                },
            },
        },
    };
    it("Should return the homePage flag object", () => {
        const flags = getHomePageFeatureFlags(
            EXAMPLE_CONFIG,
            (defaultFlags) => defaultFlags
        );

        expect(flags).toEqual({
            showBanner: true,
            showLogOut: false,
        });

        type tests = [
            Expect<Equal<typeof flags, { showBanner: boolean; showLogOut: boolean }>>
        ];
    });

    it("Should allow you to modify the result", () => {
        const flags = getHomePageFeatureFlags(EXAMPLE_CONFIG, (defaultFlags) => ({
            ...defaultFlags,
            showBanner: false,
        }));

        expect(flags).toEqual({
            showBanner: false,
            showLogOut: false,
        });

        type tests = [
            Expect<Equal<typeof flags, { showBanner: boolean; showLogOut: boolean }>>
        ];
    });
});