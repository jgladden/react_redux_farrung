export const range = n => [...Array(n).keys()];

export const uniqueId = () => Math.random().toString(36).substr(2, 16);

