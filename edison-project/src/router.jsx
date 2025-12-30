import {
    createBrowserRouter,
    RouterProvider,
}
    from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import TermsPage from './pages/TermsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import Cart from './components/CartAPI';

const routerContext = createBrowserRouter([
    {
        path: '/',
        element: <HomePage></HomePage>
    },
    {
        path: '/Home',
        element: <HomePage></HomePage>
    },
    {
        path: "/About",
        element: <AboutUsPage></AboutUsPage>
    },
    {
        path: "/Contact",
        element: <ContactUsPage></ContactUsPage>
    },
    {
        path: "/Terms",
        element: <TermsPage></TermsPage>
    },
    {
        path: '/Login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/Register',
        element: <RegisterPage></RegisterPage>
    },
    {
        path: "/Product",
        element: <ProductPage></ProductPage>
    },
    {
        path: "/Cart",
        element: <Cart></Cart>
    }
])

const router = () => {
    return (
        <RouterProvider router={routerContext}></RouterProvider>
    )
}
export default router;