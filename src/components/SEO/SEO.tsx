import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
}

export const SEO: React.FC<SEOProps> = ({ title }) => {
    return (
        <Helmet>
            <meta charSet='utf-8' />
            <link rel='manifest' href='/site.webmanifest' />
            <title>{title ? `${title} | СберБизнесСофт` : `СберБизнесСофт`}</title>
        </Helmet>
    );
};
