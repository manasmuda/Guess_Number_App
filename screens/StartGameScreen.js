import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableWithoutFeedback,Keyboard,Alert } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';


const StratGameScreen = props=>{
    const [enteredValue,setEnteredValue]=useState('');
    const [confirmed,setConfirmed]=useState(false);
    const [selectedNumber,setSelectedNumber]=useState(0);

    const numberInputHandler=inputText=>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };

    const resetInputHandler=()=>{
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler=()=>{
        const choosenNumber=parseInt(enteredValue);
        if(isNaN(choosenNumber) || choosenNumber<=0 || choosenNumber>99){
            Alert.alert('Invalid Number!','Number has to between 1 and 99',[{text:'Okay',style:'destructive',onPress:resetInputHandler}]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue('');
    };

    let confirmedOutput;

    if(confirmed){
        confirmedOutput = 
            <Card style={styles.outputContainer}>
                <TitleText>You Selected</TitleText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={props.onStartGame.bind(this,selectedNumber)}>START GAME</MainButton>
            </Card>
        
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <TitleText style={styles.title}>Start A New Game!</TitleText>
            <Card style={styles.inputContainer}>
                <BodyText>Select a Number</BodyText>
                <Input 
                    style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    keyboardType="number-pad" 
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/></View>
                    <View style={styles.button}><Button title="Confirm " onPress={confirmInputHandler} color={Colors.primary}/></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    title:{
        fontSize:20,
        marginVertical:10,
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    button:{
        width:100,
    },
    input:{
        width:60,
        textAlign:'center'
    },
    outputContainer:{
        marginTop:10,
        alignItems:"center",
    },
    
});

export default StratGameScreen;