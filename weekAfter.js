const pad = (str) => {
  return `0${str}`.slice(-2);
};

const weekAfter = (str) => {
  const [d, m, y] = str.split('/');
  const today = new Date(+y, +m - 1, +d);
  today.setDate(today.getDate() + 7);

  const dd = pad(today.getDate());
  const mm = pad(today.getMonth() + 1);
  const yy = today.getFullYear();

  return `${dd}/${mm}/${yy}`;
};

// Tests
console.log(weekAfter('12/03/2020'), '19/03/2020');
console.log(weekAfter('21/12/1989'), '28/12/1989');
console.log(weekAfter('01/01/2000'), '08/01/2000');
