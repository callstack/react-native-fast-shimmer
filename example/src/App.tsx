import { Shimmer, ShimmerProvider } from 'react-native-shimmer-skeleton';
import { View, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ShimmerProvider duration={1000}>
        <View style={styles.shimmer1}>
          <Shimmer style={styles.shimmerMain} />
        </View>
        <View style={styles.shimmer2}>
          <Shimmer style={styles.shimmerMain} />
        </View>
        <View style={styles.shimmer3}>
          <Shimmer style={styles.shimmerMain} />
        </View>
      </ShimmerProvider>
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
  shimmer1: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  shimmer2: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  shimmer3: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  shimmerMain: {
    borderRadius: 10,
  },
});
