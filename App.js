import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './screens/registerScreen';
import LoginScreen from './screens/loginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterScreen />
      {/* <LoginScreen /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
