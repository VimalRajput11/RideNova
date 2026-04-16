import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, ScrollView, 
  TouchableOpacity, Image, TextInput, Dimensions, Platform, StatusBar
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

const PublishRideScreen = ({ navigation }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [seats, setSeats] = useState(3);
  const [price, setPrice] = useState('');
  const [carModel, setCarModel] = useState('Maruti Suzuki Dzire');
  const [carColor, setCarColor] = useState('White');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState(['AC', 'Music']);
  const [vehicleImage, setVehicleImage] = useState(null);

  const toggleFeature = (feature) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const incrementSeats = () => { if(seats < 8) setSeats(seats + 1) };
  const decrementSeats = () => { if(seats > 1) setSeats(seats - 1) };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(245, 246, 247, 0.95)" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitleGroup}>
          <Text style={styles.headerSubtitle}>SHARE THE ROAD</Text>
          <Text style={styles.headerTitle}>Publish Ride</Text>
        </View>
        <TouchableOpacity style={styles.headerIconBtn}>
          <MaterialIcons name="info-outline" size={24} color={palette.onSurfaceVariant} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Section: Route Configuration (Itinerary Style) */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Route Details</Text>
          <View style={styles.itineraryLineContainer}>
            <View style={styles.verticalLinkLine} />
            
            <View style={styles.itineraryItem}>
              <View style={styles.markerOutline} />
              <View style={styles.inputStack}>
                <Text style={styles.inputLabel}>PICKUP LOCATION</Text>
                <TextInput 
                  style={styles.textInput}
                  placeholder="Where are you leaving from?"
                  placeholderTextColor={palette.outlineVariant}
                  value={from}
                  onChangeText={setFrom}
                />
              </View>
            </View>

            <View style={[styles.itineraryItem, { marginTop: 32 }]}>
              <View style={[styles.markerOutline, { borderColor: palette.secondary }]} />
              <View style={styles.inputStack}>
                <Text style={styles.inputLabel}>DROP-OFF DESTINATION</Text>
                <TextInput 
                  style={styles.textInput}
                  placeholder="Where are you going to?"
                  placeholderTextColor={palette.outlineVariant}
                  value={to}
                  onChangeText={setTo}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Section: Date & Time Bento Row */}
        <View style={styles.bentoRow}>
          <View style={[styles.bentoCard, { flex: 1.2 }]}>
            <MaterialIcons name="calendar-today" size={20} color={palette.primary} />
            <Text style={styles.bentoLabel}>DATE</Text>
            <TextInput 
              style={styles.bentoInput}
              placeholder="Oct 24, 2024"
              placeholderTextColor={palette.outlineVariant}
              value={date}
              onChangeText={setDate}
            />
          </View>
          <View style={[styles.bentoCard, { flex: 0.8 }]}>
            <MaterialIcons name="access-time" size={20} color={palette.tertiary} />
            <Text style={styles.bentoLabel}>TIME</Text>
            <TextInput 
              style={styles.bentoInput}
              placeholder="09:00 AM"
              placeholderTextColor={palette.outlineVariant}
              value={time}
              onChangeText={setTime}
            />
          </View>
        </View>

        {/* Section: Seats & Pricing Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          <View style={styles.optionRow}>
            <View>
              <Text style={styles.optionMain}>Available Seats</Text>
              <Text style={styles.optionSub}>Max capacity: 8 passengers</Text>
            </View>
            <View style={styles.counterContainer}>
              <TouchableOpacity style={styles.counterBtn} onPress={decrementSeats}>
                <MaterialIcons name="remove" size={20} color={palette.onSurface} />
              </TouchableOpacity>
              <Text style={styles.counterText}>{seats}</Text>
              <TouchableOpacity style={[styles.counterBtn, { backgroundColor: palette.primary }]} onPress={incrementSeats}>
                <MaterialIcons name="add" size={20} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.priceDivider} />

          <View style={styles.priceInputSection}>
            <Text style={styles.inputLabel}>PRICE PER SEAT</Text>
            <View style={styles.priceInputWrapper}>
              <Text style={styles.currency}>₹</Text>
              <TextInput 
                style={styles.priceInput}
                placeholder="450"
                placeholderTextColor={palette.outlineVariant}
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
              />
            </View>
          </View>
        </View>

        {/* Section: Trip Features */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Trip Features</Text>
          <View style={styles.featuresList}>
            {['AC', 'Music', 'No Smoking', 'Pet Friendly', 'Luggage Space'].map((feat, index) => {
              const isActive = selectedFeatures.includes(feat);
              let iconName = 'ac-unit';
              if (feat === 'Music') iconName = 'music-note';
              if (feat === 'No Smoking') iconName = 'smoke-free';
              if (feat === 'Pet Friendly') iconName = 'pets';
              if (feat === 'Luggage Space') iconName = 'work';

              return (
                <TouchableOpacity 
                  key={index} 
                  style={[styles.featureTag, isActive && styles.featureTagActive]}
                  onPress={() => toggleFeature(feat)}
                >
                  <MaterialIcons 
                    name={iconName} 
                    size={18} 
                    color={isActive ? '#ffffff' : palette.onSurfaceVariant} 
                  />
                  <Text style={[styles.featureText, isActive && styles.featureTextActive]}>{feat}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Section: Vehicle Details Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Vehicle Details</Text>
          
          {/* Photo Upload Area */}
          <TouchableOpacity 
            style={styles.photoUploadArea} 
            onPress={() => setVehicleImage('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000')}
          >
            {vehicleImage ? (
              <View style={styles.uploadedContainer}>
                <Image source={{ uri: vehicleImage }} style={styles.uploadedImage} />
                <View style={styles.uploadOverlay}>
                  <MaterialIcons name="edit" size={20} color="#ffffff" />
                  <Text style={styles.uploadOverlayText}>Change Photo</Text>
                </View>
              </View>
            ) : (
              <>
                <View style={styles.uploadIconCircle}>
                  <MaterialIcons name="add-a-photo" size={28} color={palette.primary} />
                </View>
                <Text style={styles.uploadTitle}>Upload Vehicle Photo</Text>
                <Text style={styles.uploadSubtitle}>PNG, JPG up to 10MB</Text>
              </>
            )}
          </TouchableOpacity>

          <View style={styles.vehicleStack}>
            <View style={styles.vInputGroup}>
              <View style={styles.vIconBox}>
                <MaterialIcons name="directions-car" size={20} color={palette.onSurfaceVariant} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.vLabel}>CAR MODEL</Text>
                <TextInput 
                  style={styles.vInput}
                  value={carModel}
                  onChangeText={setCarModel}
                  placeholder="e.g. Maruti Suzuki Dzire"
                />
              </View>
            </View>
            <View style={styles.vDivider} />
            <View style={styles.vInputGroup}>
              <View style={styles.vIconBox}>
                <MaterialIcons name="palette" size={20} color={palette.onSurfaceVariant} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.vLabel}>COLOR</Text>
                <TextInput 
                  style={styles.vInput}
                  value={carColor}
                  onChangeText={setCarColor}
                  placeholder="e.g. White"
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 200 }} />
      </ScrollView>

      {/* Sticky Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.publishBtn} activeOpacity={0.9}>
          <Text style={styles.publishBtnText}>Publish Ride</Text>
          <MaterialIcons name="check-circle" size={20} color="#ffffff" style={{ marginLeft: 8 }} />
        </TouchableOpacity>
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
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 246, 247, 0.95)',
  },
  headerTitleGroup: {
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '800',
    color: palette.primary,
    letterSpacing: 2,
    marginBottom: 4,
  },
  headerTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 28,
    fontWeight: '900',
    color: palette.onSurface,
    letterSpacing: -0.5,
  },
  headerIconBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: palette.surfaceContainerLow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  card: {
    backgroundColor: palette.surfaceContainerLowest,
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 4,
  },
  sectionTitle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: '800',
    color: palette.onSurface,
    marginBottom: 20,
  },
  itineraryLineContainer: {
    paddingLeft: 34,
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
    alignItems: 'flex-start',
    position: 'relative',
  },
  markerOutline: {
    position: 'absolute',
    left: -34,
    top: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 4,
    borderColor: palette.primary,
    backgroundColor: '#ffffff',
    zIndex: 10,
  },
  inputStack: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: palette.onSurfaceVariant,
    letterSpacing: 1.5,
    marginBottom: 8,
    marginLeft: 4,
  },
  textInput: {
    backgroundColor: palette.surfaceContainerLow,
    height: 52,
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
    fontWeight: '600',
    color: palette.onSurface,
  },
  bentoRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  bentoCard: {
    backgroundColor: palette.surfaceContainerLowest,
    borderRadius: 24,
    padding: 20,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 4,
  },
  bentoLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: palette.onSurfaceVariant,
    letterSpacing: 1.5,
    marginTop: 12,
    marginBottom: 4,
  },
  bentoInput: {
    fontSize: 16,
    fontWeight: '800',
    color: palette.onSurface,
    padding: 0,
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
    color: palette.onSurfaceVariant,
    marginTop: 2,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.surfaceContainerLow,
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
  priceDivider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
    marginVertical: 20,
  },
  priceInputSection: {
  },
  priceInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.surfaceContainerLow,
    borderRadius: 16,
    height: 56,
    marginTop: 8,
    paddingHorizontal: 16,
  },
  currency: {
    fontSize: 20,
    fontWeight: '900',
    color: palette.primary,
    marginRight: 8,
  },
  priceInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    color: palette.onSurface,
  },
  vehicleStack: {
    backgroundColor: palette.surfaceContainerLow,
    borderRadius: 20,
    overflow: 'hidden',
  },
  vInputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
  vIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: palette.surfaceContainerLowest,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: palette.onSurfaceVariant,
    letterSpacing: 1,
    marginBottom: 2,
  },
  vInput: {
    fontSize: 15,
    fontWeight: '800',
    color: palette.onSurface,
    padding: 0,
  },
  vDivider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
    marginHorizontal: 16,
  },
  photoUploadArea: {
    height: 180,
    backgroundColor: palette.surfaceContainerLow,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.05)',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  uploadIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(0, 88, 187, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  uploadTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: palette.onSurface,
  },
  uploadSubtitle: {
    fontSize: 12,
    color: palette.onSurfaceVariant,
    marginTop: 4,
  },
  uploadedContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  uploadOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  uploadOverlayText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
  featuresList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  featureTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: palette.surfaceContainerLow,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  featureTagActive: {
    backgroundColor: palette.primary,
    borderColor: palette.primary,
  },
  featureText: {
    fontSize: 14,
    fontWeight: '600',
    color: palette.onSurface,
  },
  featureTextActive: {
    color: '#ffffff',
    fontWeight: '800',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 90, // Match tab bar offset from other screens
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 20,
    backgroundColor: 'rgba(245, 246, 247, 0.95)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: -12 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 20,
    zIndex: 1000,
  },
  publishBtn: {
    flexDirection: 'row',
    backgroundColor: palette.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: palette.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  publishBtnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  }
});

export default PublishRideScreen;
