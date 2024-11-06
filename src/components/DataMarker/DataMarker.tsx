import { Text, View } from 'react-native'
import styles from './DataMarker.styles'
import { MarkerProps } from './DataMarker.types'


const DataMarker = ({ text, color }: MarkerProps) => {

  return (
    <View style={styles.container}>
      <View style={[styles.mark, {backgroundColor: color}]} />
      <Text style={styles.markText}>
        { text }
      </Text>
    </View>
  )
}

export default DataMarker