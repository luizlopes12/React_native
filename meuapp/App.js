import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  let nome = 'Luiz'
  let img = 'https://i.imgur.com/0zLgEMa.png'
  return (
    <View style={{margin: 50}}>
      <Text>Uepa</Text>
      <Text>Bomdia</Text>
      <Image source={{uri:img}} style={{width: 300, height: 300}}></Image>
      <Text style={{fontSize: 30}}>{nome}</Text>
    </View>
  );
}
