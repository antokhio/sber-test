import { Chip, Grid, Paper, Stack, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
import React from 'react';
import { NoDataBadge } from '..';
import type { Product as ProductProps } from '../../store/slices';

export const Product: React.FC<{ product: ProductProps }> = ({ product }) => {
    return (
        <Paper variant='outlined' sx={{ borderRadius: 0 }}>
            <Grid container sx={{ p: 2 }} spacing={4}>
                <Grid item sx={{ p: 1 }} xs={12} sm={12} md={12} lg={2} xl={2}>
                    <Stack spacing={2}>
                        <Chip label={product.visibility} variant='outlined' color='primary' />
                        <NoDataBadge />
                    </Stack>
                </Grid>
                <Grid item sx={{ p: 1 }} xs={12} sm={12} md={12} lg={8} xl={8}>
                    <Stack spacing={2} justifyContent='space-around'>
                        <Typography variant='h5' fontWeight={500} color='primary'>
                            {product.title}
                        </Typography>
                        <Typography>{product.description}</Typography>
                    </Stack>
                </Grid>
                <Grid item sx={{ p: 1 }} xs={12} sm={12} md={12} lg={2} xl={2}>
                    <Stack
                        spacing={2}
                        sx={{ color: (theme) => theme.palette.action.disabled, height: '100%' }}
                        alignItems='flex-start'
                        justifyContent='center'
                    >
                        <Typography variant='subtitle2' sx={{ whiteSpace: 'pre-wrap' }}>
                            {product.author.replaceAll(' ', '\r\n')}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {format(parseISO(product.date), 'MMM do yy')}
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    );
};
