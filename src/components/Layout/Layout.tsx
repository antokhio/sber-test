import { Container } from '@mui/material';
import React from 'react';
import { SEO } from '..';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <SEO title={title} />
            {/* <Header/> */}
            <Container>
                {children}
            </Container>
            {/* <Footer/> */}
        </>
    );
};
