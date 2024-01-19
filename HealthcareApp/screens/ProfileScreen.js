import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';

function ProfileScreen() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [profileImage, setProfileImage] = useState(null);
  const [emergencyContact, setEmergencyContact] = useState('Jane Doe (123-555-7890)');
  const [medicalAlert, setMedicalAlert] = useState('Allergic to Penicillin');

  const [editMode, setEditMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const saveProfile = () => {
    setEditMode(false);
    // Save profile information to your backend or storage
  };

  const openImagePicker = () => {
    // Implement image picker logic here to allow users to upload a profile picture
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={openImagePicker}>
          <Image
            source={profileImage ? { uri: profileImage } : require('./default-profile-image.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>{name}</Text>
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.label}>Name</Text>
        {editMode ? (
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
        ) : (
          <Text style={styles.infoText}>{name}</Text>
        )}

        <Text style={styles.label}>Email</Text>
        <Text style={styles.infoText}>{email}</Text>

        <Text style={styles.label}>Phone</Text>
        {editMode ? (
          <TextInput
            value={phone}
            onChangeText={(text) => setPhone(text)}
            style={styles.input}
          />
        ) : (
          <Text style={styles.infoText}>{phone}</Text>
        )}

        {editMode ? (
          <Button title="Save" onPress={saveProfile} />
        ) : (
          <Button title="Edit Profile" onPress={() => setEditMode(true)} />
        )}
      </View>

      <View style={styles.emergencyContact}>
        <Text style={styles.label}>Emergency Contact</Text>
        <Text style={styles.infoText}>{emergencyContact}</Text>
        {editMode && (
          <TextInput
            placeholder="Enter emergency contact"
            value={emergencyContact}
            onChangeText={(text) => setEmergencyContact(text)}
            style={styles.input}
          />
        )}

        <Text style={styles.label}>Medical Alert</Text>
        <Text style={styles.infoText}>{medicalAlert}</Text>
        {editMode && (
          <TextInput
            placeholder="Enter medical alert details"
            value={medicalAlert}
            onChangeText={(text) => setMedicalAlert(text)}
            style={styles.input}
          />
        )}
      </View>

      {editMode && (
        <View style={styles.editButtons}>
          <Button title="Cancel" onPress={() => setEditMode(false)} color="red" />
          <Button title="Save" onPress={saveProfile} />
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <View style={styles.container}>
          {/* Add emergency contact and medical alert input fields here */}
          {/* Implement the logic for saving emergency contact and medical alert */}
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      {editMode || (
        <Button title="Edit Emergency Contact & Medical Alert" onPress={() => setModalVisible(true)} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#994843',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
  },
  profileInfo: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#994843',
  },
  infoText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 8,
  },
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  emergencyContact: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
  },
});

export default ProfileScreen;
