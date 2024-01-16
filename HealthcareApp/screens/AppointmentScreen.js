import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const appointments = [
  { id: '1', title: 'Dental Checkup', date: '2024-01-20' },
  { id: '2', title: 'General Consultation', date: '2024-01-22' },
  // Add more mockup data here
];

function AppointmentScreen({ navigation }) {
  return (
    <View style={styles.container}>
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
      <Button
        title="Add Appointment"
        onPress={() => {/* Add navigation or functionality to add appointments */}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
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