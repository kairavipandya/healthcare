# Health Care Management

This React Native application serves as a comprehensive healthcare management tool, providing functionalities like appointments, medication tracking, consultations, health tracking, medical records management, profile management, and a healthcare provider directory.

## Features

1. **Appointment Management**: Schedule, view, and manage medical appointments.
2. **Medication Tracking**: Keep track of medications, dosages, and schedules.
3. **Consultation Records**: Access and manage past and upcoming consultations.
4. **Health Tracker**: Monitor vital health metrics like blood pressure, glucose levels, and weight.
5. **Medical Records**: View and manage personal medical records.
6. **Profile Management**: Update personal information, emergency contacts, and medical alerts.
7. **Healthcare Provider Directory**: Browse and get details of healthcare providers.

## Installation

To set up the app, you need to have Node.js and React Native installed. After cloning the repository, navigate to the project directory and run:

```bash
npm install
```

## Running the App

To start the application, run:

```bash
npx react-native run-android
# or
npx react-native run-ios
```

Ensure you have an emulator running or a device connected for the app to launch.

## Structure

The app consists of several screens, each handling different aspects of healthcare management:

- `AppointmentScreen`: Manage and view appointments.
- `MedicationScreen`: Track and manage medications.
- `ConsultationScreen`: Access consultation records.
- `HealthTrackerScreen`: Monitor and record health metrics.
- `MedicalRecordsScreen`: View medical records.
- `ProfileScreen`: Manage user profile and emergency details.
- `HealthcareProviderDirectoryScreen`: Browse healthcare providers.

## Navigation

The app uses React Navigation with a bottom tab navigator for easy access to different sections.

## External Dependencies

- `react-navigation`: For implementing navigation.
- `moment`: To handle dates.
- `react-native-chart-kit`: For displaying charts in the Health Tracker.
- `react-native-calendars`: For the calendar view in appointments.

## Customization

You can customize the app by modifying the styles in the `StyleSheet` objects or by adding new features as per your requirement.

## Contributing

Contributions to enhance the app are welcome. Please fork the repository and submit a pull request with your changes.

---

**Note**: This app is a prototype and should be further developed and tested before being used in a real-world healthcare setting.
