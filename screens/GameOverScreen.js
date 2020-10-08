import React from 'react';
import {View,StyleSheet,Text, Button,Image} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen=props=>{
    return(
        <View style={styles.screen}>
            <TitleText style={styles.title}>GAME OVER</TitleText>
            <View style={styles.imageContainer}>
            <Image fadeDuration={1000} style={styles.image} source={{uri:'https://firebasestorage.googleapis.com/v0/b/vitbuzz-ae9cc.appspot.com/o/8v8b6IP1.png?alt=media&token=1234'}} 
            //source={require('../assets/gameover.png')}
            />
            </View>
            <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width:'100%',
        height:'100%',
    },
    imageContainer:{
        width:300,
        height:300,
        borderColor:'#000000',
        borderRadius:200,
        borderWidth:2,
        overflow:'hidden',
        marginVertical:30,
    },
    title:{
        fontSize:28,
    },
    highlight:{
        color:Colors.primary,
    },
    resultText:{
        fontSize:20,
        textAlign:'center',
        marginVertical:15,
        marginHorizontal:15,

    }
});

export default GameOverScreen;