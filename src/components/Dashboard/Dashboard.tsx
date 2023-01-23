import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import useMeasure from 'react-use-measure'
import { Layout, Sidebar } from '..'


interface DashboardProps {

}

export const Dashboard: React.FC<DashboardProps> = ({ }) => {
    const [sidebarRef, { width: sidebarWidth }] = useMeasure();

    return (
        <Layout title='Dashboard'>
            <Sidebar ref={sidebarRef} />
            <Box style={{ marginLeft: sidebarWidth }}>
                <Outlet />
            </Box>
        </Layout>
    )
}