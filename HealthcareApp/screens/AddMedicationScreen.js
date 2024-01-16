// Create a new file AddMedicationScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';

function AddMedicationScreen({ navigation }) {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');


// Inside handleAddMedication function, add code to save the medication
const handleAddMedication = async () => {
  // Validate input and handle errors
  if (!name || !dosage || !frequency) {
    // Handle validation error (e.g., show a message)
    return;
  }

  // Create a new medication object
  const newMedication = { id: Date.now().toString(), name, dosage, frequency };

  // Save the new medication to AsyncStorage
  try {
    const storedMedications = await AsyncStorage.getItem('medications');
    const medicationsArray = storedMedications ? JSON.parse(storedMedications) : [];
    medicationsArray.push(newMedication);
    await AsyncStorage.setItem('medications', JSON.stringify(medicationsArray));
  } catch (error) {
    // Handle AsyncStorage error
    console.error(error);
  }

  // Navigate back to the MedicationScreen
  navigation.goBack();
};


  return (
    <View style={styles.container}>
      <Text>Add New Medication</Text>
      <TextInput
        placeholder="Medication Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Dosage"
        value={dosage}
        onChangeText={setDosage}
        style={styles.input}
      />
      <TextInput
        placeholder="Frequency"
        value={frequency}
        onChangeText={setFrequency}
        style={styles.input}
      />
      <Button title="Add Medication" onPress={handleAddMedication} />
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

export default AddMedicationScreen;
