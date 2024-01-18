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
    <View style={[styles.container, styles.themeBackground]}> 
      <Text style={[styles.title, styles.themeText]}>Add Appointment</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
        style={[styles.input, styles.themeText]} 
      />
      <TextInput
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={text => setDate(text)}
        style={[styles.input, styles.themeText]} 
      />
      <Button title="Add" onPress={handleAddAppointment} color="#994843" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#994843', // Apply red theme background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  themeText: {
    color: '#ffffff', // Apply theme text color
  },
});

export default AddAppointmentScreen;
