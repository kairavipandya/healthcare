import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import icons library

const healthcareProviders = [
  {
    id: '1',
    name: 'Dr. John Smith',
    specialty: 'Cardiologist',
    rating: 4.8,
    reviews: [
      {
        id: '1',
        user: 'User1',
        comment: 'Great doctor, very knowledgeable.',
      },
      {
        id: '2',
        user: 'User2',
        comment: 'Excellent service, highly recommended.',
      },
    ],
  },
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    specialty: 'Pediatrician',
    rating: 4.9,
    reviews: [
      {
        id: '1',
        user: 'User1',
        comment: 'Dr. Johnson is fantastic with kids!',
      },
      {
        id: '2',
        user: 'User2',
        comment: 'She\'s very caring and attentive.',
      },
    ],
  },
  {
    id: '3',
    name: 'Dr. Robert Anderson',
    specialty: 'Dermatologist',
    rating: 4.5,
    reviews: [
      {
        id: '1',
        user: 'User1',
        comment: 'Helped me with my skin issues.',
      },
      {
        id: '2',
        user: 'User2',
        comment: 'Great dermatologist, friendly staff.',
      },
    ],
  },
  // Add more providers as needed
];

const HealthcareProviderDirectoryScreen = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);

  const openProviderDetails = (provider) => {
    setSelectedProvider(provider);
  };

  const closeProviderDetails = () => {
    setSelectedProvider(null);
  };

  const getColorForRating = (rating) => {
    if (rating >= 4.5) {
      return 'green';
    } else if (rating >= 4.0) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Healthcare Providers</Text>
      {selectedProvider ? (
        <View style={styles.providerDetails}>
          <TouchableOpacity onPress={closeProviderDetails} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <Text style={styles.providerName}>{selectedProvider.name}</Text>
          <Text style={styles.providerSpecialty}>
            <FontAwesome5 name="stethoscope" size={16} color="#333333" /> {selectedProvider.specialty}
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.providerRating}>Rating:</Text>
            <Text
              style={[
                styles.ratingValue,
                { color: getColorForRating(selectedProvider.rating) },
              ]}
            >
              {selectedProvider.rating} <FontAwesome5 name="star" size={16} color="#FFD700" />
            </Text>
          </View>
          <Text style={styles.providerReviews}>Reviews:</Text>
          <FlatList
            data={selectedProvider.reviews}
            renderItem={({ item }) => (
              <View style={styles.reviewItem}>
                <Text style={styles.reviewUser}>{item.user}</Text>
                <Text style={styles.reviewComment}>{item.comment}</Text>
              </View>
            )}
            keyExtractor={(review) => review.id}
          />
        </View>
      ) : (
        <FlatList
          data={healthcareProviders}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.providerItem}
              onPress={() => openProviderDetails(item)}
            >
              <Text style={styles.providerName}>{item.name}</Text>
              <Text style={styles.providerSpecialty}>
                <FontAwesome5 name="stethoscope" size={16} color="#333333" /> {item.specialty}
              </Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.providerRating}>Rating:</Text>
                <Text
                  style={[
                    styles.ratingValue,
                    { color: getColorForRating(item.rating) },
                  ]}
                >
                  {item.rating} <FontAwesome5 name="star" size={16} color="#FFD700" />
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(provider) => provider.id}
          contentContainerStyle={styles.providerGrid}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#994843', // Set the background color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  providerDetails: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 12,
    backgroundColor: '#ffffff', // White background
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#994843',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  providerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  providerSpecialty: {
    fontSize: 16,
    color: '#333333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  providerRating: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  ratingValue: {
    fontSize: 16,
  },
  providerReviews: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  reviewItem: {
    marginTop: 5,
  },
  reviewUser: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  reviewComment: {
    fontSize: 14,
    color: '#333333',
  },
  providerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  providerItem: {
    width: '100%', // Take up the entire width
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 12,
    backgroundColor: '#ffffff', // White background
  },
});

export default HealthcareProviderDirectoryScreen;
