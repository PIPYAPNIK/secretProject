export function toCapitalizeWord(word: string) {
  if (word !== '') {
    return word[0].toUpperCase() + word.substring(1);
  } else return '';
}
