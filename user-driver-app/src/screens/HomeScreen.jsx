import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, ScrollView, 
  TouchableOpacity, Image, TextInput, StatusBar, Platform, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const palette = {
  surface: "#f5f6f7",
  onSurface: "#2c2f30",
  onSurfaceVariant: "#595c5d",
  primary: "#0058bb",
  primaryLight: "#6c9fff",
  secondary: "#3853b7",
  surfaceContainerLow: "#eff1f2",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerHigh: "#e0e3e4",
  background: "#f5f6f7",
  outline: "#757778",
  outlineVariant: "#abadae",
};

export default function HomeScreen({ navigation }) {
  const [from, setFrom] = useState('Current Location');
  const [to, setTo] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={palette.surface} />
      
      {/* TopAppBar */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>WELCOME BACK</Text>
          <Text style={styles.headerTitle}>Where are you going?</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Main Search Bento Card */}
        <View style={styles.searchCard}>
          {/* Subtle decoration using fixed view sizes to substitute the bg-primary/5 blur */}
          <View style={styles.searchCardDecoration} />

          <View style={styles.searchCardContent}>
            {/* Location Inputs with connecting line */}
            <View style={styles.locationSection}>
              {/* Vertical connecting line */}
              <View style={styles.connectingLine} />
              
              {/* FROM */}
              <View style={styles.inputContainer}>
                <MaterialIcons name="location-on" size={24} color={palette.primary} />
                <View style={styles.inputInner}>
                  <Text style={styles.inputLabel}>FROM</Text>
                  <TextInput 
                    style={[styles.textInput, { fontWeight: '600' }]}
                    value={from}
                    onChangeText={setFrom}
                    placeholder="Current Location"
                    placeholderTextColor={palette.onSurfaceVariant}
                  />
                </View>
              </View>

              <View style={styles.spacerSpacing} />
              
              {/* TO */}
              <View style={styles.inputContainer}>
                <MaterialIcons name="search" size={24} color={palette.outline} />
                <View style={styles.inputInner}>
                  <Text style={styles.inputLabelTo}>TO</Text>
                  <TextInput 
                    style={[styles.textInput, { fontWeight: '600' }]}
                    value={to}
                    onChangeText={setTo}
                    placeholder="Enter Destination"
                    placeholderTextColor={palette.onSurfaceVariant}
                  />
                </View>
              </View>
            </View>

            {/* Date and Options */}
            <View style={styles.dateOptionsRow}>
              <View style={styles.dateContainer}>
                <MaterialIcons name="calendar-today" size={20} color={palette.onSurfaceVariant} />
                <Text style={styles.dateText}>Tomorrow, 09:00</Text>
              </View>
              <TouchableOpacity style={styles.tuneButton}>
                <MaterialIcons name="tune" size={24} color={palette.onSurfaceVariant} />
              </TouchableOpacity>
            </View>

            {/* CTA Button */}
            <TouchableOpacity 
              style={styles.searchButton}
              onPress={() => navigation.navigate('RideListing')}
            >
              <Text style={styles.searchButtonText}>Search Rides</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Searches */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Searches</Text>
          <TouchableOpacity>
            <Text style={styles.clearAllText}>Clear all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recentSearchesContainer}>
          <TouchableOpacity style={styles.recentItem}>
            <View style={styles.historyIconContainer}>
              <MaterialIcons name="history" size={20} color={palette.onSurfaceVariant} />
            </View>
            <View style={styles.recentItemTextContainer}>
              <Text style={styles.recentItemTitle}>Delhi to Mumbai</Text>
              <Text style={styles.recentItemSubtitle}>2 passengers • Shared ride</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={palette.outlineVariant} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.recentItem}>
            <View style={styles.historyIconContainer}>
              <MaterialIcons name="history" size={20} color={palette.onSurfaceVariant} />
            </View>
            <View style={styles.recentItemTextContainer}>
              <Text style={styles.recentItemTitle}>Pune University</Text>
              <Text style={styles.recentItemSubtitle}>1 passenger • Commute</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={palette.outlineVariant} />
          </TouchableOpacity>
        </View>

        {/* Popular Routes */}
        <Text style={[styles.sectionTitle, { marginTop: 24, marginBottom: 16 }]}>Popular Routes</Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll} contentContainerStyle={styles.horizontalContent}>
          
          {/* Card 1 */}
          <TouchableOpacity style={styles.routeCard}>
            <View style={styles.routeCardImageContainer}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKiwvcAJ10pRUdrbv81EI6nE1RJA24VIXNId_XZN9apZbGHSRsxrXxk7NTXmc9rn-VpqSLMp--kJmWu0rfe5BXRJc_kOJa4Xf_FiYm1KsKHjezF47EJ_R6mpmCvEc8n7B67IwqGpy8b4wiSe_CCVDDDewjvSBcaszpOMU3MlUi49YIihHO_a4ZLhUTNYTVU5pqb-DDInhv1Dg5oIxjXbO7CkDRJXWVAucZu2DqWARRzLtMJNqZg4AxO0DFu792XS8Tp2ojuqpkvXok' }} 
                style={styles.routeCardImage} 
              />
              <View style={styles.badgeContainer}>
                <Text style={[styles.badgeText, { color: palette.primary }]}>TOP RATED</Text>
              </View>
            </View>
            <View style={styles.routeCardDetails}>
              <View>
                <Text style={styles.routeCardTitle}>Delhi to Mumbai</Text>
                <Text style={styles.routeCardSubtitle}>Approx. 14h 30m</Text>
              </View>
              <View style={styles.routePricing}>
                <Text style={styles.pricingLabel}>STARTING AT</Text>
                <Text style={styles.pricingValue}>₹4500</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity style={styles.routeCard}>
            <View style={styles.routeCardImageContainer}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNH8mIjnVo73Y6En23Dm3wq8orKn_baN5COZgg5lCN1mtdn4mdAgBWbHrlLtt4zfhG4fo9VuhHxnsyxREIO0tAqrdr0FXvknMxM3dKnkT0bYZmI1ne5sMFkTDF_ykjazaCWAVkudFQzAAtU16qdzS4Huy79txNd930n1WHeuSFb3fxNxcNXDqKvmUC1uPyvivJS9uKsn_jmabPJuIt_8U2dPmxHKgWjHQaDWfEKjqf550V2V2qN2vJUCNNTbgjYVWvt1lXQVt6QGSZ' }} 
                style={styles.routeCardImage} 
              />
              <View style={styles.badgeContainer}>
                <Text style={[styles.badgeText, { color: palette.secondary }]}>POPULAR</Text>
              </View>
            </View>
            <View style={styles.routeCardDetails}>
              <View>
                <Text style={styles.routeCardTitle}>Bengaluru to Chennai</Text>
                <Text style={styles.routeCardSubtitle}>Approx. 5h 15m</Text>
              </View>
              <View style={styles.routePricing}>
                <Text style={styles.pricingLabel}>STARTING AT</Text>
                <Text style={styles.pricingValue}>₹2900</Text>
              </View>
            </View>
          </TouchableOpacity>

        </ScrollView>
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.surface,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 16 : 32,
    paddingBottom: 16,
    borderBottomColor: palette.surfaceContainerHigh,
    backgroundColor: 'rgba(245, 246, 247, 0.9)',
    zIndex: 10,
  },
  headerProfileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: palette.surfaceContainerHigh,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: palette.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerTextContainer: {
    marginLeft: 12,
  },
  welcomeText: {
    fontSize: 12,
    fontWeight: '500',
    color: palette.onSurfaceVariant,
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: palette.primary,
    letterSpacing: -0.5,
  },
  notificationBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.surface,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40, // Reduced padding bottom since bottom navbar covers it anyway
  },
  searchCard: {
    backgroundColor: palette.surfaceContainerLowest,
    borderRadius: 24,
    padding: 24,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.04,
    shadowRadius: 32,
    elevation: 5,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 32,
  },
  searchCardDecoration: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(0, 88, 187, 0.05)',
  },
  searchCardContent: {
    gap: 20,
  },
  locationSection: {
    position: 'relative',
  },
  connectingLine: {
    position: 'absolute',
    left: 27,
    top: 36,
    bottom: 36,
    width: 2,
    borderLeftWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(171, 173, 174, 0.3)',
    zIndex: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.surfaceContainerLow,
    padding: 16,
    borderRadius: 16,
    zIndex: 10,
  },
  spacerSpacing: {
    height: 12, // vertical distance between inputs
  },
  inputInner: {
    flex: 1,
    marginLeft: 16,
  },
  inputLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: palette.primary,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  inputLabelTo: {
    fontSize: 10,
    fontWeight: '800',
    color: palette.onSurfaceVariant,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  textInput: {
    padding: 0,
    margin: 0,
    fontSize: 16,
    color: palette.onSurface,
  },
  dateOptionsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  dateContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.surfaceContainerLow,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '600',
    color: palette.onSurface,
    marginLeft: 12,
  },
  tuneButton: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.surfaceContainerLow,
    borderRadius: 16,
  },
  searchButton: {
    width: '100%',
    height: 64,
    backgroundColor: palette.primary,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: palette.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: palette.onSurface,
    letterSpacing: -0.5,
  },
  clearAllText: {
    color: palette.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  recentSearchesContainer: {
    gap: 12,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.surfaceContainerLow,
    padding: 16,
    borderRadius: 16,
  },
  historyIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: palette.surfaceContainerLowest,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentItemTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  recentItemTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: palette.onSurface,
  },
  recentItemSubtitle: {
    fontSize: 12,
    color: palette.onSurfaceVariant,
    marginTop: 2,
  },
  horizontalScroll: {
    marginHorizontal: -24,
  },
  horizontalContent: {
    paddingHorizontal: 24,
    gap: 16,
  },
  routeCard: {
    width: 280,
    backgroundColor: palette.surfaceContainerLowest,
    borderRadius: 16,
    padding: 20,
    shadowColor: palette.outlineVariant,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(171, 173, 174, 0.1)',
  },
  routeCardImageContainer: {
    height: 128,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 16,
  },
  routeCardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  badgeContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
  },
  routeCardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  routeCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: palette.onSurface,
    marginBottom: 2,
  },
  routeCardSubtitle: {
    fontSize: 12,
    color: palette.onSurfaceVariant,
  },
  routePricing: {
    alignItems: 'flex-end',
  },
  pricingLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: palette.onSurfaceVariant,
    letterSpacing: -0.5,
    marginBottom: 2,
  },
  pricingValue: {
    fontSize: 18,
    fontWeight: '900',
    color: palette.primary,
  },
  bottomSpacer: {
    height: 100, // Make room for the tab navigator
  }
});
