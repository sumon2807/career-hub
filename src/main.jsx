import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';

const router=createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('category.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params})=> fetch(`/featured.json`)
      },
      {
        path: 'appliedjob',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
