import React, { useState, useMemo } from 'react';
import { 
  View, Text, StyleSheet, ScrollView, 
  TouchableOpacity, Image, StatusBar, Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

const INITIAL_RIDES = [
  {
    id: '1',
    driver: {
      name: "Rahul Sharma",
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCImul0ZF_UZ_sMjsdvJDZN1Un7U4zI6KrmZK8T8dQgFB3V4waknm9dPkliODXHZ6VixePUt2eEo8bzLAqznWHdb9pvqHbKKY0lycZLF9viPKRMqEBAJgJz86YkS1T_7CCvkNJfsKhWQ0i8pm93pi3TLyDPB9iYggt375gnp5F-coTm9jIkwONdS9na8FdN9tx1qEo8ksnOmAtWD3QNbgQAZ_nLIaqeWWAX14WBaHVIyhzhxX6ihn6kYBMIKFWcmz1YeP4qpwr3DdKU',
      rating: 4.8,
      isVerified: true
    },
    price: 450,
    startTime: "09:00",
    endTime: "11:30",
    pickup: "New Delhi Railway Station",
    dropoff: "Chhatrapati Shivaji Terminus",
    seatsLeft: 2,
    isFastest: false
  },
  {
    id: '2',
    driver: {
      name: "Priya Patel",
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpcGM0k6pXsh9bQ5Jw011rwbBbXapKKgwHQbueX89dRZCuAN29gndZ3ckfn9de1SKX3O8gwTbAkzxvMW-zkbqoG1bx3fb1rnhHck5Ghn2nelcnhhxA507N7TrjF63VN0D8_JMPO4t5djAYMjX2ZYXGCToqp-vbqF9bX3zrPnUOg7xx79V9U5whwgWZNTuIg4qVwJ5NJveHSpRJnCIkSIKU8_WufGi7vcCo6wlcu7FfK15lXVWKnRNcTtDPDk7cFg-KrsUrGMxNvT4g',
      rating: 4.9,
      isEco: true
    },
    price: 380,
    startTime: "10:30",
    endTime: "13:15",
    pickup: "ISBT Kashmere Gate",
    dropoff: "Bandra Terminus",
    seatsLeft: 3,
    isFastest: false
  },
  {
    id: '3',
    driver: {
      name: "Vikram S.",
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAhilOCavTIEkLgtTfbQTGzw7NrmcddvZRTWImcxcuiGv-5rBgXBn24qZYVgNfzKkuZh-4Nz50nt8FTCREwBm6nUSNNgKpdZUrFqnI69AUBc_Mbb8XUErj5XV8q9KNasDVcwh6OXbBghCyzLkaYWbB4BHKN_uvC5mqavJrQAdovfnyMaBWDl5IQ6tX2lfO4ftUQIaTlLQ-eDSPy9crB2LJw5T1aCceicVd4_FkWqzSB3IBnBOFR5Jba_lw8-b2CEzAB0Kh7Kwpd7qr',
      rating: 5.0,
      reviews: 12
    },
    price: 520,
    startTime: "08:30",
    endTime: "11:00",
    pickup: "Delhi Aerocity",
    dropoff: "Mumbai Airport T2",
    seatsLeft: 1,
    isFastest: true,
    alert: "Direct route, no stops. Arrives by 11:00 AM."
  }
];

export default function RideListingScreen({ navigation }) {
  const [filterType, setFilterType] = useState('All'); // 'All', 'Price', 'Time', 'Rating'

  const filteredRides = useMemo(() => {
    let result = [...INITIAL_RIDES];
    if (filterType === 'Price') {
      result.sort((a, b) => a.price - b.price);
    } else if (filterType === 'Time') {
      result.sort((a, b) => a.startTime.localeCompare(b.startTime));
    } else if (filterType === 'Rating') {
      result.sort((a, b) => b.driver.rating - a.driver.rating);
    }
    return result;
  }, [filterType]);

  const renderRideCard = (ride) => {
    if (ride.isFastest) {
      return (
        <TouchableOpacity key={ride.id} style={styles.rideCardFastest} activeOpacity={0.9} onPress={() => navigation.navigate('RideDetail')}>
          <View style={styles.fastestBanner}>
            <Text style={styles.fastestBannerText}>FASTEST</Text>
          </View>
          
          <View style={[styles.cardHeader, { marginBottom: 16 }]}>
            <View style={styles.driverInfo}>
              <Image source={{ uri: ride.driver.avatar }} style={[styles.avatar, { width: 40, height: 40 }]} />
              <View style={styles.driverTextContainer}>
                <Text style={[styles.driverName, { fontSize: 16 }]}>{ride.driver.name}</Text>
                <View style={styles.driverStatus}>
                  <MaterialIcons name="star" size={12} color="#f59e0b" />
                  <Text style={[styles.statusText, { fontSize: 10 }]}>{ride.driver.rating} • {ride.driver.reviews} rides</Text>
                </View>
              </View>
            </View>
            <View style={styles.priceContainer}>
              <Text style={[styles.priceText, { fontSize: 20 }]}>₹{ride.price}</Text>
            </View>
          </View>

          <View style={styles.alertBox}>
            <MaterialIcons name="bolt" size={20} color={palette.primary} />
            <Text style={styles.alertBoxText}>{ride.alert}</Text>
          </View>

          <View style={styles.fastestFooter}>
            <Text style={styles.fastestSeatsText}>{ride.seatsLeft} seat left!</Text>
            <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('RideDetail')}>
              <Text style={styles.primaryButtonText}>Claim Seat</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity key={ride.id} style={styles.rideCard} activeOpacity={0.9} onPress={() => navigation.navigate('RideDetail')}>
        <View style={styles.cardHeader}>
          <View style={styles.driverInfo}>
            <View style={styles.avatarWrapper}>
              <Image source={{ uri: ride.driver.avatar }} style={styles.avatar} />
              <View style={styles.avatarBadge}>
                <MaterialIcons name="star" size={10} color="#f59e0b" />
                <Text style={styles.avatarBadgeText}>{ride.driver.rating}</Text>
              </View>
            </View>
            <View style={styles.driverTextContainer}>
              <Text style={styles.driverName}>{ride.driver.name}</Text>
              <View style={styles.driverStatus}>
                <MaterialIcons 
                  name={ride.driver.isEco ? "eco" : "verified"} 
                  size={14} 
                  color={ride.driver.isEco ? palette.tertiary : palette.onSurfaceVariant} 
                />
                <Text style={[styles.statusText, ride.driver.isEco && { color: palette.tertiary }]}>
                  {ride.driver.isEco ? "Eco-Friendly Driver" : "Verified Driver"}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>₹{ride.price}</Text>
            <Text style={styles.priceLabel}>PER SEAT</Text>
          </View>
        </View>

        <View style={styles.routeContainer}>
          <View style={styles.timeLineContainer}>
            <Text style={styles.timeText}>{ride.startTime}</Text>
            <View style={styles.timeLineGradient} />
            <Text style={styles.timeText}>{ride.endTime}</Text>
          </View>
          <View style={styles.locationsContainer}>
            <View style={styles.locationBlock}>
              <Text style={styles.locationLabel}>PICKUP</Text>
              <Text style={styles.locationText}>{ride.pickup}</Text>
            </View>
            <View style={styles.locationBlock}>
              <Text style={styles.locationLabel}>DROPOFF</Text>
              <Text style={styles.locationText}>{ride.dropoff}</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.footerLeft}>
            {ride.seatsLeft <= 2 ? (
              <View style={styles.footerLeft}>
                <View style={styles.avatarsOverlap}>
                  <View style={[styles.miniAvatar, { backgroundColor: palette.primaryContainer, zIndex: 3 }]}>
                    <MaterialIcons name="person" size={12} color="#ffffff" />
                  </View>
                  <View style={[styles.miniAvatar, { backgroundColor: palette.primaryContainer, zIndex: 2 }]}>
                    <MaterialIcons name="person" size={12} color="#ffffff" />
                  </View>
                </View>
                <Text style={styles.seatsLeftTextError}>{ride.seatsLeft} seats left</Text>
              </View>
            ) : (
              <>
                <MaterialIcons name="event-seat" size={20} color={palette.onSurfaceVariant} />
                <Text style={styles.seatsLeftText}>{ride.seatsLeft} seats remaining</Text>
              </>
            )}
          </View>
          <TouchableOpacity style={ride.seatsLeft <= 2 ? styles.primaryButton : styles.secondaryButton} onPress={() => navigation.navigate('RideDetail')}>
            <Text style={ride.seatsLeft <= 2 ? styles.primaryButtonText : styles.secondaryButtonText}>Book</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(245, 246, 247, 0.7)" />

      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Find a Ride</Text>
          <Text style={styles.headerSubtitle}>DELHI → MUMBAI • 24 OCT</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.filterSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScrollContent}>
            
            <TouchableOpacity 
              style={[styles.filterPill, filterType === 'All' && styles.filterPillActive]}
              onPress={() => setFilterType('All')}
            >
              <MaterialIcons name="tune" size={16} color={filterType === 'All' ? palette.onPrimaryContainer : palette.onSurfaceVariant} />
              <Text style={[styles.filterPillText, filterType === 'All' && styles.filterPillTextActive]}>All</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.filterPill, filterType === 'Price' && styles.filterPillActive]}
              onPress={() => setFilterType('Price')}
            >
              <Text style={[styles.filterPillText, filterType === 'Price' && styles.filterPillTextActive]}>Price</Text>
              <MaterialIcons name="expand-more" size={16} color={filterType === 'Price' ? palette.onPrimaryContainer : palette.onSurfaceVariant} />
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.filterPill, filterType === 'Time' && styles.filterPillActive]}
              onPress={() => setFilterType('Time')}
            >
              <Text style={[styles.filterPillText, filterType === 'Time' && styles.filterPillTextActive]}>Time</Text>
              <MaterialIcons name="schedule" size={16} color={filterType === 'Time' ? palette.onPrimaryContainer : palette.onSurfaceVariant} />
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.filterPill, filterType === 'Rating' && styles.filterPillActive]}
              onPress={() => setFilterType('Rating')}
            >
              <Text style={[styles.filterPillText, filterType === 'Rating' && styles.filterPillTextActive]}>Rating</Text>
              <MaterialIcons name="star" size={16} color={filterType === 'Rating' ? palette.onPrimaryContainer : palette.onSurfaceVariant} />
            </TouchableOpacity>

          </ScrollView>
        </View>

        <View style={styles.listContainer}>
          {filteredRides.map(renderRideCard)}
        </View>

        <View style={{ height: 160 }} />
      </ScrollView>

      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fabBtn} activeOpacity={0.9} onPress={() => navigation.navigate('Publish')}>
          <MaterialIcons name="add-road" size={28} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.surface,
  },
  header: {
    paddingHorizontal: 24,
    height: 68,
    backgroundColor: 'rgba(245, 246, 247, 0.9)',
    justifyContent: 'center',
    zIndex: 50,
  },
  headerTextContainer: {
  },
  headerTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '800',
    fontSize: 28,
    color: palette.onPrimaryContainer,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 10,
    fontWeight: '700',
    color: palette.onSurfaceVariant,
    letterSpacing: 1.5,
  },
  scrollContent: {
    paddingTop: 16,
  },
  filterSection: {
    marginBottom: 24,
  },
  filterScrollContent: {
    paddingHorizontal: 24,
    gap: 12,
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: palette.surfaceContainerLowest,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(171, 173, 174, 0.2)',
  },
  filterPillActive: {
    backgroundColor: palette.primaryContainer,
    borderColor: palette.primary,
  },
  filterPillText: {
    fontSize: 14,
    fontWeight: '600',
    color: palette.onSurfaceVariant,
  },
  filterPillTextActive: {
    color: palette.onPrimaryContainer,
  },
  listContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  rideCard: {
    backgroundColor: palette.surfaceContainerLowest,
    borderRadius: 24,
    padding: 24,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.04,
    shadowRadius: 32,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: palette.surfaceContainer,
  },
  avatarBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: palette.onSurface,
  },
  driverTextContainer: {
    justifyContent: 'center',
  },
  driverName: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: '800',
    color: palette.onSurface,
  },
  driverStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: palette.onSurfaceVariant,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 28,
    fontWeight: '900',
    color: palette.primary,
    letterSpacing: -1,
  },
  priceLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: palette.onSurfaceVariant,
    letterSpacing: 1,
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    marginBottom: 24,
  },
  timeLineContainer: {
    alignItems: 'center',
    width: 44,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '800',
    color: palette.onSurface,
  },
  timeLineGradient: {
    width: 2,
    height: 40,
    backgroundColor: palette.primary,
    borderRadius: 2,
    marginVertical: 4,
  },
  locationsContainer: {
    flex: 1,
    gap: 16,
  },
  locationBlock: {
  },
  locationLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: palette.onSurfaceVariant,
    letterSpacing: 1,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: palette.onSurface,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: palette.surfaceContainer,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarsOverlap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: palette.surfaceContainerLowest,
    marginLeft: -8,
  },
  seatsLeftTextError: {
    fontSize: 12,
    fontWeight: '700',
    color: palette.error,
    marginLeft: 8,
  },
  seatsLeftText: {
    fontSize: 12,
    fontWeight: '700',
    color: palette.onSurfaceVariant,
  },
  primaryButton: {
    backgroundColor: palette.primary,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 999,
    shadowColor: palette.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  secondaryButton: {
    backgroundColor: palette.surfaceContainerHighest,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 999,
  },
  secondaryButtonText: {
    color: palette.primary,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  rideCardFastest: {
    backgroundColor: 'rgba(0, 88, 187, 0.05)',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(0, 88, 187, 0.1)',
    position: 'relative',
    overflow: 'hidden',
  },
  fastestBanner: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: palette.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomLeftRadius: 16,
  },
  fastestBannerText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  alertBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 12,
    borderRadius: 12,
    gap: 12,
    marginBottom: 16,
  },
  alertBoxText: {
    fontSize: 14,
    fontWeight: '600',
    color: palette.onSurface,
    flex: 1,
  },
  fastestFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fastestSeatsText: {
    fontSize: 12,
    fontWeight: '800',
    color: palette.primary,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 100,
    right: 24,
    zIndex: 100,
  },
  fabBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: palette.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: palette.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  }
});
