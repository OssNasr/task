import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import BottomTabs from './src/navigation/BottomTabs'


export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'white'} />
      <SafeAreaView style={styles.container}>

        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight
  },
});
