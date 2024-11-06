import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginEnd: 'auto',
  },
  chartContainer: {
    overflow: 'hidden',
  }
})

export default styles