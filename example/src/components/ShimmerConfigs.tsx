import { View, Text, StyleSheet } from 'react-native';
import { Shimmer, ShimmerProvider } from 'react-native-fast-shimmer';

export const ShimmerConfigs = () => {
  return (
    <View style={styles.configsContainer}>
      <View style={styles.configContainer}>
        <Text style={styles.configTitle}>Shared config</Text>
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
        <Text style={styles.configTitle}>Individual override</Text>
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
  );
};

const styles = StyleSheet.create({
  configsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  configTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  configContainer: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flex: 1,
  },
  sharedConfigWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  shimmer: {
    width: '100%',
    height: 50,
  },
  shimmerMain: {
    backgroundColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
