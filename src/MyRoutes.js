import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePage from './Components/CreatePage/CreatePage';
import DetailPage from './Components/DetailPage/DetailPage';
import ListPage from './Components/ListPage/ListPage';

import { store } from './Store'
const MyRoutes = () => {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/create" element={<CreatePage />} />
                        <Route path="/" element={<ListPage />} />
                        <Route path="/detail/:id" element={<DetailPage />} />

                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
};

export default MyRoutes;