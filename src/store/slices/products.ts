import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

import { faker } from '@faker-js/faker/locale/ru';
import { Product } from '../../components';
import { getTime, parseISO } from 'date-fns';

export type Product = {
    title: string;
    date: string;
    author: string;
    description: string;
    product: string;
    visibility: 'Public' | 'Partners';
    popularity: number;
};

const products = ['SBER CRM', 'SBER Analytics', 'SBER Business Partner'];
const visibilities = ['Public', 'Partners'];

const initialState: Product[] = [
    {
        title: 'Новая версия нашего ПО',
        date: '2021-04-17T17:58:09.0000000Z',
        author: 'Никита Кручинкин',
        description: 'Рассказываем о новых фичах нашего продукта',
        product: 'SBER CRM',
        visibility: 'Public',
        popularity: 5,
    },
    ...Array.from({ length: 18 }).map((_, i) => ({
        title: faker.commerce.product(),
        date: faker.date.past().toISOString(),
        author: faker.name.fullName(),
        description: faker.commerce.productDescription(),
        product: products[Math.round(Math.random() * 2)],
        popularity: Math.round(Math.random() * 4),
        visibility: visibilities[Math.round(Math.random())] as 'Public' | 'Partners',
    })),
];

const { actions, reducer } = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export const productsReducer = reducer;
export const {} = actions;

export const productsOptionsSelector = createSelector(
    (state: RootState) => state.products,
    (products) => Array.from(new Set(products.map(({ product }) => product)))
);

export const productsVisibilitiesSelector = createSelector(
    (state: RootState) => state.products,
    (products) => Array.from(new Set(products.map(({ visibility }) => visibility)))
);

export const productsSelector = createSelector(
    (state: RootState, params: URLSearchParams) => state.products,
    (state: RootState, params: URLSearchParams) => params,
    (initlaProducts, params) => {
        let products = [...initlaProducts];
        let productsOptions = params.getAll('product');
        let visibilitiesOptions = params.getAll('visibility');
        let categoryOptions = params.get('category');

        if (productsOptions.length > 0) {
            products = products.filter((product) =>
                productsOptions.some((option) => product.product.toLowerCase() === option.toLowerCase())
            );
        }
        if (visibilitiesOptions.length > 0) {
            products = products.filter((product) =>
                visibilitiesOptions.some(
                    (option) => product.visibility.toLowerCase() === option.toLowerCase()
                )
            );
        }

        if (!categoryOptions) {
            products.sort((a, b) => b.popularity - a.popularity);
        } else if (categoryOptions === 'recent') {
            products.sort((a, b) => getTime(parseISO(b.date)) - getTime(parseISO(a.date)));
        }

        return products;
    }
);
