import { Stack } from '@mui/system';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product, ProductsHeader } from '..';
import { useTypedSelector } from '../../store';
import { productsSelector } from '../../store/slices';

interface ProductsProps { }

export const Products: React.FC<ProductsProps> = ({ }) => {
    const [searchParams] = useSearchParams();

    const products = useTypedSelector((state) => productsSelector(state, searchParams));

    return (
        <Stack spacing={2} sx={{ py: 2 }}>
            <ProductsHeader count={products.length} />
            <Stack spacing={2}>
                {products.map((product, i) => (
                    <Product product={product} key={`product-${i}`} />
                ))}
            </Stack>
        </Stack>
    );
};
