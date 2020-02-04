import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage></HomePage>
    },
    {
        path : '/product-list',
        exact : false,
        main : () => <ProductListPage/>
    },
    {
        path : '/product/add',
        exact : false,
        main : ({history}) => <ProductActionPage history = {history}></ProductActionPage>
    },
    {
        path : '/product/:id/edit',//cập nhật sản phẩm nào trang nào có id thì sẽ cập nhật
        exact : false,
        main : ({history,match}) => <ProductActionPage history = {history} match = {match}></ProductActionPage>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFoundPage></NotFoundPage>
    }
]

export default routes;