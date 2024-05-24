import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const RepositoryStats = (props) => {
    const formatNumber = (number) => {
        if (number < 1000) {
            return number
        } else {
            return (number / 1000).toFixed(1) + 'k'
        }
    }

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
                <StyledText fontWeight='bold' align='center'>{formatNumber(props.stargazersCount)}</StyledText>
                <StyledText align='center'  >Stars</StyledText>
            </View>
            <View>
            <StyledText align='center' fontWeight='bold'>{formatNumber(props.forksCount)}</StyledText>
            <StyledText align='center' >Forks</StyledText>
            </View>
            <View>
            <StyledText align='center' fontWeight='bold'>{formatNumber(props.reviewCount)}</StyledText>
            <StyledText align='center' >Reviews</StyledText>
            </View>
            <View>
            <StyledText align='center' fontWeight='bold'>{formatNumber(props.ratingAverage)}</StyledText>
            <StyledText align='center' >Rating</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats