import { expect, test } from "vitest";
import { Expect, Equal} from "@/helper";

type ComponentDataType = { 
    a: number; 
    b: number; 
    c: number; 
};

export class Component<T extends ComponentDataType> {
    private props: T;
    constructor(props: T) {
        this.props = props;
    }

    getProps = () => this.props;
}

// @test
test("Should create an object containing props", () => {
  const component = new Component({ a: 1, b: 2, c: 3 });

  const result = component.getProps();
  
  type tests = [
    Expect<Equal<typeof result, ComponentDataType>>,
  ];

  expect(result).toEqual({ a: 1, b: 2, c: 3 });

});