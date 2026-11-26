export type Location = {
  x: number;
  y: number;
};

export type Dimensions = Location;

export type ReactSetter<T> = (value: T) => void;

export type Theme = 'light' | 'dark';
