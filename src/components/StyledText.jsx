import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({

    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.colors.textSecondary,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    alignCenter: {
        textAlign: theme.align.center,
    }
});

export default function StyledText({ color, children, fontSize, fontWeight, align, style,  ...props }){

    const textStyle = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.alignCenter,
        style

    ];

    return <Text style={textStyle} {...props}>
                {children}
            </Text>;
}