import { Platform } from 'react-native';

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        white: '#FFFFFF',
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Arial',
            ios: 'System',
            default: 'Arial',
        }),

    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    align: {
        center: 'center',
    },
    appBar: {
        primary: '#24292e',
        textPrimary: '#FFFFFF',
        textSecondary: '#999',
    }
   
}

export default theme;