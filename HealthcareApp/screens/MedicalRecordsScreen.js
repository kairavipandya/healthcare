import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ScrollView, Modal, TouchableOpacity, Button } from 'react-native';

const medicalRecords = [
  { id: '1', date: '2024-01-10', diagnosis: 'Common Cold', testResult: 'Negative', treatment: 'Rest and hydration' },
  { id: '2', date: '2024-02-15', diagnosis: 'Allergic Reaction', testResult: 'Positive', treatment: 'Antihistamines' },
  { id: '3', date: '2024-03-20', diagnosis: 'Influenza', testResult: 'Positive', treatment: 'Antiviral medication' },
  // Add more medical records as needed
];

function MedicalRecordsScreen() {
  const [selectedRecord, setSelectedRecord] = useState(null);

  const openRecordModal = (record) => {
    setSelectedRecord(record);
  };

  const closeRecordModal = () => {
    setSelectedRecord(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Medical Records</Text>
      <ScrollView>
        <View style={styles.medicalRecordsGrid}>
          {medicalRecords.map((record) => (
            <TouchableOpacity
              style={styles.item}
              key={record.id}
              onPress={() => openRecordModal(record)}
            >
              <Text style={styles.date}>Date: {record.date}</Text>
              <Text style={styles.diagnosis}>Diagnosis: {record.diagnosis}</Text>
              <Text style={styles.testResult}>Test Result: {record.testResult}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.marginBottom} /> {/* Add some margin at the bottom */}
      </ScrollView>

      {/* Modal for Medical Record Details */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={!!selectedRecord}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Medical Record Details</Text>
          {selectedRecord && (
            <View>
              <Text style={styles.modalText}>Date: {selectedRecord.date}</Text>
              <Text style={styles.modalText}>Diagnosis: {selectedRecord.diagnosis}</Text>
              <Text style={styles.modalText}>Test Result: {selectedRecord.testResult}</Text>
              <Text style={styles.modalText}>Treatment: {selectedRecord.treatment}</Text>
            </View>
          )}
          <TouchableOpacity onPress={closeRecordModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#994843',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  medicalRecordsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10, // Add horizontal padding
  },
  item: {
    flexBasis: '48%', // Two items per row with a small gap
    padding: 20,
    marginBottom: 40,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#994843',
    borderRadius: 12,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#994843',
  },
  diagnosis: {
    fontSize: 16,
    color: '#333333',
  },
  testResult: {
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
    textAlign: 'center',
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
  marginBottom: {
    marginBottom: 20, // Add some margin at the bottom
  },
});

export default MedicalRecordsScreen;
