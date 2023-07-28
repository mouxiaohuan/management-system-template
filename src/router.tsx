import * as React from 'react';
import type { RouteObject } from 'react-router-dom';
const Layout = React.lazy(() => import('./layouts'));
const Home = React.lazy(() => import('./pages/home'));
const NoMatch = React.lazy(() => import('./components/system/noMatch'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/test', element: <NoMatch /> },
      { path: '/courses', element: <Home /> },
      // {
      //   path: "/courses",
      //   element: <Courses />,
      //   children: [
      //     { index: true, element: <CoursesIndex /> },
      //     { path: "/courses/:id", element: <Course /> },
      //   ],
      // },
      { path: '*', element: <NoMatch /> },
    ],
  },
];

export default routes;
