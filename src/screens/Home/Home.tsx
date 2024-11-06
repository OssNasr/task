import { ScrollView, View } from 'react-native'
import Header from '../components/Header'
import InfoList from '../components/InfoList'
import JobAnalytics from '../components/JobAnalyticsChart'
import RecentApplicants from '../components/RecentApplicants'

import styles from './Home.styles'


const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <Header />

      <View style={styles.content}>

        <InfoList />

        <JobAnalytics />

        <RecentApplicants />

      </View>
    </ScrollView>
  )
}


export default Home