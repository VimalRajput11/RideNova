import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, ScrollView, 
  TouchableOpacity, Image, StatusBar, Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

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
};

const BookingScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(245, 246, 247, 0.7)" />

      {/* TopAppBar */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>My Ride</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'Upcoming' && styles.tabButtonActive]}
            onPress={() => setActiveTab('Upcoming')}
          >
            <Text style={[styles.tabText, activeTab === 'Upcoming' && styles.tabTextActive]}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'Completed' && styles.tabButtonActive]}
            onPress={() => setActiveTab('Completed')}
          >
            <Text style={[styles.tabText, activeTab === 'Completed' && styles.tabTextActive]}>Completed</Text>
          </TouchableOpacity>
        </View>

        {/* Section Intro */}
        <View style={styles.sectionIntro}>
          <Text style={styles.sectionSubtitle}>Next Destination</Text>
          <Text style={styles.sectionTitle}>Your active journeys</Text>
        </View>

        {/* Upcoming Rides Grid */}
        <View style={styles.gridContainer}>
          
          {/* Booking Card 1: Confirmed */}
          <TouchableOpacity style={styles.bookingCard} activeOpacity={0.9}>
            <View style={styles.cardHeader}>
              <View style={styles.badgeConfirmed}>
                <MaterialIcons name="verified" size={14} color={palette.primary} />
                <Text style={styles.badgeConfirmedText}>Confirmed</Text>
              </View>
              <Text style={styles.dateTimeText}>Oct 24, 09:00</Text>
            </View>

            <View style={styles.routeContainer}>
              <View style={styles.routeLinePrimary} />
              <View style={styles.routeDotPrimaryTop} />
              <View style={styles.routeDotPrimaryBottom} />
              
              <View style={styles.routeBlockTop}>
                <Text style={styles.routeLabel}>FROM</Text>
                <Text style={styles.routeLocationText}>New Delhi Railway Station</Text>
              </View>
              <View style={styles.routeBlockBottom}>
                <Text style={styles.routeLabel}>TO</Text>
                <Text style={styles.routeLocationText}>Chhatrapati Shivaji Terminus</Text>
              </View>
            </View>

            <View style={styles.cardFooter}>
              <View style={styles.driverSection}>
                <View style={styles.driverAvatarContainer}>
                  <Image 
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDknnaYZLL085wouOcmJ4T-saKnQF2lU7-40vYw36Fv7RW0ldwq7R3sJWe2qjRRY6PtFfYPk29BZmkglBXNZ_mb6-O7CFIfvlsDOSKp7n7d8TyTgFKUW_rW6uedGsxGrjJoOcHrJGwLMyNT_JlD4_mc3olB0YPBrbBMBY4Y9v2-FllfPKOvz7qqnVGzvHJbqWr6HH8Wg2bhnNRpVDsSEH6capnz-Hi7dB95klD01pNLotq2-u0dJbrTPXjNPONF8QHvRzHho64Adkb3' }}
                    style={styles.driverAvatar}
                  />
                </View>
                <View>
                  <Text style={styles.driverLabel}>Driver</Text>
                  <Text style={styles.driverName}>Amit Kumar</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={styles.primaryButtonBtn}
                onPress={() => navigation.navigate('ManageRide')}
              >
                <Text style={styles.primaryButtonText}>Manage</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {/* Booking Card 2: Pending */}
          <TouchableOpacity style={styles.bookingCard} activeOpacity={0.9}>
            <View style={styles.cardHeader}>
              <View style={styles.badgePending}>
                <MaterialIcons name="pending" size={14} color={palette.tertiary} />
                <Text style={styles.badgePendingText}>Pending</Text>
              </View>
              <Text style={styles.dateTimeText}>Oct 26, 14:30</Text>
            </View>

            <View style={styles.routeContainer}>
              <View style={styles.routeLineTertiary} />
              <View style={styles.routeDotTertiaryTop} />
              <View style={styles.routeDotTertiaryBottom} />
              
              <View style={styles.routeBlockTop}>
                <Text style={styles.routeLabel}>FROM</Text>
                <Text style={styles.routeLocationText}>Kempegowda Station, Bengaluru</Text>
              </View>
              <View style={styles.routeBlockBottom}>
                <Text style={styles.routeLabel}>TO</Text>
                <Text style={styles.routeLocationText}>Chennai Central</Text>
              </View>
            </View>

            <View style={styles.cardFooter}>
              <View style={styles.driverSection}>
                <View style={styles.driverAvatarContainer}>
                  <Image 
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk5zFxTe_q2yXK1A4zXiJy6iwMFm1htqGJzoNTn4xfk0v8YOi54Wgg4gtOBUtT3nHPghRLPv3fGGgCIIohRbyBqOVV9BcDO713tN2dCj-pfXLOb1fLrJL-1_HVu2tGasow3fjRVeGwMSkD1zxURgmo3quDx3rDW9wH-Dw9a8_fu554kLfa7ULCj2rCV_IGynBvsfmb5T0eCpM9QzOKvfobbimYConC5fb-QMvPqgIqpJRZtfHYHOI5y2djNNRObbNlnkWjmU94-zia' }}
                    style={styles.driverAvatar}
                  />
                </View>
                <View>
                  <Text style={styles.driverLabel}>Driver</Text>
                  <Text style={styles.driverName}>Neha Singh</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={styles.secondaryButtonBtn}
                onPress={() => navigation.navigate('ManageRide')}
              >
                <Text style={styles.secondaryButtonText}>Details</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {/* Booking Card 3: New/Promo */}
          <TouchableOpacity style={styles.promoCard} activeOpacity={0.9}>
            <View style={styles.promoCardContent}>
              <Text style={styles.promoTitle}>Book your next trip</Text>
              <Text style={styles.promoSubtitle}>Get 15% off on all cross-border rides this weekend.</Text>
              <TouchableOpacity style={styles.promoActionBtn} onPress={() => navigation.navigate('HomeMain')}>
                <Text style={styles.promoActionText}>Explore</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.promoIconBg}>
              <MaterialIcons name="directions-car" size={160} color="rgba(255,255,255,0.2)" />
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.bottomSpacer} />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'rgba(245, 246, 247, 0.95)',
    zIndex: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuBtn: {
    padding: 8,
    marginLeft: -8,
  },
  headerTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '800',
    fontSize: 28,
    color: palette.primary,
    letterSpacing: -0.5,
  },
  profilePicContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: palette.primaryContainer,
  },
  profilePic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: palette.surfaceContainerLow,
    borderRadius: 999,
    padding: 6,
    marginBottom: 32,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 999,
  },
  tabButtonActive: {
    backgroundColor: palette.surfaceContainerLowest,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '600',
    color: palette.onSurfaceVariant,
  },
  tabTextActive: {
    color: palette.primary,
    fontWeight: '800',
  },
  sectionIntro: {
    marginBottom: 32,
    paddingLeft: 8,
  },
  sectionSubtitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontWeight: '800',
    color: palette.primary,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 8,
  },
  sectionTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 28,
    fontWeight: '900',
    color: palette.onSurface,
    letterSpacing: -0.5,
  },
  gridContainer: {
    gap: 24,
  },
  bookingCard: {
    backgroundColor: palette.surfaceContainerLowest,
    borderRadius: 24,
    padding: 24,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.03,
    shadowRadius: 24,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  badgeConfirmed: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(108, 159, 255, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    gap: 6,
  },
  badgeConfirmedText: {
    fontSize: 10,
    fontWeight: '800',
    color: palette.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  badgePending: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(243, 156, 251, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    gap: 6,
  },
  badgePendingText: {
    fontSize: 10,
    fontWeight: '800',
    color: palette.tertiary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  dateTimeText: {
    fontSize: 14,
    fontWeight: '600',
    color: palette.onSurfaceVariant,
  },
  routeContainer: {
    position: 'relative',
    paddingLeft: 24,
    marginBottom: 24,
  },
  routeLinePrimary: {
    position: 'absolute',
    left: 4,
    top: 8,
    bottom: 8,
    width: 2,
    backgroundColor: palette.primaryContainer,
  },
  routeDotPrimaryTop: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: palette.primary,
    backgroundColor: '#ffffff',
    zIndex: 2,
  },
  routeDotPrimaryBottom: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: palette.primary,
    zIndex: 2,
  },
  routeLineTertiary: {
    position: 'absolute',
    left: 4,
    top: 8,
    bottom: 8,
    width: 2,
    backgroundColor: palette.tertiaryContainer,
  },
  routeDotTertiaryTop: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: palette.tertiary,
    backgroundColor: '#ffffff',
    zIndex: 2,
  },
  routeDotTertiaryBottom: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: palette.tertiary,
    zIndex: 2,
  },
  routeBlockTop: {
    marginBottom: 24,
  },
  routeBlockBottom: {
  },
  routeLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: palette.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  routeLocationText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: '800',
    color: palette.onSurface,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: palette.surfaceContainer,
  },
  driverSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  driverAvatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: palette.surfaceContainer,
  },
  driverAvatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  driverLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: palette.onSurfaceVariant,
    marginBottom: 2,
  },
  driverName: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '800',
    color: palette.onSurface,
  },
  primaryButtonBtn: {
    backgroundColor: palette.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
  },
  primaryButtonText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '800',
    color: '#ffffff',
  },
  secondaryButtonBtn: {
    backgroundColor: palette.surfaceContainerHighest,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
  },
  secondaryButtonText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '800',
    color: palette.onSurface,
  },
  promoCard: {
    backgroundColor: palette.primary, // Normally gradient
    borderRadius: 24,
    padding: 32,
    position: 'relative',
    overflow: 'hidden',
  },
  promoCardContent: {
    position: 'relative',
    zIndex: 10,
  },
  promoTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 24,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 8,
  },
  promoSubtitle: {
    fontSize: 14,
    color: palette.primaryContainer,
    marginBottom: 24,
    maxWidth: 200,
    lineHeight: 20,
  },
  promoActionBtn: {
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 999,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  promoActionText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '800',
    color: palette.primary,
  },
  promoIconBg: {
    position: 'absolute',
    right: -40,
    bottom: -40,
    opacity: 0.8,
  },
  bottomSpacer: {
    height: 120, // ample space for the global tab navbar
  }
});

export default BookingScreen;
