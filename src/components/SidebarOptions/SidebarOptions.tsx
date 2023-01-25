import { Checkbox, Divider, FormControlLabel, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

interface SidebarOptionsProps {
    title: string;
    options: string[];
    checked: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export const SidebarOptions: React.FC<SidebarOptionsProps> = ({ title, options, checked, onChange }) => {
    return (
        <Paper variant='outlined' sx={{ borderRadius: 4 }}>
            <Typography variant='h6' sx={{ p: 1, px: 2 }}>
                {title}
            </Typography>
            <Divider />
            <Stack sx={{ p: 1, px: 2 }}>
                {options.map((option) => (
                    <FormControlLabel
                        key={`${title}-${option}`}
                        name={option}
                        label={option}
                        control={<Checkbox checked={checked.some(check => check.toLowerCase() === option.toLowerCase())} onChange={onChange} />}
                    />
                ))}
            </Stack>
        </Paper>
    );
};
