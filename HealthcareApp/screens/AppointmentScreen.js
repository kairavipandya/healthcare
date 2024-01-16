import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Calendar, Agenda } from 'react-native-calendars';

const additionalAppointments = [
  { id: '3', title: 'Eye Examination', date: '2024-01-25', doctor: 'Dr. Anderson', notes: 'Check vision' },
  { id: '4', title: 'Physical Checkup', date: '2024-02-05', doctor: 'Dr. Wilson', notes: 'General health assessment' },
  { id: '5', title: 'Dermatology Consultation', date: '2024-02-10', doctor: 'Dr. Martinez', notes: 'Skin issues' },
  { id: '6', title: 'Orthopedic Appointment', date: '2024-02-18', doctor: 'Dr. Davis', notes: 'Bone and joint pain' },
  { id: '7', title: 'Pediatric Checkup', date: '2024-03-02', doctor: 'Dr. Moore', notes: "Child's health" },
  { id: '8', title: 'Psychiatry Consultation', date: '2024-03-15', doctor: 'Dr. Robinson', notes: 'Mental health assessment' },
];

const allAppointments = [...additionalAppointments];

function AppointmentScreen({ navigation }) {
  const [appointments, setAppointments] = useState(allAppointments);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [rescheduleModalVisible, setRescheduleModalVisible] = useState(false); // State for rescheduling modal
  const [newDate, setNewDate] = useState(null);

  // Calendar settings
  const calendarTheme = {
    backgroundColor: '#ffffff', // Calendar background color
    calendarBackground: '#ffffff', // Calendar container background color
    textSectionTitleColor: '#994843', // Calendar title text color
    selectedDayBackgroundColor: '#994843', // Selected date background color
    selectedDayTextColor: '#ffffff', // Selected date text color
    todayTextColor: '#994843', // Today's date text color
    dayTextColor: '#333333', // Default day text color
    textDisabledColor: '#dcdcdc', // Disabled day text color
    arrowColor: '#994843', // Arrow icon color
    monthTextColor: '#994843', // Month text color
  };

  const openConfirmationModal = (id) => {
    setSelectedAppointment(id);
    setModalVisible(true);
  };

  const closeConfirmationModal = () => {
    setSelectedAppointment(null);
    setModalVisible(false);
  };

  const openRescheduleModal = () => {
    setRescheduleModalVisible(true);
    setModalVisible(false);
  };

  const closeRescheduleModal = () => {
    setRescheduleModalVisible(false);
    setModalVisible(true);
  };

  const rescheduleAppointment = () => {
    if (selectedAppointment && newDate) {
      const updatedAppointments = appointments.map(appointment => {
        if (appointment.id === selectedAppointment.id) {
          return { ...appointment, date: newDate };
        }
        return appointment;
      });
      setAppointments(updatedAppointments);
      setNewDate(null);
      setRescheduleModalVisible(false);
      setModalVisible(true);
    }
  };

  const deleteAppointment = () => {
    if (selectedAppointment) {
      const updatedAppointments = appointments.filter(appointment => appointment.id !== selectedAppointment.id);
      setAppointments(updatedAppointments);
      setSelectedAppointment(null);
      setModalVisible(false);
    }
  };

  return (
    <View style={[styles.container, styles.themeBackground]}>
      <Button
        title="Open Calendar"
        onPress={() => setCalendarModalVisible(true)}
        color="#994843"
      />

      {/* Calendar View */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={calendarModalVisible}
      >
        <View style={[styles.container, styles.themeBackground]}>
          <Button
            title="Close Calendar"
            onPress={() => setCalendarModalVisible(false)}
            color="#994843"
          />
          <Calendar
            theme={calendarTheme} // Apply calendar settings
          />
        </View>
      </Modal>

      {/* List View */}
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, styles.themeBackground]}
            onPress={() => {
              setSelectedAppointment(item);
              setModalVisible(true);
            }}
          >
            <Text style={[styles.title, styles.themeText]}>{item.title}</Text>
            <Text style={[styles.date, styles.themeText]}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />


      {/* Modal for Appointment Details */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <View style={[styles.container, styles.themeBackground]}>
          <View style={styles.modalHeader}>
            <Text style={[styles.modalTitle, styles.themeText]}>Appointment Details</Text>
            <TouchableOpacity onPress={closeConfirmationModal}>
              <Text style={[styles.closeButton, styles.themeText]}>Close</Text>
            </TouchableOpacity>
          </View>
          {selectedAppointment && (
            <View>
              <Text style={[styles.detailText, styles.themeText]}>Title: {selectedAppointment.title}</Text>
              <Text style={[styles.detailText, styles.themeText]}>Date: {selectedAppointment.date}</Text>
              <Text style={[styles.detailText, styles.themeText]}>Doctor: {selectedAppointment.doctor}</Text>
              <Text style={[styles.detailText, styles.themeText]}>Notes: {selectedAppointment.notes}</Text>
            </View>
          )}
          <TouchableOpacity onPress={openRescheduleModal} style={styles.rescheduleButton}>
            <Text style={[styles.rescheduleText, styles.themeText]}>Reschedule</Text>
          </TouchableOpacity>
          {selectedAppointment && (
            <TouchableOpacity onPress={deleteAppointment} style={styles.deleteButton}>
              <Text style={[styles.deleteText, styles.themeText]}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      </Modal>

      {/* Modal for Rescheduling */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={rescheduleModalVisible}
      >
        <View style={[styles.container, styles.themeBackground]}>
          <View style={styles.modalHeader}>
            <Text style={[styles.modalTitle, styles.themeText]}>Reschedule Appointment</Text>
            <TouchableOpacity onPress={closeRescheduleModal}>
              <Text style={[styles.closeButton, styles.themeText]}>Close</Text>
            </TouchableOpacity>
          </View>
          <Calendar
            theme={calendarTheme} // Apply calendar settings
            onDayPress={(day) => setNewDate(day.dateString)}
          />
          <TouchableOpacity onPress={rescheduleAppointment} style={styles.rescheduleConfirmButton}>
            <Text style={[styles.rescheduleConfirmText, styles.themeText]}>Confirm Reschedule</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Button
        title="Add Appointment"
        onPress={() => navigation.navigate('AddAppointment')}
        color="#994843"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 16,
  },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 8,
  },
  themeBackground: {
    backgroundColor: '#994843',
  },
  themeText: {
    color: '#ffffff',
  },
  closeButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteButton: {
    marginTop: 16,
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  deleteText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rescheduleButton: {
    marginTop: 16,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#994843',
    borderRadius: 5,
  },
  rescheduleText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rescheduleConfirmButton: {
    marginTop: 16,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#994843',
    borderRadius: 5,
  },
  rescheduleConfirmText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppointmentScreen;
