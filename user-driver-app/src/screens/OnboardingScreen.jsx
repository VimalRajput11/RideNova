import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  SafeAreaView, 
  Dimensions, 
  StatusBar 
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const palette = {
  primary: "#0058bb",
  onSurface: "#2c2f30",
  onSurfaceVariant: "#595c5d",
  surface: "#f5f6f7",
  surfaceContainerLow: "#eff1f2",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerHigh: "#e0e3e4",
  background: "#f5f6f7",
};

export default function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={palette.background} />
      
      <View style={styles.container}>
        
        {/* Visual Background Accents (Simulating Blur) */}
        <View style={[styles.bgBlob, styles.bgBlobTopRight]} />
        <View style={[styles.bgBlob, styles.bgBlobBottomLeft]} />

        {/* Header / Logo Area */}
        <View style={styles.header}>
          <MaterialIcons name="bubble-chart" size={32} color={palette.primary} />
          <Text style={styles.logoText}>RideNova</Text>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          
          {/* Hero Illustration: Asymmetric Card */}
          <View style={styles.heroContainer}>
            {/* Soft backdrop decorations */}
            <View style={styles.heroDecoTopLeft} />
            <View style={styles.heroDecoBottomRight} />

            <View style={styles.imageCard}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqpEkDWZs2TNqn-CL9w0H_OXjy4uTvlRv2GsF-RMyE4Ajg2tqJSX5hAdHEx-ofIsfTQYXel6-JgUa5KZEzUQtOOffSGDgM57HPZawWIBTFplunHPmDf8wc-S9GJnTZyKLmRMUmGbeoglXZ7iCVDEu2aD-EY2UZ8ZcGDyp2YDioCmlG9Yr9aAvf7Ja623zwTISyfRCASJnhQK_cnCfMjn1Sd2WLjYpHx4IKryESZKThIe5ABCYcXbUlE9hj8t0di1PuyG4jLgRwCqd2' }}
                style={styles.heroImage}
              />
              
              {/* Gradient Overlay Simulation */}
              <View style={styles.imageGradientOverlay} />

              {/* Floating Info Card (Glassmorphism) */}
              <View style={styles.floatingCard}>
                <View style={styles.driverImageContainer}>
                  <Image 
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcq6tV3xwUMIkcWY0m2b_NDSW4AA5ShZYfsBDx-YGJVY1-ftBOrxyUKeeA-45Nn1h9alYdAAZii5R5ok0p4zCAO-4LsI10wnfxtpb0Gr1eKcFjcz85s1mTqaNXTeYCjdKh8kSH6dA5DWzgd-IDTG2epUGMK8eU3sxHOVysGQlF-o24iZgLI1M-U2KLEMbje3_exYyJQk3gB7BWoRrk_TUld0tmO8rJMm_b0Oad7dptYOcvcIuNLQxuwgoHpdx2raZzJ_FVea7fsK34' }}
                    style={styles.driverImage}
                  />
                </View>

                <View style={styles.floatingCardTextContainer}>
                  <Text style={styles.floatingCardLabel}>TOP RATED PARTNER</Text>
                  <Text style={styles.floatingCardTitle}>Alex is 2 mins away</Text>
                </View>

                <View style={styles.ratingContainer}>
                  <MaterialIcons name="star" size={16} color={palette.primary} />
                  <Text style={styles.ratingText}>4.9</Text>
                </View>
              </View>

            </View>
          </View>

          {/* Typography Section */}
          <View style={styles.typographySection}>
            <Text style={styles.headline}>
              Travel Together, {'\n'}
              <Text style={styles.headlineHighlight}>Save More</Text>
            </Text>
            <Text style={styles.bodyText}>
              Find rides or offer seats for your journey. Join a community of over 2M+ commuters.
            </Text>
          </View>

        </View>

        {/* Footer Actions */}
        <View style={styles.footer}>
          {/* Primary CTA */}
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Signup')} // Assuming routing logic
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>

          {/* Secondary Action */}
          <View style={styles.secondaryActionContainer}>
            <Text style={styles.secondaryActionText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* Progress Indicator */}
          <View style={styles.progressContainer}>
            <View style={[styles.progressDot, styles.progressDotActive]} />
            <View style={styles.progressDot} />
            <View style={styles.progressDot} />
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.background,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    overflow: 'hidden',
  },
  bgBlob: {
    position: 'absolute',
    borderRadius: 999,
  },
  bgBlobTopRight: {
    top: 80,
    right: -80,
    width: 256,
    height: 256,
    backgroundColor: 'rgba(108, 159, 255, 0.05)',
  },
  bgBlobBottomLeft: {
    bottom: 0,
    left: -80,
    width: 320,
    height: 320,
    backgroundColor: 'rgba(243, 156, 251, 0.05)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: '100%',
    paddingTop: 16,
    zIndex: 10,
  },
  logoText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 24,
    fontWeight: '900',
    color: palette.primary,
    letterSpacing: -0.5,
    marginLeft: 8,
  },
  mainContent: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContainer: {
    width: '100%',
    aspectRatio: 1,
    maxWidth: 340,
    position: 'relative',
    marginBottom: 48,
  },
  heroDecoTopLeft: {
    position: 'absolute',
    top: -16,
    left: -16,
    width: 192,
    height: 192,
    backgroundColor: 'rgba(0, 88, 187, 0.1)',
    borderRadius: 96,
  },
  heroDecoBottomRight: {
    position: 'absolute',
    bottom: -32,
    right: -16,
    width: 224,
    height: 224,
    backgroundColor: 'rgba(56, 83, 183, 0.1)',
    borderRadius: 112,
  },
  imageCard: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: palette.surfaceContainerLow,
    shadowColor: palette.onSurface,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.05,
    shadowRadius: 32,
    elevation: 4,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageGradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: 'rgba(0, 88, 187, 0.15)',
  },
  floatingCard: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  driverImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
    marginRight: 16,
  },
  driverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  floatingCardTextContainer: {
    flex: 1,
  },
  floatingCardLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: palette.onSurfaceVariant,
    opacity: 0.8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  floatingCardTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: palette.onSurface,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '800',
    color: palette.primary,
  },
  typographySection: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  headline: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '800',
    color: palette.onSurface,
    lineHeight: 40,
    marginBottom: 16,
  },
  headlineHighlight: {
    color: palette.primary,
  },
  bodyText: {
    textAlign: 'center',
    fontSize: 16,
    color: palette.onSurfaceVariant,
    lineHeight: 24,
    paddingHorizontal: 8,
  },
  footer: {
    width: '100%',
    maxWidth: 500,
    paddingHorizontal: 32,
    paddingBottom: 48,
    alignItems: 'center',
  },
  primaryButton: {
    width: '100%',
    backgroundColor: palette.primary,
    paddingVertical: 18,
    borderRadius: 999,
    alignItems: 'center',
    shadowColor: palette.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
    marginBottom: 24,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  secondaryActionContainer: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  secondaryActionText: {
    fontSize: 14,
    fontWeight: '500',
    color: palette.onSurfaceVariant,
  },
  loginText: {
    fontSize: 14,
    fontWeight: '800',
    color: palette.primary,
    paddingVertical: 8, // Increase touch target
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    paddingTop: 16,
  },
  progressDot: {
    height: 4,
    width: 8,
    borderRadius: 4,
    backgroundColor: palette.surfaceContainerHigh,
  },
  progressDotActive: {
    width: 32,
    backgroundColor: palette.primary,
  },
});
