// In ConsultationScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import moment from 'moment'; // Import Moment.js

const consultations = [
  { id: '1', date: '2024-01-15', time: '10:00 AM', doctor: 'Dr. Smith' },
  { id: '2', date: '2024-02-10', time: '2:30 PM', doctor: 'Dr. Johnson' },
  // Add more mockup consultation data here
];

// In ConsultationScreen.js, add logic to differentiate past and upcoming consultations
const currentDate = new Date();

const upcomingConsultations = consultations.filter(consultation => {
  const consultationDate = new Date(consultation.date);
  return consultationDate >= currentDate;
});

const pastConsultations = consultations.filter(consultation => {
  const consultationDate = new Date(consultation.date);
  return consultationDate < currentDate;
});


function ConsultationScreen() {
  const formattedDate = moment(item.date).format('MMM DD, YYYY');

  return (
    <View style={styles.container}>
      <Text>Upcoming Consultations</Text>
      <FlatList
        data={consultations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Date: {item.date}</Text>
            <Text>Time: {item.time}</Text>
            <Text>Doctor: {item.doctor}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    width: '80%',
  },
});

export default ConsultationScreen;
