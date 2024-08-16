import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='max-w-screen-xl	mx-auto lg:px-0 md:px-0 px-5'>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>

  </StrictMode>,
)
