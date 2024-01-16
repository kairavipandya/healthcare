import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppointmentScreen from './screens/AppointmentScreen';
import MedicationScreen from './screens/MedicationScreen';
import ConsultationScreen from './screens/ConsultationScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Appointments">
        <Stack.Screen name="Appointments" component={AppointmentScreen} />
        <Stack.Screen name="Medications" component={MedicationScreen} />
        <Stack.Screen name="Consultations" component={ConsultationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
