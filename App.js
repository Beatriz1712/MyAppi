import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenid@ a Appi!</Text>
      <StatusBar style="auto" />
      <Pressable onPress={ () => alert("Hola, Coder!")}>
      <Text>Press me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b9f542",
    alignItems: "center",
    justifyContent: "center",
  },
});
