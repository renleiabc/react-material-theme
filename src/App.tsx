import { RouterProvider } from 'react-router-dom';
import Router from '@/router';
import '@/lang/i18n';

function App() {
  console.log(Router);
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
