import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, StatusBar } from 'react-native';
import { Car } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const COLORS = {
  primary: '#0058bb',
  primaryLight: '#386cff',
  background: '#ffffff',
  textLight: '#ffffff',
};

const SplashScreen = ({ navigation }) => {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const textFadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Sequence of animations
    Animated.sequence([
      // 1. Logo fades and scales in
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
      // 2. Text softly fades in
      Animated.timing(textFadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // 3. Navigate to Onboarding after splash completes
    const timer = setTimeout(() => {
      navigation.replace('Onboarding'); // Using replace so they can't swipe back to Splash
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, fadeAnim, scaleAnim, textFadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      
      {/* Decorative blurred blobs in background */}
      <View style={[styles.blob, styles.blobTop]} />
      <View style={[styles.blob, styles.blobBottom]} />

      <View style={styles.centerContent}>
        {/* Animated Logo Container */}
        <Animated.View 
          style={[
            styles.logoWrapper, 
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }]
            }
          ]}
        >
          <View style={styles.iconContainer}>
            <Car size={56} color={COLORS.primary} />
          </View>
        </Animated.View>

        {/* Animated Text */}
        <Animated.View style={{ opacity: textFadeAnim, alignItems: 'center' }}>
          <Text style={styles.title}>RideNova</Text>
          <Text style={styles.subtitle}>Your Kinetic Sanctuary</Text>
        </Animated.View>
      </View>

      {/* Loading Footer */}
      <Animated.View style={[styles.footer, { opacity: textFadeAnim }]}>
        <View style={styles.loadingDot} />
      </Animated.View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  blob: {
    position: 'absolute',
    borderRadius: 400,
    backgroundColor: COLORS.primaryLight,
    opacity: 0.4,
  },
  blobTop: {
    width: width * 1.5,
    height: width * 1.5,
    top: -width * 0.8,
    left: -width * 0.2,
  },
  blobBottom: {
    width: width * 1.2,
    height: width * 1.2,
    bottom: -width * 0.6,
    right: -width * 0.4,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  logoWrapper: {
    marginBottom: 24,
  },
  iconContainer: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.background,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10,
  },
  title: {
    fontFamily: 'Plus Jakarta Sans', // Fallback to system font if not explicitly linked in native
    fontSize: 42,
    fontWeight: '900',
    color: COLORS.textLight,
    letterSpacing: -1,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.8)',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  footer: {
    position: 'absolute',
    bottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingDot: {
    width: 48,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
  }
});

export default SplashScreen;
