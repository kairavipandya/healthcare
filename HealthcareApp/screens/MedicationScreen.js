import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import moment from 'moment'; // Import Moment.js

function MedicationScreen({ navigation }) {
  // Initialize the medications state
  const [medications, setMedications] = useState([]);

  // Load medications from AsyncStorage
  useEffect(() => {
    const loadMedications = async () => {
      try {
        const storedMedications = await AsyncStorage.getItem('medications');
        const medicationsArray = storedMedications ? JSON.parse(storedMedications) : [];
        setMedications(medicationsArray);
      } catch (error) {
        // Handle AsyncStorage error
        console.error(error);
      }
    };

    loadMedications();
  }, []);

  const formattedDate = moment(item.date).format('MMM DD, YYYY');


  return (
    <View style={styles.container}>
      <FlatList
        data={medications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>Dosage: {item.dosage}</Text>
            <Text>Frequency: {item.frequency}</Text>
          </View>
        )}
      />
      <Button
        title="Add Medication"
        onPress={() => navigation.navigate('AddMedication')}
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
    height: 100, // Adjust the item height as needed
  },
  title: {
    fontWeight: 'bold',
  },
});

export default MedicationScreen;
