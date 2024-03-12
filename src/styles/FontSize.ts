export const font = (fmin: number, fmax: number) => `
calc( (min(100vw, 1600px) - 480px)/(1600 - 480) * (${fmax} - ${fmin}) + ${fmin}px);
`;
