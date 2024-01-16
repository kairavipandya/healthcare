import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function EditAppointmentScreen({ route, navigation }) {
  const { appointment } = route.params;
  const [title, setTitle] = useState(appointment.title);
  const [date, setDate] = useState(appointment.date);

  const handleEditAppointment = () => {
    // Create an updated appointment object
    const updatedAppointment = {
      ...appointment,
      title,
      date,
    };
    
    // Pass the updated appointment back to the previous screen
    navigation.navigate('Appointments', { updatedAppointment });
  };

  return (
    <View style={styles.container}>
      <Text>Edit Appointment</Text>
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
      <Button title="Save" onPress={handleEditAppointment} />
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

export default EditAppointmentScreen;
