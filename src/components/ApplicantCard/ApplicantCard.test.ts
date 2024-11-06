import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styles from './ApplicantCard.styles'
import { Applicant } from '../RecentApplicants'



const ApplicantCard = ({ applicant }: {applicant: Applicant}) => {

  return (
    <View style={styles.container}>

      <Image
        source={{uri: 'https://placehold.co/200x200.png?text=' + applicant.id}}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.applicantName}>
          { applicant.name }
        </Text>
        <Text style={styles.applicantLocation}>
          { applicant.location }
        </Text>
      </View>

      <TouchableOpacity
        style={styles.threeDotsButton}>
        <Entypo name="dots-three-horizontal" color="black" size={18} />
      </TouchableOpacity>

    </View>
  );
}

export default ApplicantCard