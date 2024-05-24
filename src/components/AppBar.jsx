import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    text: {
        color: theme.appBar.textSecondary,
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold,
        paddingHorizontal: 10,
    },
    active: {
        color: theme.appBar.textPrimary
    }
})

const AppbarTab = ({ children, to}) => {

    const { pathname } = useLocation()

    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={textStyles}>{children}</StyledText>
        </Link>
    )
}


const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppbarTab to='/'>Repositories</AppbarTab>
            <AppbarTab to='/signin'>Sign In</AppbarTab>
        </View>
    )
}

export default AppBar