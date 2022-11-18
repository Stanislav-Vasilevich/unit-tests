import {sum} from "./01";

test('sum should be correct', () => {
    // data
    const a: number = 2;
    const b: number = 3;

    // action
    const result = sum(a, b);

    // expect result
    expect(result).toBe(5);
});