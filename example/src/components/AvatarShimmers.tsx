import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { Shimmer, ShimmerProvider } from 'react-native-fast-shimmer';

export const AvatarShimmers = () => {
  const { width } = useWindowDimensions();
  const avatarCircleSize = width * 0.25;
  const avatarCircleStyle = {
    width: avatarCircleSize,
    height: avatarCircleSize,
  };
  return (
    <View style={styles.avatarShimmers}>
      <View style={styles.avatarsContainer}>
        <View style={[styles.avatarCircle, avatarCircleStyle]}>
          <Shimmer />
        </View>
        <View style={[styles.avatarCircle, avatarCircleStyle]}>
          <Shimmer />
        </View>
        <View style={[styles.avatarCircle, avatarCircleStyle]}>
          <Shimmer />
        </View>
        <ShimmerProvider duration={2000}>
          <View style={[styles.avatarCircle, avatarCircleStyle]}>
            <Shimmer easing={Easing.ease} />
          </View>
          <View style={[styles.avatarCircle, avatarCircleStyle]}>
            <Shimmer easing={Easing.ease} />
          </View>
          <View style={[styles.avatarCircle, avatarCircleStyle]}>
            <Shimmer easing={Easing.ease} />
          </View>
        </ShimmerProvider>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarShimmers: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  avatarsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    width: '100%',
    justifyContent: 'space-around',
  },
  avatarCircle: {
    backgroundColor: 'gray',
    borderRadius: 100,
    overflow: 'hidden',
  },
});
