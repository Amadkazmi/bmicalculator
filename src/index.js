import { View, Text, StyleSheet, TextInput , TouchableOpacity} from 'react-native'
import React , { useState} from 'react'
import  Constants from 'expo-constants'

const BmiCalculator = () => {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [description, setDescription] = useState('')

    const calculateBmi =() => {
        const bmi = weight / ((height /100) * (height/100))
        setBmi(bmi.toFixed(1))

        if(bmi < 18.5){
            setDescription('You are Underweight!!!')
        }
        else if(bmi >= 18.5 && bmi <= 24.9 ){
             setDescription('Normalweight , welldone keep it up.')
        }
        else if (bmi >= 25 && bmi <= 29.9){
            setDescription('Overweight , need some workout..!')
        }
        else if (bmi >= 30){
            setDescription('Obese, Time to start Training.')
        }
    }

  return (
    <View style= {styles.container}>
      <View style= {styles.title}>
        <Text style= {styles.titleText}> Bmi Calculator </Text>
        </View>  

        <TextInput
        style= {styles.input}
        value= {weight}
        onChangeText={(text) => setWeight(text)}
        placeholder= "Weight in Kg"
        keyboardType= 'numeric'
        />

<TextInput
        style= {styles.input}
        value= {height}
        onChangeText={(text) => setHeight(text)}
        placeholder= "Height in Cm"
        keyboardType= 'numeric'
        />
        <TouchableOpacity
        
        style={styles.button}
        onPress={calculateBmi}
        >
        <Text style={styles.buttonText}> Calculate </Text>
        </TouchableOpacity>
        <View style={styles.resultView}>
        <Text style={styles.result}>{bmi}</Text>
        <Text style={styles.result}>{description}</Text>
     </View>
    </View>
  )
}

export default BmiCalculator
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'grey',
    },
    title: {
        backgroundColor: '#2c6975',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    titleText:{
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',


    },
    input: {

        height: 55, 
        margin:15,
        borderWidth: 1/2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'lightgreen',
        fontSize:18
},

   button: {
    height:55,
    margin:15,
    borderWidth: 1/2,
    borderRadius: 15,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',

},

  buttonText: {
    fontSize : 18 ,
    color: 'gray', 
    fontWeight: 'bold',
    
    
},

resultView: {

   margin:15,
},

result: {
    fontSize:20,
    color: 'darkgren',
    fontWeight: 'bold',

},



});