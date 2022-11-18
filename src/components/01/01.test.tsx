import {multiply, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 2;
    b = 3;
    c = 4;
})

test('sum should be correct', () => {
    // data
    const a: number = 2;
    const b: number = 3;
    const c: number = 4;

    // action
    const result = sum(a, b);
    const result2 = sum(a, c);

    // expect result
    expect(result).toBe(5);
    expect(result2).toBe(6);
});

test('multiply should be correct', () => {
    // data
    const a: number = 2;
    const b: number = 3;
    const c: number = 4;

    // action
    const result = multiply(a, b);
    const result2 = multiply(a, c);

    // expect result
    expect(result).toBe(6);
    expect(result2).toBe(8);
});

test('splitting into words should be correct', () => {
    // data
    const a: string = 'Hello - friends!';
    const b: string = 'What  to bye?';

    // action
    const result = splitIntoWords(a);
    const result2 = splitIntoWords(b);

    // expect result
    expect(result.length).toBe(2);
    expect(result[0]).toBe('hello');
    expect(result[1]).toBe('friends');

    expect(result2.length).toBe(3);
    expect(result2[0]).toBe('what');
    expect(result2[1]).toBe('to');
    expect(result2[2]).toBe('bye?');
});