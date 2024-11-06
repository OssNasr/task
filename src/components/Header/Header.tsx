import { Text, View } from 'react-native'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import styles from './Header.styles'

const Header = () => {

  return (
    <View style={styles.container}>
      <FontAwesome6 name="bars-staggered" size={24} color={'black'} />

      <View style={styles.textContainer}>
        <Text style={styles.dateText}>
          Tue, 05 Dec
        </Text>
        <Text style={styles.greetingText}>
          Hi, Olivia Reiss
        </Text>
      </View>

      <View style={styles.notificationContainer}>
        <MaterialIcons name="notifications-none" size={24} color="black" />
        <View style={styles.notificationIndicator} />
      </View>
    </View>
  )
}

export default Header