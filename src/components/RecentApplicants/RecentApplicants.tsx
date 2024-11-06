import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './RecentApplicants.styles'
import ApplicantCard from '../ApplicantCard'
import { Applicant } from './RecentApplicants.types'


const RecentApplicants = () => {

  const applicants: Applicant[] = [
    {id: 1, name: 'Daisy Schoen', location: '54 Devon St, Florence. SC. Us'},
    {id: 2, name: 'Daisy Schoen', location: '54 Devon St, Florence. SC. Us'},
    {id: 3, name: 'Daisy Schoen', location: '54 Devon St, Florence. SC. Us'},
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Recent Applicants
        </Text>
        <TouchableOpacity>
          <Text style={styles.seeAllButtonText}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{gap: 16}}
        showsHorizontalScrollIndicator={false}>
        {applicants.map(applicant => (
          <ApplicantCard key={applicant.id} applicant={applicant} />
        ))}
      </ScrollView>
    </View>
  )
}

export default RecentApplicants