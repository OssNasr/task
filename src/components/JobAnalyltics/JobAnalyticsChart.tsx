import { Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import styles from './JobAnalyticsChart.styles';
import DataMarker from './DataMarker';
import chartData from '../../api/MOCK_DATA'

const JobAnalytics = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Job Analytics</Text>

        <DataMarker text="Applied" color="#07f" />
        <DataMarker text="Qualified" color="#15c045" />
      </View>


      <View style={styles.chartContainer}>
        <BarChart
          width={260}
          stackData={chartData}
          initialSpacing={10}
          xAxisThickness={0}
          yAxisThickness={0}
          hideRules={true}
          barWidth={18}
          yAxisTextStyle={{ color: 'gray' }}
          xAxisLabelTextStyle={{ color: 'gray' }}
          stepHeight={22}
        />
      </View>
    </View>
  );
};

export default JobAnalytics;
