import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

function MedicationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Medication Tracking Screen</Text>
      <Button onPress={() => navigation.navigate('Consultations')}>
        <Text>Go to Consultations</Text>
      </Button>
    </View>
  );
}

export default MedicationScreen;
