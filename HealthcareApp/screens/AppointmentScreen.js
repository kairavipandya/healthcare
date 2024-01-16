import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton'; // Import CustomButton
import { commonStyles } from '../components/styles';
import moment from 'moment'; // Import Moment.js


const appointments = [
  { id: '1', title: 'Dental Checkup', date: '2024-01-20' },
  { id: '2', title: 'General Consultation', date: '2024-01-22' },
  // Add more mockup data here
];

function AppointmentScreen({ navigation }) { // Pass 'navigation' as a prop
  const formattedDate = moment(item.date).format('MMM DD, YYYY');

  return (
    <View style={commonStyles.container}>
      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
      />
      <CustomButton // Use CustomButton component
        title="Add Appointment"
        onPress={() => navigation.navigate('AddAppointment')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default AppointmentScreen;
