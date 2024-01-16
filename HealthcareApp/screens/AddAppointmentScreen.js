// AddAppointmentScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

function AddAppointmentScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleAddAppointment = () => {
    // Implement code to add the appointment to your appointments array
    // Update the state or use a state management library
    // Then, navigate back to the AppointmentScreen
    // Don't forget to validate user input!
  };

  return (
    <View style={styles.container}>
      <Text>Add New Appointment</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <Button title="Add Appointment" onPress={handleAddAppointment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
  },
});

export default AddAppointmentScreen;
