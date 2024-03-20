import type { RouteObject } from 'react-router-dom';
export type RouterType = {
  title: string;
  meta: {
    key: number;
  };
  children?: RouterType[];
} & RouteObject;
