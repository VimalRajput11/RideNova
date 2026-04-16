import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const palette = {
  primary: "#0058bb",
  onPrimary: "#ffffff",
  surface: "#f5f6f7",
  onSurface: "#2c2f30",
  onSurfaceVariant: "#595c5d",
  surfaceContainerLowest: "#ffffff",
  success: "#10b981", // bright green for success
};

const BookingSuccessScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={palette.success} />
      
      <View style={styles.container}>
        {/* Animated-like Success Graphic */}
        <View style={styles.iconCircle}>
          <MaterialIcons name="check" size={80} color={palette.success} />
        </View>

        {/* Text Content */}
        <Text style={styles.title}>Booking Confirmed!</Text>
        <Text style={styles.subtitle}>
          Your seat has been reserved successfully. You can manage your trip details directly from the My Rides menu workspace.
        </Text>

        {/* Informational Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <MaterialIcons name="event-seat" size={20} color={palette.onSurfaceVariant} />
            <Text style={styles.infoText}>1 Seat Confirmed</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <MaterialIcons name="confirmation-number" size={20} color={palette.onSurfaceVariant} />
            <Text style={styles.infoText}>Booking ID: #RN-8942X</Text>
          </View>
        </View>
      </View>

      {/* Bottom Actions */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.primaryButton}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('My Ride')}
        >
          <Text style={styles.primaryButtonText}>View My Rides</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.secondaryButton}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('HomeMain')}
        >
          <Text style={styles.secondaryButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.success, // We transition from green success to white
  },
  container: {
    flex: 1,
    backgroundColor: palette.surface,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 64,
  },
  iconCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 4,
    borderColor: 'rgba(16, 185, 129, 0.2)',
  },
  title: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 32,
    fontWeight: '900',
    color: palette.onSurface,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: palette.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  infoCard: {
    width: '100%',
    backgroundColor: palette.surfaceContainerLowest,
    borderRadius: 24,
    padding: 24,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 24,
    elevation: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '700',
    color: palette.onSurface,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    marginVertical: 16,
  },
  bottomContainer: {
    backgroundColor: palette.surface,
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 16,
  },
  primaryButton: {
    backgroundColor: palette.primary,
    paddingVertical: 18,
    borderRadius: 999,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: palette.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 6,
  },
  primaryButtonText: {
    color: palette.onPrimary,
    fontSize: 16,
    fontWeight: '800',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 18,
    borderRadius: 999,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: palette.primary,
    fontSize: 16,
    fontWeight: '800',
  }
});

export default BookingSuccessScreen;
