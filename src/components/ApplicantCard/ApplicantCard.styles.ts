import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    width: 260,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 18,
    flexDirection: 'row',
    gap: 16,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  textContainer: {
    gap: 8,
  },
  applicantName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  applicantLocation: {
    color: 'darkgray',
    fontSize: 12
  },
  threeDotsButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  }

});

export default styles