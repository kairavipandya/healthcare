import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import AppointmentScreen from './screens/AppointmentScreen';
import MedicationScreen from './screens/MedicationScreen';
import ConsultationScreen from './screens/ConsultationScreen';
import HealthTrackerScreen from './screens/HealthTrackerScreen';
import AddAppointmentScreen from './screens/AddAppointmentScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AppointmentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Appointments"
        component={AppointmentScreen}
        options={{
          title: 'Appointments', // Set the header title for Appointments screen
          headerShown: false, // Hide the header for AddAppointment screen

        }}
      />
      <Stack.Screen
        name="AddAppointment"
        component={AddAppointmentScreen}
        options={{
          title: 'Add Appointment', // Set the header title for AddAppointment screen
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Appointments') {
              iconName = 'calendar';
            } else if (route.name === 'Medications') {
              iconName = 'pills';
            } else if (route.name === 'Consultations') {
              iconName = 'stethoscope';
            } else if (route.name === 'Health Tracker') {
              iconName = 'heart';
            }
            return <Icon name={iconName} type="font-awesome-5" size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: true,
          style: {
            display: 'flex',
          },
        }}
      >
        <Tab.Screen name="Appointments" component={AppointmentStack} />
        <Tab.Screen name="Medications" component={MedicationScreen} />
        <Tab.Screen name="Consultations" component={ConsultationScreen} />
        <Tab.Screen name="Health Tracker" component={HealthTrackerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
