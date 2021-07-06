import React from 'react'
import { Button, StyleSheet, View, Image } from 'react-native'
import BodyText from '../components/BodyText'

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <BodyText>The Game is Over</BodyText>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image} resizeMode='cover'/>
            </View>
            <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title='New Game' onPress={props.onRestart}/>
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
    }
})
