import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES, SHADOWS } from '../theme/theme';

const RideCard = ({ ride, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.card} onPress={onPress}>
      {/* Route Info */}
      <View style={styles.routeContainer}>
        <View style={styles.timePlace}>
          <Text style={styles.time}>{ride.time}</Text>
          <Text style={styles.place}>{ride.from}</Text>
        </View>
        <View style={styles.routeLine}>
          <Icon name="ray-start-arrow" size={16} color={COLORS.primary} />
          <View style={styles.line} />
          <Icon name="map-marker" size={16} color={COLORS.primary} />
        </View>
        <View style={styles.timePlace}>
          <Text style={styles.time}>{ride.duration}</Text>
          <Text style={styles.place}>{ride.to}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Driver Info */}
      <View style={styles.driverContainer}>
        <View style={styles.driverLeft}>
          <Image source={{ uri: ride.driver.avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.driverName}>{ride.driver.name}</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={14} color={COLORS.warning} />
              <Text style={styles.ratingText}>{ride.driver.rating}</Text>
            </View>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{ride.price}</Text>
          <Text style={styles.seatsLeft}>{ride.seatsLeft} seats left</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.cardRadius,
    padding: SIZES.large,
    marginBottom: SIZES.medium,
    ...SHADOWS.light,
  },
  routeContainer: {
    marginBottom: SIZES.medium,
  },
  timePlace: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.small,
  },
  time: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    width: 80,
  },
  place: {
    fontSize: 16,
    fontWeight: '500',
    color: '#334155',
  },
  routeLine: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 28,
    marginVertical: 4,
  },
  line: {
    width: 2,
    height: 30,
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 8,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.lightGray,
    marginVertical: SIZES.small,
  },
  driverContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.small,
  },
  driverLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: SIZES.small,
  },
  driverName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  ratingText: {
    fontSize: 13,
    color: COLORS.gray,
    marginLeft: 4,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },
  seatsLeft: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 2,
  }
});

export default RideCard;
