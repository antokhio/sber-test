import { Drawer, DrawerProps } from '@mui/material';
import React from 'react';

interface SidebarDrawerProps extends DrawerProps {}

export const SidebarDrawer = React.forwardRef<HTMLDivElement, SidebarDrawerProps>(
    ({ children, ...props }, ref) => {
        return (
            <Drawer
                PaperProps={{
                    ref,
                    sx: { p: 2 },
                    elevation: 0,
                }}
                open
                variant='persistent'
                anchor='left'
                {...props}
            >
                {children}
            </Drawer>
        );
    }
);
