import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Products, Dashboard } from './components';

interface AppProps {}
export const App: React.FC<AppProps> = ({}) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Dashboard />}>
                    <Route index element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
