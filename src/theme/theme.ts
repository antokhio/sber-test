import { createTheme, PaletteColorOptions, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

const primary: PaletteColorOptions = {
    main: '#00D826',
    light: '#F2FFED',
};

export let theme: ThemeOptions = responsiveFontSizes(
    createTheme({
        palette: {
            mode: 'light',
            primary,
        },
        components: {
            MuiChip: {
                styleOverrides: {
                    outlinedPrimary: {
                        background: primary.light,
                        fontWeight: 700,
                        borderRadius: 3,
                    },
                },
            },
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        background: 'transparent',
                    },
                },
            },
        },
    })
);
