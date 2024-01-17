import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ScrollView, Modal, TouchableOpacity, Button } from 'react-native';
import moment from 'moment';

const consultations = [
  { id: '1', date: '2024-01-15', time: '10:00 AM', doctor: 'Dr. Smith', reason: 'Checkup' },
  { id: '2', date: '2024-02-10', time: '2:30 PM', doctor: 'Dr. Johnson', reason: 'Follow-up' },
  { id: '3', date: '2024-02-20', time: '3:45 PM', doctor: 'Dr. Davis', reason: 'Treatment' },
  { id: '4', date: '2024-03-05', time: '11:15 AM', doctor: 'Dr. Wilson', reason: 'Consultation' },
  { id: '5', date: '2024-03-20', time: '9:30 AM', doctor: 'Dr. Martinez', reason: 'Checkup' },
  { id: '6', date: '2024-04-10', time: '4:00 PM', doctor: 'Dr. Moore', reason: 'Follow-up' },
  // Add more mockup consultation data here
];

function ConsultationScreen() {
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [showPastConsultations, setShowPastConsultations] = useState(false);

  const openConsultationModal = (consultation) => {
    setSelectedConsultation(consultation);
  };

  const closeConsultationModal = () => {
    setSelectedConsultation(null);
  };

  const togglePastConsultations = () => {
    setShowPastConsultations(!showPastConsultations);
  };

  const filteredConsultations = showPastConsultations
    ? consultations
    : consultations.filter(consultation => moment(consultation.date).isSameOrAfter(moment()));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Consultations</Text>
      <Button
        title={showPastConsultations ? 'Hide Past Consultations' : 'Show Past Consultations'}
        onPress={togglePastConsultations}
        color="#994843"
      />
      <ScrollView>
        <View style={styles.consultationGrid}>
          {filteredConsultations.map((item) => (
            <TouchableOpacity
              style={styles.item}
              key={item.id}
              onPress={() => openConsultationModal(item)}
            >
              <Text style={styles.date}>{moment(item.date).format('MMM DD, YYYY')}</Text>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.doctor}>Doctor: {item.doctor}</Text>
              <Text style={styles.reason}>Reason: {item.reason}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.marginBottom} /> {/* Add some margin at the bottom */}
      </ScrollView>

      {/* Modal for Consultation Details */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={!!selectedConsultation}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Consultation Details</Text>
          {selectedConsultation && (
            <View>
              <Text style={styles.modalText}>Date: {moment(selectedConsultation.date).format('MMM DD, YYYY')}</Text>
              <Text style={styles.modalText}>Time: {selectedConsultation.time}</Text>
              <Text style={styles.modalText}>Doctor: {selectedConsultation.doctor}</Text>
              <Text style={styles.modalText}>Reason: {selectedConsultation.reason}</Text>
            </View>
          )}
          <TouchableOpacity onPress={closeConsultationModal} style={styles.closeButton}>
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
  consultationGrid: {
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
  time: {
    fontSize: 16,
    color: '#333333',
  },
  doctor: {
    fontSize: 16,
    color: '#333333',
  },
  reason: {
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

export default ConsultationScreen;
