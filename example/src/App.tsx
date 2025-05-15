import { Shimmer, ShimmerProvider } from 'react-native-fast-shimmer';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Easing } from 'react-native-reanimated';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.configsContainer}>
        <View style={styles.configContainer}>
          <Text>Shared config</Text>
          <ShimmerProvider duration={3000}>
            <View style={styles.sharedConfigWrapper}>
              <View style={styles.shimmer}>
                <Shimmer style={styles.shimmerMain} />
              </View>
              <View style={styles.shimmer}>
                <Shimmer style={styles.shimmerMain} />
              </View>
              <View style={styles.shimmer}>
                <Shimmer style={styles.shimmerMain} />
              </View>
            </View>
          </ShimmerProvider>
        </View>
        <View style={styles.configContainer}>
          <Text>Individual override</Text>
          <ShimmerProvider duration={3000}>
            <View style={styles.sharedConfigWrapper}>
              <View style={styles.shimmer}>
                <Shimmer
                  gradientEnd={{ x: 0, y: 0 }}
                  gradientStart={{ x: 0.2, y: 0 }}
                  style={styles.shimmerMain}
                />
              </View>
              <View style={styles.shimmer}>
                <Shimmer
                  linearGradients={['#FF000000', '#0000FFFF', '#FF000000']}
                  style={styles.shimmerMain}
                />
              </View>
              <View style={styles.shimmer}>
                <Shimmer speed={2} style={styles.shimmerMain} />
              </View>
            </View>
          </ShimmerProvider>
        </View>
      </View>
      <View style={styles.longShimmers}>
        <ShimmerProvider duration={3000}>
          <View style={styles.easingShimmerContainer}>
            <Text>Linear</Text>
            <View style={[styles.shimmerMain, styles.longShimmer]}>
              <Shimmer easing={Easing.linear} />
            </View>
          </View>

          <View style={styles.easingShimmerContainer}>
            <Text>Ease</Text>
            <View style={[styles.shimmerMain, styles.longShimmer]}>
              <Shimmer easing={Easing.ease} />
            </View>
          </View>
          <View style={styles.easingShimmerContainer}>
            <Text>Cubic</Text>
            <View style={[styles.shimmerMain, styles.longShimmer]}>
              <Shimmer easing={Easing.cubic} />
            </View>
          </View>
          <View style={styles.easingShimmerContainer}>
            <Text>Circle</Text>
            <View style={[styles.shimmerMain, styles.longShimmer]}>
              <Shimmer easing={Easing.circle} />
            </View>
          </View>
          <View style={styles.avatarShimmers}>
            <View style={styles.avatarsContainer}>
              <View style={styles.avatarCircle}>
                <Shimmer easing={Easing.ease} />
              </View>
              <View style={styles.avatarCircle}>
                <Shimmer easing={Easing.ease} />
              </View>
              <View style={styles.avatarCircle}>
                <Shimmer easing={Easing.ease} />
              </View>
              <View style={styles.avatarCircle}>
                <Shimmer easing={Easing.ease} />
              </View>
              <View style={styles.avatarCircle}>
                <Shimmer easing={Easing.ease} />
              </View>
              <View style={styles.avatarCircle}>
                <Shimmer easing={Easing.ease} />
              </View>
            </View>
          </View>
        </ShimmerProvider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
  },
  configsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
  },
  configContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
  },
  sharedConfigWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  shimmer: {
    width: 200,
    height: 50,
  },
  longShimmer: {
    width: '100%',
    height: 50,
  },
  shimmerMain: {
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  avatarsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  avatarCircle: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    borderRadius: 50,
  },
  easingShimmerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  longShimmers: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  avatarShimmers: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
});
