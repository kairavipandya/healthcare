import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'; // Import SafeAreaView
import moment from 'moment';

const consultations = [
  { id: '1', date: '2024-01-15', time: '10:00 AM', doctor: 'Dr. Smith' },
  { id: '2', date: '2024-02-10', time: '2:30 PM', doctor: 'Dr. Johnson' },
  // Add more mockup consultation data here
];

function ConsultationScreen() {
  return (
    <SafeAreaView style={styles.container}> {/* Use SafeAreaView */}
      <Text>Upcoming Consultations</Text>
      <FlatList
        data={consultations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Date: {moment(item.date).format('MMM DD, YYYY')}</Text>
            <Text>Time: {item.time}</Text>
            <Text>Doctor: {item.doctor}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20, // Adjust the spacing as needed
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
