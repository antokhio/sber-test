import { Stack } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SidebarDrawer, SidebarOptions } from '..';
import { useTypedSelector } from '../../store';
import { productsOptionsSelector, productsVisibilitiesSelector } from '../../store/slices';

interface SidebarProps {}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(({}, ref) => {
    const [searchParams, setSearchParams] = useSearchParams();

    let productsOptions = useTypedSelector(productsOptionsSelector);
    let productsChecked = searchParams.getAll('product');

    let visibilitiesOptions = useTypedSelector(productsVisibilitiesSelector);
    let visibilitiesChecked = searchParams.getAll('visibility');

    const handleProductsOption = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (checked) productsChecked = [...productsChecked, e.target.name];
        else productsChecked = productsChecked.filter((product) => product !== e.target.name);
        searchParams.delete('product');
        productsChecked.forEach((product) => searchParams.append('product', product));

        setSearchParams(searchParams);
    };

    const handleVisibilitiesOption = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (checked) visibilitiesChecked = [...visibilitiesChecked, e.target.name];
        else visibilitiesChecked = visibilitiesChecked.filter((visibility) => visibility !== e.target.name);
        searchParams.delete('visibility');
        visibilitiesChecked.forEach((product) => searchParams.append('visibility', product));

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