import { ShimmerProvider } from 'react-native-fast-shimmer';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AvatarShimmers } from '../../components/AvatarShimmers';
import { LongShimmers } from '../../components/LongShimmers';
import { ShimmerConfigs } from '../../components/ShimmerConfigs';

export default function ShimmersShowcase() {
  return (
    <SafeAreaView style={styles.container}>
      <ShimmerConfigs />
      <ShimmerProvider duration={3000}>
        <LongShimmers />
        <AvatarShimmers />
      </ShimmerProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    gap: 12,
    height: '100%',
    width: '100%',
  },
});
