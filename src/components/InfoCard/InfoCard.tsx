import { Text, View } from 'react-native'
import styles from './InfoCard.styles'
import { InfoCardProps } from './InfoCard.types'


const InfoCard = ({ title, Icon, value }: InfoCardProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>

        <Text style={styles.title}>
          { title }
        </Text>

        { Icon }

      </View>

      <Text style={styles.value}>
        { value }
      </Text>
    </View>
  )
}
 
export default InfoCard