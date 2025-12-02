import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from '@/views/Home'
import Dashboard from '@/views/Dashboard'
import NotFound from '@/views/NotFound'
import Settings from '@/views/Settings'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
	  { path: "/dashboard", element: <Dashboard /> },
	  { path: "/settings", element: <Settings /> },
	  { path: "*", element: <NotFound />},
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
