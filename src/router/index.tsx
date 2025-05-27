import { RouterProvider, createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';
import Home from '@/view/home';

const Login = lazy(() => import('@/view/login'));
export default function RouterLayout() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: (
        <Suspense fallback={<div>加载中...</div>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: '/',
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
