import React from 'react';
import { 
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform, Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { userProfile } from '../data/dummyData'; // We will keep this import for potential use, but use static data for the UI match

const { width } = Dimensions.get('window');

const palette = {
  primary: '#0058bb',
  primaryContainer: '#6c9fff',
  onSurface: '#2c2f30',
  onSurfaceVariant: '#595c5d',
  surface: '#f5f6f7',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#eff1f2',
  surfaceContainerHigh: '#e0e3e4',
  outlineVariant: '#abadae',
  error: '#b31b25',
  errorContainer: '#fb5151',
};

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* TopAppBar */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Hero Section: User Profile */}
        <View style={styles.heroSection}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarContainer}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5XSf6ppgCVm1dyksPZ9GpRuzux9CWc80Ts8rbKp4igQrERg64edUbYovR3swQXOuu-ZIJRjNrI-5jNDdEEwme8hOf0FXprqiGPNJs--FonCbH2U85dtt9BCyu6kASD3DrvAK8X1Tg1Pq4-WTLYcQUQawheOZC_mCM1j_sub-9XLDDo6pmw0iTI4mLiQ7rqvUuXdum5oFhCLaOi87ydIhQX1VE0mNMMIF_MeiYjRpMTuEuZ-a-9kE68gmaEj4qdm1qOnK1Tt8bmqD' }} 
                style={styles.avatar} 
              />
            </View>
            <View style={styles.verifiedBadge}>
              <MaterialIcons name="verified" size={14} color="#ffffff" />
            </View>
          </View>
          
          <Text style={styles.userName}>Rahul Sharma</Text>
          
          <View style={styles.statsPill}>
            <MaterialIcons name="star" size={18} color="#f59e0b" />
            <Text style={styles.ratingText}>4.9</Text>
            <View style={styles.statsDivider} />
            <Text style={styles.ridesText}>(128 rides)</Text>
          </View>
        </View>

        {/* Profile Options Grid */}
        <View style={styles.optionsSection}>
          
          {/* My Rides Card */}
          <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate('Bookings')}>
            <View style={styles.optionLeft}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(108, 159, 255, 0.2)' }]}>
                <MaterialIcons name="receipt-long" size={24} color={palette.primary} />
              </View>
              <View>
                <Text style={styles.optionTitle}>My Rides</Text>
                <Text style={styles.optionSubtitle}>View your trip history</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={palette.outlineVariant} />
          </TouchableOpacity>

          {/* Payment Methods Card */}
          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.optionLeft}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(108, 159, 255, 0.2)' }]}>
                <MaterialIcons name="account-balance-wallet" size={24} color={palette.primary} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Payment Methods</Text>
                <Text style={styles.optionSubtitle}>Manage your cards & wallet</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={palette.outlineVariant} />
          </TouchableOpacity>

          {/* Settings Card */}
          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.optionLeft}>
              <View style={[styles.iconBox, { backgroundColor: palette.surfaceContainerHigh }]}>
                <MaterialIcons name="tune" size={24} color={palette.onSurfaceVariant} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Settings</Text>
                <Text style={styles.optionSubtitle}>Preferences and privacy</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={palette.outlineVariant} />
          </TouchableOpacity>

          {/* Divider/Space */}
          <View style={styles.horizontalDivider} />

          {/* Logout */}
          <TouchableOpacity 
            style={[styles.optionCard, { shadowOpacity: 0.02 }]}
            onPress={() => navigation.navigate('Login')}
          >
            <View style={styles.optionLeft}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(251, 81, 81, 0.1)' }]}>
                <MaterialIcons name="logout" size={24} color={palette.error} />
              </View>
              <View>
                <Text style={[styles.optionTitle, { color: palette.error }]}>Logout</Text>
                <Text style={[styles.optionSubtitle, { opacity: 0.6 }]}>Sign out of your account</Text>
              </View>
            </View>
          </TouchableOpacity>

        </View>

        {/* Loyalty Badge (Premium Design Touch) */}
        <View style={styles.loyaltyBadge}>
          <View style={styles.loyaltyTextContainer}>
            <Text style={styles.loyaltyTitle}>RideNova Platinum</Text>
            <Text style={styles.loyaltySubtitle}>You're 3 rides away from your next reward!</Text>
          </View>
          <View style={styles.loyaltyIconBox}>
            <MaterialIcons name="workspace-premium" size={24} color="#ffffff" />
          </View>
        </View>

        {/* Bottom padding for tab bar */}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    height: 64,
    backgroundColor: 'rgba(245, 246, 247, 0.9)',
    zIndex: 50,
  },
  iconBtn: {
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
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
    alignItems: 'center',
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 16,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  avatarContainer: {
    width: 128,
    height: 128,
    borderRadius: 64,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: palette.surfaceContainerLowest,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: palette.primary,
    padding: 6,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: palette.surfaceContainerLowest,
  },
  userName: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 28,
    fontWeight: '800',
    color: palette.onSurface,
    letterSpacing: -0.5,
  },
  statsPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.surfaceContainerLow,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    marginTop: 12,
  },
  ratingText: {
    fontWeight: '700',
    fontSize: 14,
    color: palette.onSurface,
    marginLeft: 6,
  },
  statsDivider: {
    width: 1,
    height: 16,
    backgroundColor: palette.outlineVariant,
    marginHorizontal: 12,
  },
  ridesText: {
    fontSize: 14,
    fontWeight: '500',
    color: palette.onSurfaceVariant,
  },
  optionsSection: {
    width: '100%',
    maxWidth: 400,
    gap: 16,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: palette.surfaceContainerLowest,
    padding: 20,
    borderRadius: 24,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.04,
    shadowRadius: 32,
    elevation: 3,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '700',
    color: palette.onSurface,
    marginBottom: 2,
  },
  optionSubtitle: {
    fontSize: 12,
    color: palette.onSurfaceVariant,
  },
  horizontalDivider: {
    height: 1,
    backgroundColor: palette.surfaceContainerHigh,
    marginHorizontal: 32,
    marginVertical: 8,
  },
  loyaltyBadge: {
    width: '100%',
    maxWidth: 400,
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: palette.primary,
    padding: 24,
    borderRadius: 24,
    shadowColor: palette.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 8,
  },
  loyaltyTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  loyaltyTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  loyaltySubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 18,
  },
  loyaltyIconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
