import React from 'react';
import { 
  View, Text, StyleSheet, ScrollView, 
  TouchableOpacity, Image, StatusBar, Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const palette = {
  primary: "#0058bb",
  primaryDim: "#004ca4",
  primaryContainer: "#6c9fff",
  onPrimary: "#f0f2ff",
  onPrimaryContainer: "#00214f",
  secondary: "#3853b7",
  tertiary: "#883c93",
  tertiaryContainer: "#f39cfb",
  surface: "#f5f6f7",
  onSurface: "#2c2f30",
  onSurfaceVariant: "#595c5d",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#eff1f2",
  surfaceContainer: "#e6e8ea",
  surfaceContainerHigh: "#e0e3e4",
  surfaceContainerHighest: "#dadddf",
  outline: "#757778",
  outlineVariant: "#abadae",
  error: "#b31b25",
  success: "#2e7d32",
};

const ManageRideScreen = ({ navigation, route }) => {
  // Mock data for the ride being managed
  const rideData = {
    id: 'R123',
    status: 'Confirmed',
    date: 'Oct 24, 09:00',
    from: 'New Delhi Railway Station',
    fromAddr: 'Paharganj side, Near Gate 1',
    to: 'Chhatrapati Shivaji Terminus',
    toAddr: 'Main Entrance',
    driver: {
      name: 'Amit Kumar',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDknnaYZLL085wouOcmJ4T-saKnQF2lU7-40vYw36Fv7RW0ldwq7R3sJWe2qjRRY6PtFfYPk29BZmkglBXNZ_mb6-O7CFIfvlsDOSKp7n7d8TyTgFKUW_rW6uedGsxGrjJoOcHrJGwLMyNT_JlD4_mc3olB0YPBrbBMBY4Y9v2-FllfPKOvz7qqnVGzvHJbqWr6HH8Wg2bhnNRpVDsSEH6capnz-Hi7dB95klD01pNLotq2-u0dJbrTPXjNPONF8QHvRzHho64Adkb3',
      rating: 4.9,
      trips: 156
    },
    car: {
      name: 'Maruti Suzuki Swift',
      color: 'Blue',
      plate: 'DL 04 CP 9876'
    },
    seats: 1,
    price: 450
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={palette.surface} />

      {/* Solid Header matching My Ride style */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color={palette.onSurface} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Booking</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Status Card */}
        <View style={styles.statusCard}>
          <View style={styles.statusInfo}>
            <View style={styles.statusBadge}>
              <MaterialIcons name="verified" size={16} color={palette.primary} />
              <Text style={styles.statusText}>{rideData.status}</Text>
            </View>
            <Text style={styles.bookingId}>Booking ID: {rideData.id}</Text>
          </View>
          <Text style={styles.dateText}>{rideData.date}</Text>
        </View>

        {/* Route Card */}
        <View style={styles.card}>
          <View style={styles.routeHeader}>
            <Text style={styles.cardTitle}>Route Information</Text>
            <TouchableOpacity>
              <Text style={styles.actionLink}>View Map</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.routeRow}>
            <View style={styles.timeline}>
              <View style={styles.dotOutline} />
              <View style={styles.line} />
              <View style={styles.dotFilled} />
            </View>
            <View style={styles.routeDetails}>
              <View style={styles.locationBlock}>
                <Text style={styles.locationLabel}>Pickup</Text>
                <Text style={styles.locationName}>{rideData.from}</Text>
                <Text style={styles.locationAddr}>{rideData.fromAddr}</Text>
              </View>
              <View style={[styles.locationBlock, { marginTop: 24 }]}>
                <Text style={styles.locationLabel}>Drop-off</Text>
                <Text style={styles.locationName}>{rideData.to}</Text>
                <Text style={styles.locationAddr}>{rideData.toAddr}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Driver Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Driver & Vehicle</Text>
          <View style={styles.driverSection}>
            <Image source={{ uri: rideData.driver.avatar }} style={styles.avatar} />
            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>{rideData.driver.name}</Text>
              <View style={styles.ratingRow}>
                <MaterialIcons name="star" size={16} color="#f59e0b" />
                <Text style={styles.ratingText}>{rideData.driver.rating} • {rideData.driver.trips} trips</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chatBtn} onPress={() => navigation.navigate('Chat')}>
              <MaterialIcons name="chat-bubble-outline" size={20} color={palette.primary} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.vehicleRow}>
            <View style={styles.vehicleIcon}>
              <MaterialIcons name="directions-car" size={24} color={palette.onSurfaceVariant} />
            </View>
            <View>
              <Text style={styles.vehicleName}>{rideData.car.name}</Text>
              <Text style={styles.vehicleDetails}>{rideData.car.color} • {rideData.car.plate}</Text>
            </View>
          </View>
        </View>

        {/* Booking Summary */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Seats</Text>
            <Text style={styles.summaryValue}>{rideData.seats} Seat</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Payment Status</Text>
            <Text style={[styles.summaryValue, { color: palette.success }]}>Paid via UPI</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total Paid</Text>
            <Text style={styles.totalValue}>₹{rideData.price}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionSection}>
          <TouchableOpacity style={styles.secondaryActionBtn}>
            <MaterialIcons name="help-outline" size={20} color={palette.onSurface} />
            <Text style={styles.secondaryActionText}>Need Help?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dangerActionBtn}>
            <MaterialIcons name="cancel" size={20} color={palette.error} />
            <Text style={styles.dangerActionText}>Cancel Booking</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.surface,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 246, 247, 0.95)',
    zIndex: 10,
  },
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '800',
    fontSize: 28,
    color: palette.primary,
    letterSpacing: -0.5,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  statusCard: {
    backgroundColor: palette.surfaceContainerLowest,
    padding: 20,
    borderRadius: 20,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  statusInfo: {
    gap: 4,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusText: {
    color: palette.primary,
    fontWeight: '800',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  bookingId: {
    fontSize: 12,
    color: palette.onSurfaceVariant,
    fontWeight: '600',
  },
  dateText: {
    fontSize: 14,
    fontWeight: '700',
    color: palette.onSurface,
  },
  card: {
    backgroundColor: palette.surfaceContainerLowest,
    padding: 20,
    borderRadius: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  cardTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '800',
    color: palette.onSurface,
    marginBottom: 20,
  },
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  actionLink: {
    color: palette.primary,
    fontWeight: '700',
    fontSize: 14,
  },
  routeRow: {
    flexDirection: 'row',
    gap: 16,
  },
  timeline: {
    alignItems: 'center',
    width: 20,
  },
  dotOutline: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: palette.primary,
    backgroundColor: '#fff',
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: palette.primaryContainer,
    marginVertical: 4,
  },
  dotFilled: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: palette.primary,
  },
  routeDetails: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: palette.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  locationName: {
    fontSize: 16,
    fontWeight: '800',
    color: palette.onSurface,
  },
  locationAddr: {
    fontSize: 12,
    color: palette.outlineVariant,
    marginTop: 2,
  },
  driverSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    fontSize: 16,
    fontWeight: '800',
    color: palette.onSurface,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 13,
    color: palette.onSurfaceVariant,
    marginLeft: 4,
  },
  chatBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 88, 187, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: palette.surfaceContainerLow,
    marginVertical: 20,
  },
  vehicleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  vehicleIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: palette.surfaceContainer,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vehicleName: {
    fontSize: 15,
    fontWeight: '700',
    color: palette.onSurface,
  },
  vehicleDetails: {
    fontSize: 13,
    color: palette.onSurfaceVariant,
    marginTop: 2,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: palette.onSurfaceVariant,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '700',
    color: palette.onSurface,
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: palette.surfaceContainerLow,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '800',
    color: palette.onSurface,
  },
  totalValue: {
    fontSize: 20,
    fontWeight: '900',
    color: palette.primary,
  },
  actionSection: {
    gap: 12,
    marginTop: 10,
  },
  secondaryActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: palette.surfaceContainerHigh,
  },
  secondaryActionText: {
    fontSize: 15,
    fontWeight: '700',
    color: palette.onSurface,
  },
  dangerActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(179, 27, 37, 0.05)',
  },
  dangerActionText: {
    fontSize: 15,
    fontWeight: '700',
    color: palette.error,
  },
});

export default ManageRideScreen;
