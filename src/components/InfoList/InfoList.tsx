import { View } from 'react-native'
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import InfoCard, { InfoCardProps } from '../InfoCard'
import styles from './InfoList.styles'


interface InfoPiece extends InfoCardProps {
  id: number
}


const InfoList = () => {

  const info: InfoPiece[] = [
    {id: 1, title: 'Active Jobs', value: 24, Icon: <Ionicons name="briefcase-outline" color="#d66cc2" size={24} />},
    {id: 2, title: 'Candidates', value: 298, Icon: <MaterialIcons name="group" color="#ffda77" size={24} />},
    {id: 3, title: 'Active Jobs', value: 54, Icon: <Ionicons name="calendar-clear-outline" color="#4e83ff" size={24} />},
    {id: 4, title: 'Active Jobs', value: 48, Icon: <MaterialCommunityIcons name="checkbox-multiple-outline" color="#55d177" size={24} />},
  ]

  return (
    <View style={styles.container}>
      {info?.map(item => (
        <InfoCard key={item.id} title={item.title} value={item.value} Icon={item.Icon} />
      ))}
    </View>
  )
}

export default InfoList