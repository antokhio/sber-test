import { InboxTwoTone } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import React from 'react';

interface NoDataBadgeProps { }

export const NoDataBadge: React.FC<NoDataBadgeProps> = ({ }) => {
    return (
        <Stack alignItems='center' justifyContent='center'>
            <InboxTwoTone
                sx={{ fontSize: 64, opacity: 0.5, flex: 1, color: (theme) => theme.palette.action.disabled }}
            />
            <Typography
                variant='h6'
                sx={{ fontWeight: 700, color: (theme) => theme.palette.action.disabled }}
            >
                No Data
            </Typography>
        </Stack>
    );
};
