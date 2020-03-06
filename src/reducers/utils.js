export const chatFilter = (arr, el) => {
  if (arr.length < 10) {
    return [...arr, el];
  }
  const result = [...arr];
  result.shift();
  result.push(el);
  return result;
};

export const northLines = d => {
  if (d.north_id) {
    return [
      { x: d.x_cor, y: d.y_cor },
      { x: d.x_cor, y: d.y_cor + 1 }
    ];
  }
};

export const westLines = d => {
  if (d.west_id) {
    return [
      { x: d.x_cor, y: d.y_cor },
      { x: d.x_cor - 1, y: d.y_cor }
    ];
  }
};

export const eastLines = d => {
  if (d.east_id) {
    return [
      { x: d.x_cor, y: d.y_cor },
      { x: d.x_cor + 1, y: d.y_cor }
    ];
  }
};

export const southLines = d => {
  if (d.south_id) {
    return [
      { x: d.x_cor, y: d.y_cor },
      { x: d.x_cor, y: d.y_cor - 1 }
    ];
  }
};

export const makeLines = (arr, fn) => {
  const result = arr.map(x => fn(x)).filter(x => x);
  return result;
};

export const chat = [
  "Welcome to DudeScape, you'll coward",
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_',
  '_'
];

