import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './UI/Layout/Layout'
import CategoriesLayout from './UI/Category/CategoryLayout'
import MainLayout from './UI/Layout/MainLayout'
import ProductDetails from './UI/Products/ProductDetails'
import Users from './UI/Users/Users'
import UserLayout from './UI/Users/UserLayout'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <MainLayout/>
        },
        {
          path: 'shopping/:page',
          element: <CategoriesLayout/>
        },
        {
          path: "product/:id",
          element: <ProductDetails/>
        },
        {
          path: "users",
          element: <Users/>
        },
        {
          path: "user/:user",
          element: <UserLayout/>
        }
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
