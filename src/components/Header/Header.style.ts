import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 18,
    backgroundColor: 'white',
  },
  textContainer: {
    //
  },
  dateText: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 8,
  },
  greetingText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  notificationContainer: {
    //
  },
  notificationIndicator: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: 'red',
    position: 'absolute',
    top: 6,
    right: 6,
  }
})

export default styles