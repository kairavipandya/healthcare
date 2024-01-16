import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import AppointmentScreen from './screens/AppointmentScreen';
import MedicationScreen from './screens/MedicationScreen';
import ConsultationScreen from './screens/ConsultationScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Appointments') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Medications') {
              iconName = focused ? 'pills' : 'pills-outline';
            } else if (route.name === 'Consultations') {
              iconName = focused ? 'stethoscope' : 'stethoscope-outline';
            }
            return <Icon name={iconName} type="font-awesome-5" size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Appointments" component={AppointmentScreen} />
        <Tab.Screen name="Medications" component={MedicationScreen} />
        <Tab.Screen name="Consultations" component={ConsultationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;