import React from 'react';
import { View, Text, Button } from 'react-native';

function AppointmentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Appointment Screen</Text>
      <Button
        title="Go to Medications"
        onPress={() => navigation.navigate('Medications')}
      />
    </View>
  );
}

export default AppointmentScreen;
