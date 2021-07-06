import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import BodyText from '../components/BodyText'
import MainButton from '../components/MainButton'

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <BodyText style={styles.resultText}>The Game is Over</BodyText>
            <View style={styles.imageContainer}>
                <Image
                    // use  the require() syntax is for a local image
                    source={require('../assets/success.png')}
                    // for a web image pass in an object with a uri key and a value of the image link
                    // source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/1859-Martinique.web.jpg'}}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
            <BodyText>Number of Rounds: <Text style={styles.highlight}>{props.roundsNumber}</Text></BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: 'black',
        borderWidth: 3,
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
})
