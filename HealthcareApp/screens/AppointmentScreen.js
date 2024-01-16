import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const initialAppointments = [
  { id: '1', title: 'Dental Checkup', date: '2024-01-20' },
  { id: '2', title: 'General Consultation', date: '2024-01-22' },
  // Add more mockup data here
];

function AppointmentScreen({ navigation }) {
  const [appointments, setAppointments] = useState(initialAppointments);

  const confirmDeleteAppointment = (id) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this appointment?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteAppointment(id),
          style: 'destructive', // This style will make the text color red for the "Delete" button
        },
      ],
      { cancelable: true }
    );
  };

  const deleteAppointment = (id) => {
    const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppointments(updatedAppointments);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={appointments.sort((a, b) => a.date.localeCompare(b.date))}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('EditAppointment', { appointment: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.date}</Text>
            <TouchableOpacity onPress={() => confirmDeleteAppointment(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Add Appointment"
        onPress={() => navigation.navigate('AddAppointment')}
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
    height: 74, // Increased height to accommodate the delete button
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default AppointmentScreen;
