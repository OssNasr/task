import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    // width: 160, // better to use ratio width dependent for screen sizes
    minWidth: 120,
    width: '47%',
  },
  title: {
    color: 'gray',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})

export default styles