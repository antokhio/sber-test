import { Divider, Stack, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

interface ProductsHeaderProps {
    count: number;
}

export const ProductsHeader: React.FC<ProductsHeaderProps> = ({ count }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handlePopularClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        searchParams.delete('category');
        setSearchParams(searchParams);
    };
    const handleRecentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        searchParams.set('category', 'recent');
        setSearchParams(searchParams);
    };

    const value = searchParams.get('category');

    return (
        <Stack direction='row' alignItems='center'>
            <Typography sx={{ flex: 1, color: (theme) => theme.palette.action.disabled }} variant='h6'>{`Total count: ${count}`}</Typography>
            <Tabs value={value ?? ''} sx={{ display: 'flex' }}>
                <Tab
                    label={
                        <Typography variant='h6' sx={{ textTransform: 'none', }}>
                            Popular
                        </Typography>
                    }
                    disableRipple
                    value={''}
                    onClick={handlePopularClick}
                />
                <Tab icon={<Divider orientation='vertical' />} sx={{ p: 0, py: 1, m: 0, minWidth: 0 }} disabled />
                <Tab
                    label={
                        <Typography variant='h6' sx={{ textTransform: 'none' }}>
                            Recent
                        </Typography>
                    }
                    disableRipple
                    value={'recent'}
                    onClick={handleRecentClick}
                />
            </Tabs>
        </Stack>
    );
};
