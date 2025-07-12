import { View, Text, StyleSheet } from 'react-native';
import { Shimmer } from 'react-native-fast-shimmer';
import { Easing } from 'react-native-reanimated';

export const LongShimmers = () => {
  return (
    <View style={styles.longShimmers}>
      <View style={styles.easingShimmerContainer}>
        <Text style={styles.easingShimmerTitle}>Linear</Text>
        <View style={styles.longShimmer}>
          <Shimmer easing={Easing.linear} />
        </View>
      </View>

      <View style={styles.easingShimmerContainer}>
        <Text style={styles.easingShimmerTitle}>Ease</Text>
        <View style={styles.longShimmer}>
          <Shimmer easing={Easing.ease} />
        </View>
      </View>
      <View style={styles.easingShimmerContainer}>
        <Text style={styles.easingShimmerTitle}>Cubic</Text>
        <View style={styles.longShimmer}>
          <Shimmer easing={Easing.cubic} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  longShimmers: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  easingShimmerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  longShimmer: {
    backgroundColor: 'gray',
    borderRadius: 10,
    width: '100%',
    height: 50,
    overflow: 'hidden',
  },
  easingShimmerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
