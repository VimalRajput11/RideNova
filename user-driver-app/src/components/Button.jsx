import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../theme/theme';

const Button = ({ title, onPress, type = 'primary', style }) => {
  const isPrimary = type === 'primary';
  const isOutline = type === 'outline';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.button,
        isPrimary && styles.primary,
        isOutline && styles.outline,
        style
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.text,
        isPrimary && styles.textPrimary,
        isOutline && styles.textOutline
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.large,
    ...SHADOWS.light,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    elevation: 0,
    shadowOpacity: 0
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textPrimary: {
    color: COLORS.white,
  },
  textOutline: {
    color: COLORS.primary,
  }
});

export default Button;
