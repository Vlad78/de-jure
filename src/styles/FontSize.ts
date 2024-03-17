import { getScreenWidth } from '../utils/getScreenWidth';


export const font = (fmin: number, fmax: number) => `
calc( (min(100vw, 1600px) - 320px)/(1600 - 320) * (${fmax} - ${fmin}) + ${fmin}px);
`;

export const gutters = (fmin: number, fmax: number) => {
  const width = getScreenWidth();

  const windowWidth = Math.min(width, 1600);
  return ((windowWidth - 320) / (1600 - 320)) * (fmax - fmin) + fmin;
};
