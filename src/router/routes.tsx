import { RouterType } from '@/types';
import Home from '@/pages/Home/Home';

const Routes: RouterType[] = [
  {
    index: true,
    element: <Home />,
    title: 'Home',
    meta: {
      key: 3
    }
  },
  {
    path: '/colorSystem',
    title: 'Color System',
    // Single route in lazy file
    lazy: () => import('@/pages/ColorSystem/ColorSystem'),
    meta: {
      key: 4
    }
  },
  {
    path: '/about',
    lazy: () => import('@/pages/About/About'),
    title: 'about',
    meta: {
      key: 5
    }
  }
];
export default Routes;
