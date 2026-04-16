import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, ScrollView, 
  TouchableOpacity, Image, StatusBar, Platform, Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const palette = {
  primary: "#0058bb",
  primaryContainer: "#6c9fff",
  onPrimary: "#f0f2ff",
  onPrimaryContainer: "#00214f",
  secondary: "#3853b7",
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
  tertiary: "#883c93",
  error: "#b31b25",
};

const RideDetailScreen = ({ navigation }) => {
  const [seatsToBook, setSeatsToBook] = useState(1);
  const [paymentMode, setPaymentMode] = useState('UPI');
  
  // Data from old screen but used in new design
  const rideData = {
    car: "Maruti Suzuki Dzire",
    carColor: "White",
    carImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNfGk8OHTpGUEPLjEwrlvogAWzuvHJbvBUNTkeizT73wexC0gsQOkd_knZpKdwDw8P1fVbPh21TUXjZulEGMMWT1xwHm-NnjN_HwQF-mUCs0RGcngFpYQtlmRInv4r-lSGu-MtDSvySlHmgkpjwJbMjojgUsVkOOyFBN747S9u9nStjKJxprSmm2nhyi3Pmb5OPtk8rV__IRJ-n6_eUz2V3ZB-t321R_P0vm5RQ924zPIVz8s25Nq9OKqweBOL09lOKAknYqHKaTn7",
    driver: {
      name: "Rahul Sharma",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5XSf6ppgCVm1dyksPZ9GpRuzux9CWc80Ts8rbKp4igQrERg64edUbYovR3swQXOuu-ZIJRjNrI-5jNDdEEwme8hOf0FXprqiGPNJs--FonCbH2U85dtt9BCyu6kASD3DrvAK8X1Tg1Pq4-WTLYcQUQawheOZC_mCM1j_sub-9XLDDo6pmw0iTI4mLiQ7rqvUuXdum5oFhCLaOi87ydIhQX1VE0mNMMIF_MeiYjRpMTuEuZ-a-9kE68gmaEj4qdm1qOnK1Tt8bmqD",
      rating: 4.8,
      reviews: 124
    },
    itinerary: [
      { time: "09:00", point: "New Delhi Railway Station", address: "Paharganj side, Near Gate 1" },
      { time: "11:30", point: "Chhatrapati Shivaji Terminus", address: "Main Entrance" }
    ],
    seatsLeft: 2,
    pricePerSeat: 450,
    serviceFee: 50,
    features: ["AC", "Music", "No Smoking", "Pet Friendly"],
    ecoScore: 98
  };

  const totalPrice = (rideData.pricePerSeat * seatsToBook) + rideData.serviceFee;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(245, 246, 247, 0.95)" />
      
      {/* Solid Header matching My Ride style */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ride Details</Text>
        <TouchableOpacity style={styles.headerIconBtn}>
          <MaterialIcons name="more-vert" size={24} color={palette.onSurfaceVariant} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Section: Hero Car Image */}
        <View style={styles.heroContainer}>
          <Image source={{ uri: rideData.carImage }} style={styles.heroImage} />
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <Text style={styles.heroLabel}>VEHICLE</Text>
            <Text style={styles.heroTitle}>{rideData.car} • {rideData.carColor}</Text>
          </View>
        </View>

        {/* Section: Driver Card & Stats Bento */}
        <View style={styles.contentPadding}>
          <View style={styles.bentoGrid}>
            {/* Driver Card */}
            <View style={[styles.card, styles.driverCard]}>
              <View style={styles.driverInfoRow}>
                <Image source={{ uri: rideData.driver.avatar }} style={styles.driverAvatar} />
                <View>
                  <Text style={styles.driverName}>{rideData.driver.name}</Text>
                  <View style={styles.ratingBox}>
                    <MaterialIcons name="star" size={14} color="#f59e0b" style={{ marginRight: 2 }} />
                    <Text style={styles.ratingVal}>{rideData.driver.rating}</Text>
                    <Text style={styles.ratingCount}> ({rideData.driver.reviews} rides)</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.verifiedBadge}>
                <MaterialIcons name="verified" size={20} color={palette.primary} />
              </TouchableOpacity>
            </View>

            {/* Stats Row */}
            <View style={styles.statsRow}>
              <View style={[styles.statBox, { backgroundColor: palette.surfaceContainerLow }]}>
                <MaterialIcons name="event-seat" size={20} color={palette.primary} />
                <Text style={styles.statLabel}>Available Seats</Text>
                <Text style={styles.statVal}>{rideData.seatsLeft} seats left</Text>
              </View>
              <View style={[styles.statBox, { backgroundColor: palette.surfaceContainerLow }]}>
                <MaterialIcons name="energy-savings-leaf" size={20} color={palette.tertiary} />
                <Text style={styles.statLabel}>Eco Score</Text>
                <Text style={styles.statVal}>{rideData.ecoScore}/100</Text>
              </View>
            </View>
          </View>

          {/* Section: Itinerary */}
          <View style={[styles.card, styles.itineraryCard]}>
            <Text style={styles.sectionHeading}>ITINERARY</Text>
            <View style={styles.itineraryLineContainer}>
              <View style={styles.verticalLinkLine} />
              
              {/* Pickup */}
              <View style={styles.itineraryItem}>
                <View style={styles.markerOutline} />
                <View style={styles.itineraryText}>
                  <Text style={styles.itineraryPoint}>{rideData.itinerary[0].point}</Text>
                  <Text style={styles.itinerarySub}>{rideData.itinerary[0].address}</Text>
                </View>
                <Text style={styles.itineraryTime}>{rideData.itinerary[0].time}</Text>
              </View>

              {/* Dropoff */}
              <View style={[styles.itineraryItem, { marginTop: 40 }]}>
                <View style={[styles.markerOutline, { borderColor: palette.secondary }]} />
                <View style={styles.itineraryText}>
                  <Text style={styles.itineraryPoint}>{rideData.itinerary[1].point}</Text>
                  <Text style={styles.itinerarySub}>{rideData.itinerary[1].address}</Text>
                </View>
                <Text style={styles.itineraryTime}>{rideData.itinerary[1].time}</Text>
              </View>
            </View>
          </View>

          {/* Section: Trip Features */}
          <View style={styles.featuresSection}>
            <Text style={styles.sectionHeading}>TRIP FEATURES</Text>
            <View style={styles.featuresList}>
              {rideData.features.map((feat, index) => (
                <View key={index} style={styles.featureTag}>
                  <MaterialIcons 
                    name={feat === 'AC' ? 'ac-unit' : feat === 'Music' ? 'music-note' : feat === 'No Smoking' ? 'smoke-free' : 'pets'} 
                    size={14} 
                    color={palette.onSurfaceVariant} 
                  />
                  <Text style={styles.featureText}>{feat}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Section: Booking Options (Seats & Payment) */}
          <View style={[styles.card, { padding: 24 }]}>
            <Text style={styles.sectionHeading}>BOOKING DETAILS</Text>
            
            <View style={styles.optionRow}>
              <View>
                <Text style={styles.optionMain}>Number of Seats</Text>
                <Text style={styles.optionSub}>{rideData.seatsLeft} seats remaining</Text>
              </View>
              <View style={styles.counterContainer}>
                <TouchableOpacity 
                  style={styles.counterBtn}
                  onPress={() => setSeatsToBook(prev => Math.max(1, prev - 1))}
                >
                  <MaterialIcons name="remove" size={20} color={palette.onSurface} />
                </TouchableOpacity>
                <Text style={styles.counterText}>{seatsToBook}</Text>
                <TouchableOpacity 
                  style={styles.counterBtn}
                  onPress={() => setSeatsToBook(prev => Math.min(rideData.seatsLeft, prev + 1))}
                >
                  <MaterialIcons name="add" size={20} color={palette.onSurface} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.priceDivider} />

            <View style={styles.paymentSection}>
              <Text style={styles.paymentTitle}>Payment Mode</Text>
              <View style={styles.paymentOptions}>
                <TouchableOpacity 
                  style={[styles.payTab, paymentMode === 'UPI' && styles.payTabActive]}
                  onPress={() => setPaymentMode('UPI')}
                >
                  <MaterialIcons name="account-balance-wallet" size={18} color={paymentMode === 'UPI' ? palette.primary : palette.onSurfaceVariant} />
                  <Text style={[styles.payTabText, paymentMode === 'UPI' && styles.payTabTextActive]}>UPI</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.payTab, paymentMode === 'Cash' && styles.payTabActive]}
                  onPress={() => setPaymentMode('Cash')}
                >
                  <MaterialIcons name="payments" size={18} color={paymentMode === 'Cash' ? palette.primary : palette.onSurfaceVariant} />
                  <Text style={[styles.payTabText, paymentMode === 'Cash' && styles.payTabTextActive]}>Cash</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Section: Price Breakdown */}
          <View style={[styles.card, { backgroundColor: palette.surfaceContainerLow, elevation: 0, shadowOpacity: 0 }]}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Seat Price ({seatsToBook}x)</Text>
              <Text style={styles.priceVal}>₹{rideData.pricePerSeat * seatsToBook}.00</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Service Fee</Text>
              <Text style={styles.priceVal}>₹{rideData.serviceFee}.00</Text>
            </View>
            <View style={styles.priceDivider} />
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalVal}>₹{totalPrice}.00</Text>
            </View>
          </View>

          <View style={{ height: 160 }} />
        </View>

      </ScrollView>

      {/* Sticky Bottom Bar */}
      <View style={styles.bottomNav}>
        <View style={styles.bottomNavContent}>
          <TouchableOpacity style={styles.chatIconBtn} onPress={() => navigation.navigate('Chat')}>
            <MaterialIcons name="chat-bubble" size={24} color={palette.primary} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.bookActionBtn}
            onPress={() => navigation.navigate('BookingSuccess')}
          >
            <Text style={styles.bookActionText}>Book Ride</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.surface,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 246, 247, 0.95)',
    zIndex: 10,
  },
  headerTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '800',
    fontSize: 28,
    color: palette.primary,
    letterSpacing: -0.5,
  },
  headerIconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: palette.surfaceContainerLow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingTop: 0,
  },
  heroContainer: {
    width: '100%',
    height: 300,
    position: 'relative',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  heroContent: {
    position: 'absolute',
    bottom: 30,
    left: 30,
  },
  heroLabel: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    opacity: 0.8,
    marginBottom: 4,
  },
  heroTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 28,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: -0.5,
  },
  contentPadding: {
    paddingHorizontal: 20,
    marginTop: -20, // Overlap effect
  },
  card: {
    backgroundColor: palette.surfaceContainerLowest,
    borderRadius: 24,
    padding: 24,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 4,
    marginBottom: 16,
  },
  driverCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  driverInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  driverAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  driverName: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: '800',
    color: palette.onSurface,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingVal: {
    fontSize: 14,
    fontWeight: '700',
    color: palette.primary,
  },
  ratingCount: {
    fontSize: 14,
    color: palette.onSurfaceVariant,
  },
  verifiedBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: palette.surfaceContainerLow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bentoGrid: {
    gap: 16,
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  statBox: {
    flex: 1,
    padding: 20,
    borderRadius: 24,
    justifyContent: 'center',
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: palette.onSurfaceVariant,
    marginTop: 8,
  },
  statVal: {
    fontSize: 18,
    fontWeight: '800',
    color: palette.onSurface,
    marginTop: 2,
  },
  itineraryCard: {
  },
  sectionHeading: {
    fontSize: 12,
    fontWeight: '900',
    color: palette.onSurfaceVariant,
    letterSpacing: 2,
    marginBottom: 24,
  },
  itineraryLineContainer: {
    paddingLeft: 40,
    position: 'relative',
  },
  verticalLinkLine: {
    position: 'absolute',
    left: 11,
    top: 10,
    bottom: 10,
    width: 2,
    backgroundColor: palette.primaryContainer,
  },
  itineraryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
  },
  markerOutline: {
    position: 'absolute',
    left: -40,
    top: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 4,
    borderColor: palette.primary,
    backgroundColor: '#ffffff',
    zIndex: 10,
  },
  itineraryText: {
    flex: 1,
  },
  itineraryPoint: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: '800',
    color: palette.onSurface,
    lineHeight: 22,
  },
  itinerarySub: {
    fontSize: 14,
    color: palette.onSurfaceVariant,
    marginTop: 2,
  },
  itineraryTime: {
    fontSize: 16,
    fontWeight: '800',
    color: palette.primary,
    marginLeft: 16,
  },
  featuresSection: {
    marginBottom: 24,
    paddingLeft: 4,
  },
  featuresList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },
  featureTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: palette.surfaceContainer,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 999,
  },
  featureText: {
    fontSize: 14,
    fontWeight: '600',
    color: palette.onSurface,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  priceLabel: {
    fontSize: 15,
    color: palette.onSurfaceVariant,
    fontWeight: '500',
  },
  priceVal: {
    fontSize: 15,
    fontWeight: '700',
    color: palette.onSurface,
  },
  priceDivider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
    marginVertical: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '800',
    color: palette.onSurface,
  },
  totalVal: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 24,
    fontWeight: '900',
    color: palette.primary,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionMain: {
    fontSize: 16,
    fontWeight: '800',
    color: palette.onSurface,
  },
  optionSub: {
    fontSize: 12,
    color: palette.primary,
    fontWeight: '700',
    marginTop: 2,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.surfaceContainer,
    borderRadius: 20,
    padding: 4,
  },
  counterBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: palette.surfaceContainerLowest,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  counterText: {
    fontSize: 16,
    fontWeight: '800',
    color: palette.onSurface,
    marginHorizontal: 16,
  },
  paymentSection: {
    marginTop: 8,
  },
  paymentTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: palette.onSurfaceVariant,
    marginBottom: 12,
  },
  paymentOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  payTab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: palette.surfaceContainer,
    backgroundColor: 'transparent',
  },
  payTabActive: {
    borderColor: palette.primary,
    backgroundColor: 'rgba(0, 88, 187, 0.04)',
  },
  payTabText: {
    fontSize: 14,
    fontWeight: '600',
    color: palette.onSurfaceVariant,
  },
  payTabTextActive: {
    color: palette.primary,
    fontWeight: '800',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(245, 246, 247, 0.95)',
    paddingBottom: Platform.OS === 'ios' ? 20 : 16,
    paddingTop: 16,
    paddingHorizontal: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: -12 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 20,
    zIndex: 1000,
  },
  bottomNavContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chatIconBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: palette.surfaceContainerLowest,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  bookActionBtn: {
    flex: 1,
    height: 60,
    borderRadius: 30,
    backgroundColor: palette.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: palette.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  bookActionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  }
});

export default RideDetailScreen;
