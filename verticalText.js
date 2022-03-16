const verticalText = (str) => {
  const words = str.split(' ');
  const max = Math.max(...words.map((word) => word.length));
  const result = [];

  for (let i = 0; i < max; i++) {
    result.push(words.map((word) => word[i] || ' '));
  }

  return result;
};
console.log(verticalText("Holy bananas"));
console.log(verticalText("Hello fellas"));