import { View, StyleSheet, Image } from "react-native"
import StyledText from "./StyledText.jsx"
import RepositoryStats from "./RepositoryStats.jsx"
import theme from "../theme.js"

const RepositoryItemHeader = (props) => (

    <View style={{ flexDirection: 'row', paddingBottom: 4, }}>
            <View>
                <Image source={{uri: props.ownerAvatarUrl}} style={styles.image} />
            </View>
            <View style={{ flex: 1 , paddingLeft: 10, }}>
                <StyledText fontWeight="bold" fontSize="subheading">{props.fullName}</StyledText>
                <StyledText color='secondary'>{props.description}</StyledText>
                <StyledText style={styles.language}>{props.language}</StyledText>
            </View>
    </View>

    
                
)

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingVertical: 6,
    },
    strong: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    language: {
        color: 'white',
        backgroundColor: theme.colors.primary,
        padding: 4,
        borderRadius: 6,
        overflow: 'hidden',
        alignSelf: 'flex-start',
        marginVertical: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
    }

})



const repositoryItem = (props) => (
            <View key={props.id} style={styles.container}>
                <RepositoryItemHeader {...props} />
                <RepositoryStats {...props} />
            </View>
        )



export default repositoryItem