export const font = (fmin: number, fmax: number) => `
calc( (min(100vw, 1600px) - 480px)/(1600 - 480) * (${fmax} - ${fmin}) + ${fmin}px);
`;

export const gutters = (fmin: number, fmax: number, width: number) => {
  let windowWidth = width;
  if (windowWidth > 1600) windowWidth = 1600;
  return ((windowWidth - 480) / (1600 - 480)) * (fmax - fmin) + fmin;
};
