import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button,TextInput, Alert } from 'react-native';




export default function App() {
  const [bomdia,setBomdia] = useState('Bomdia')
    const handleBomdia = (e) =>{
      setBomdia(e.target.value)
    }
    const showText = () =>{
        Alert.alert(
        "Titulo do brabo",
        `Que isso meu patrão, o bgl é: `,
        [
          {
            text: "sai fora mlk",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "tmj meu patrão", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
  let nome = 'Luiz'
  return (
    <View style={{margin: 50}}>
      <Text>Uepa</Text>
      <Text>{bomdia}</Text>
      <Jobs name='Luiz'/>
      <TextInput value={bomdia} onChange={handleBomdia}/>
      <Text style={{fontSize: 30}}>{nome}</Text>
      <Button title='Simbora' style={{ width: 80, height: 200, backgroundColor: '#dadada'}} />
    </View>
  );
}


let img = 'https://i.imgur.com/0zLgEMa.png'

const Jobs = (props) =>{
  return(
    <>
    <Image source={{uri:img}} style={{width: 300, height: 300}}/>
    <Text>{props.name}</Text>
    </>
  )
}