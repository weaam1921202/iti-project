import React, { useContext, lazy, Suspense } from 'react'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Shop from './components/Shop/Shop'
import Fake from './components/Api/fake'
import Dummy from './components/Api/dummy'
import Cart from './components/Cart/Cart'
import Favlist from './components/Favlist/Favlist'
import Detailsfake from './components/Detailsfake'
import Detailsdummy from './components/Detailsdummy'
import { apicontext } from './context/Apicontext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Lottiehandler from './Lottiehandler'

const Layout = lazy(() => import('./Layout'))

export default function App() {
  const { dark } = useContext(apicontext)

  const router = createBrowserRouter([
    {
      path: '',
      element: (
        <Suspense fallback={<Lottiehandler type="load" />}>
          <Layout />
        </Suspense>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'shop', element: <Shop /> },
        { path: 'fake', element: <Fake /> },
        { path: 'product/:id', element: <Detailsfake /> },
        { path: 'dummy', element: <Dummy /> },
        { path: 'pro/:key', element: <Detailsdummy /> },
        { path: 'cart', element: <Cart /> },
        { path: 'favlist', element: <Favlist /> },
      ],
      errorElement: <Lottiehandler type="error" />,
    },
  ])

  return (
    <main className={dark ? 'dark' : ''}>
      <RouterProvider router={router} />
    </main>
  )
}