import {multiply, splitIntoWords, sum, testing} from './01';

let a: number;
let b: number;
let c: number;

// data
beforeEach(() => {
    a = 2;
    b = 3;
    c = -4;
});

test('sum should be correct', () => {
    const a: number = 2;
    const b: number = 3;
    const c: number = -4;

    // action
    const result = sum(a, b);
    const result2 = sum(a, c);
    const result3 = sum(b, c);

    // expect result
    expect(result).toBe(5);
    expect(result2).toBe(-2);
    expect(result3).toBe(-1);
});

test('multiply should be correct', () => {
    // data
    const a: number = 2;
    const b: number = 3;
    const c: number = 4;

    // action
    const result = multiply(a, b);
    const result2 = multiply(a, c);
    const result3 = multiply(b, c);

    // expect result
    expect(result).toBe(6);
    expect(result2).toBe(8);
    expect(result3).toBe(12);
});

test('splitting into words should be correct', () => {
    // data
    const a: string = 'Hello - friends!';
    const b: string = 'What  to buy?';

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
});

test('test', () => {
    // data
    const hello = 'hello';

    // action
   const getTest = testing(hello);

   // expect
    expect(getTest).toBe('buy');
});
