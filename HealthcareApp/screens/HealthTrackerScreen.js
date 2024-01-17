import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Modal, Pressable } from 'react-native';
import moment from 'moment';
import { LineChart } from 'react-native-chart-kit';

function HealthTrackerScreen() {
  const [systolicBP, setSystolicBP] = useState('');
  const [diastolicBP, setDiastolicBP] = useState('');
  const [glucoseFasting, setGlucoseFasting] = useState('');
  const [glucosePostMeal, setGlucosePostMeal] = useState('');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('lbs'); // Default to pounds
  const [exerciseType, setExerciseType] = useState('');
  const [exerciseDuration, setExerciseDuration] = useState('');
  const [exerciseIntensity, setExerciseIntensity] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [healthGoals, setHealthGoals] = useState('');
  const [notes, setNotes] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalWeightUnit, setModalWeightUnit] = useState('lbs'); // Weight unit in modal

  const weightData = [
    { date: '2024-01-01', weight: 160 },
    { date: '2024-01-02', weight: 158 },
    { date: '2024-01-03', weight: 157 },
    // Add more data points as needed
  ];

  const toggleWeightUnit = () => {
    setWeightUnit(weightUnit === 'lbs' ? 'kg' : 'lbs');
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleModalWeightUnit = () => {
    setModalWeightUnit(modalWeightUnit === 'lbs' ? 'kg' : 'lbs');
  };

  const getWeightDataInModalUnit = () => {
    if (modalWeightUnit === 'kg') {
      // Convert weight data to kg if modal unit is kg
      return weightData.map((dataPoint) => ({
        ...dataPoint,
        weight: dataPoint.weight / 2.20462, // Convert lbs to kg
      }));
    } else {
      // Weight unit is lbs in modal, no need to convert
      return weightData;
    }
  };

  const weightChartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: { borderRadius: 16 },
  };

  const sampleBloodPressureData = [
    { date: '2024-01-01', systolic: 120, diastolic: 80 },
    { date: '2024-01-02', systolic: 122, diastolic: 82 },
    { date: '2024-01-03', systolic: 118, diastolic: 78 },
    // Add more data points as needed
  ];
  
  const sampleGlucoseFasting = '95';
  const sampleGlucosePostMeal = '125';
  const sampleExerciseType = 'Running';
  const sampleExerciseDuration = '30';
  const sampleExerciseIntensity = 'Moderate';
  
  const sampleSymptoms = 'Feeling tired and dizzy today.';
  const sampleHealthGoals = 'Lose 5 pounds in the next month.';
  const sampleNotes = 'Remember to take medications with food.';
  
  // You can set these sample values in your component's state.

  const bloodPressureChartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: { borderRadius: 16 },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Health Tracker</Text>
      
      {/* Blood Pressure */}
      <Text style={styles.subheader}>Blood Pressure</Text>
      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: sampleBloodPressureData.map((dataPoint) => moment(dataPoint.date).format('MMM DD')),
            datasets: [
              {
                data: sampleBloodPressureData.map((dataPoint) => dataPoint.systolic),
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                strokeWidth: 2,
              },
              {
                data: sampleBloodPressureData.map((dataPoint) => dataPoint.diastolic),
                color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                strokeWidth: 2,
              },
            ],
          }}
          width={320}
          height={220}
          chartConfig={bloodPressureChartConfig}
          withInnerLines={false}
          withOuterLines={false}
        />
      </View>

      {/* Blood Sugar Levels */}
      <Text style={styles.subheader}>Blood Sugar Levels (Glucose)</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Fasting (mg/dL)"
          style={styles.input}
          keyboardType="numeric"
          value={glucoseFasting}
          onChangeText={setGlucoseFasting}
        />
        <TextInput
          placeholder="Post-Meal (mg/dL)"
          style={styles.input}
          keyboardType="numeric"
          value={glucosePostMeal}
          onChangeText={setGlucosePostMeal}
        />
      </View>

{/* Weight */}
<Text style={styles.subheader}>Weight</Text>
      <View style={styles.weightContainer}>
        <TextInput
          placeholder={`Weight (${weightUnit})`}
          style={styles.weightInput}
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <Pressable style={styles.unitToggle} onPress={toggleWeightUnit}>
          <Text style={styles.unitText}>{weightUnit === 'lbs' ? 'lbs' : 'kg'}</Text>
        </Pressable>
      </View>
      <Button title="View Weight History" onPress={openModal} />


      {/* Exercise Routines */}
      <Text style={styles.subheader}>Exercise Routines</Text>
      <TextInput
        placeholder="Type of Exercise"
        style={styles.input}
        value={exerciseType}
        onChangeText={setExerciseType}
      />
      <TextInput
        placeholder="Duration (minutes)"
        style={styles.input}
        keyboardType="numeric"
        value={exerciseDuration}
        onChangeText={setExerciseDuration}
      />
      <TextInput
        placeholder="Intensity (Low, Moderate, High)"
        style={styles.input}
        value={exerciseIntensity}
        onChangeText={setExerciseIntensity}
      />

      
      {/* Symptoms */}
      <Text style={styles.subheader}>Symptoms</Text>
      <TextInput
        placeholder="Record Symptoms"
        style={styles.input}
        multiline
        numberOfLines={3}
        value={symptoms}
        onChangeText={setSymptoms}
      />

      {/* Health Goals */}
      <Text style={styles.subheader}>Health Goals</Text>
      <TextInput
        placeholder="Set Health Goals"
        style={styles.input}
        multiline
        numberOfLines={3}
        value={healthGoals}
        onChangeText={setHealthGoals}
      />


      {/* Weight Modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Weight History</Text>
          <View style={styles.modalUnitToggle}>
            <Button title={`Switch to ${modalWeightUnit === 'lbs' ? 'kg' : 'lbs'}`} onPress={toggleModalWeightUnit} />
          </View>
          <LineChart
            data={{
              labels: getWeightDataInModalUnit().map((dataPoint) => moment(dataPoint.date).format('MMM DD')),
              datasets: [
                {
                  data: getWeightDataInModalUnit().map((dataPoint) => dataPoint.weight),
                  color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                  strokeWidth: 2,
                },
              ],
            }}
            width={320}
            height={220}
            chartConfig={weightChartConfig}
            withInnerLines={false}
            withOuterLines={false}
          />
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#994843', // Background color changed to #994843
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', // Text color changed to white
    marginBottom: 20,
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff', // Text color changed to white
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  weightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  weightInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  unitToggle: {
    backgroundColor: '#3949ab',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  unitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  modalUnitToggle: {
    marginBottom: 16,
  },
});

export default HealthTrackerScreen;
