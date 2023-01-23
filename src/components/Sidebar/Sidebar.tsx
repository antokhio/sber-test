import { Stack } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SidebarDrawer, SidebarOptions } from '..';
import { useTypedSelector } from '../../store';
import { productsOptionsSelector, productsVisibilitiesSelector } from '../../store/slices';

interface SidebarProps { }

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(({ }, ref) => {
    const [searchParams, setSearchParams] = useSearchParams();

    let productsOptions = useTypedSelector(productsOptionsSelector);
    let productsChecked = searchParams.getAll('product').map(param => param.toLowerCase());

    let visibilitiesOptions = useTypedSelector(productsVisibilitiesSelector);
    let visibilitiesChecked = searchParams.getAll('visibility').map(param => param.toLowerCase())

    const handleProductsOption = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (checked) productsChecked = [...productsChecked, e.target.name];
        else productsChecked = productsChecked.filter((product) => product.toLowerCase() !== e.target.name.toLowerCase());
        searchParams.delete('product');
        productsChecked.forEach((product) => searchParams.append('product', product.toLowerCase()));

        setSearchParams(searchParams);
    };

    const handleVisibilitiesOption = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (checked) visibilitiesChecked = [...visibilitiesChecked, e.target.name];
        else visibilitiesChecked = visibilitiesChecked.filter((visibility) => visibility !== e.target.name.toLowerCase());
        searchParams.delete('visibility');
        visibilitiesChecked.forEach((visibility) => searchParams.append('visibility', visibility.toLowerCase()));

        setSearchParams(searchParams);
    };

    return (
        <SidebarDrawer ref={ref}>
            <Stack spacing={2}>
                <SidebarOptions
                    title={'Product'}
                    options={productsOptions}
                    checked={productsChecked}
                    onChange={handleProductsOption}
                />
                <SidebarOptions
                    title={'Visibility'}
                    options={visibilitiesOptions}
                    checked={visibilitiesChecked}
                    onChange={handleVisibilitiesOption}
                />
            </Stack>
        </SidebarDrawer>
    );
});
