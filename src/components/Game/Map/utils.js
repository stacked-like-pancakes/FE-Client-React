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
