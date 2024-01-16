import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function AddAppointmentScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleAddAppointment = () => {
    // Create a new appointment object with a unique ID (you can use a library like `uuid` for this)
    const newAppointment = {
      id: Math.random().toString(36).substring(7),
      title,
      date,
    };
    
    // Pass the new appointment back to the previous screen
    navigation.navigate('Appointments', { newAppointment });
  };

  return (
    <View style={styles.container}>
      <Text>Add Appointment</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={text => setDate(text)}
        style={styles.input}
      />
      <Button title="Add" onPress={handleAddAppointment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default AddAppointmentScreen;
