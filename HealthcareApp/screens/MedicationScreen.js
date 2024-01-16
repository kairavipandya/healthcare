import React from 'react';
import { View, Text, Button } from 'react-native';

function MedicationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Medication Tracking Screen</Text>
      <Button
        title="Go to Consultations"
        onPress={() => navigation.navigate('Consultations')}
      />
    </View>
  );
}

export default MedicationScreen;
