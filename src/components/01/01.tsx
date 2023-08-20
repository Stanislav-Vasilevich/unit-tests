export function sum(a: number, b: number) {
  return a + b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export function splitIntoWords(sentence: string) {
  return sentence.toLowerCase().trim().split(' ')
    .filter(i => i !== '')
    .filter(i => i !== '-')
    .map(i => {
      return i.replace('!', '')
        .replace('.', '');
    });
}

export const testing = (word: string) => {
  word = 'buy';

  if(word) {
      return word;
  }
}
