import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ScrollView, Modal, TouchableOpacity, Button } from 'react-native';

function MedicationScreen() {
  const medications = [
    { id: '1', name: 'Aspirin', dosage: '100mg', frequency: 'Once a day', reason: 'Pain relief', doctor: 'Dr. Smith' },
    { id: '2', name: 'Ibuprofen', dosage: '200mg', frequency: 'Twice a day', reason: 'Inflammation', doctor: 'Dr. Johnson' },
    { id: '3', name: 'Paracetamol', dosage: '500mg', frequency: 'As needed', reason: 'Fever', doctor: 'Dr. Davis' },
    { id: '4', name: 'Lisinopril', dosage: '10mg', frequency: 'Once a day', reason: 'Blood pressure', doctor: 'Dr. Wilson' },
    { id: '5', name: 'Atorvastatin', dosage: '20mg', frequency: 'Once a day', reason: 'Cholesterol', doctor: 'Dr. Martinez' },
    // Add more medications as needed
  ];

  const [selectedMedication, setSelectedMedication] = useState(null);
  const [refillModalVisible, setRefillModalVisible] = useState(false);

  const openMedicationModal = (medication) => {
    setSelectedMedication(medication);
  };

  const closeMedicationModal = () => {
    setSelectedMedication(null);
  };

  const requestRefill = () => {
    // Implement refill request logic here
    setRefillModalVisible(false);
    // You can display a confirmation message or perform an API call for refill request
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Medications</Text>
      <ScrollView>
        <View style={styles.medicationGrid}>
          {medications.map(item => (
            <TouchableOpacity
              style={styles.item}
              key={item.id}
              onPress={() => openMedicationModal(item)}
            >
              <Text style={styles.medicationName}>Name: {item.name}</Text>
              <Text style={styles.medicationDetails}>Dosage: {item.dosage}</Text>
              <Text style={styles.medicationDetails}>Frequency: {item.frequency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Modal for Medication Details */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={!!selectedMedication}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Medication Details</Text>
          {selectedMedication && (
            <View>
              <Text style={styles.modalText}>Name: {selectedMedication.name}</Text>
              <Text style={styles.modalText}>Dosage: {selectedMedication.dosage}</Text>
              <Text style={styles.modalText}>Frequency: {selectedMedication.frequency}</Text>
              <Text style={styles.modalText}>Reason: {selectedMedication.reason}</Text>
              <Text style={styles.modalText}>Doctor: {selectedMedication.doctor}</Text>
            </View>
          )}
          <TouchableOpacity onPress={closeMedicationModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRefillModalVisible(true)} style={styles.refillButton}>
            <Text style={styles.refillButtonText}>Request Refill</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Modal for Refill Request */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={refillModalVisible}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Request Refill</Text>
          <Text style={styles.modalText}>
            You are requesting a refill for {selectedMedication ? selectedMedication.name : ''}.
          </Text>
          <Text style={styles.modalText}>
            Please contact your pharmacy for further assistance.
          </Text>
          <TouchableOpacity onPress={() => setRefillModalVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={requestRefill} style={styles.refillButton}>
            <Text style={styles.refillButtonText}>Confirm Request</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#994843',
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  medicationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    flexBasis: '48%', // Two items per row with a small gap
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#994843',
    borderRadius: 12,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#994843',
    marginBottom: 8,
  },
  medicationDetails: {
    fontSize: 16,
    color: '#333333',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#994843',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 12,
  },
  closeButton: {
    marginTop: 16,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#994843',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  refillButton: {
    marginTop: 16,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  refillButtonText: {
    color: '#994843',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MedicationScreen;
