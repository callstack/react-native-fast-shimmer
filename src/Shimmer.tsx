import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { ShimmerContext } from './ShimmerContext';
import { MyLinearGradient } from './LinearGradient';

interface Props {
  style?: ViewStyle | ViewStyle[];
}

export const Shimmer: React.FC<Props> = ({ style }) => {
  const shimmer = useContext(ShimmerContext);
  const shimmerRef = React.useRef<View>(null);
  const [offset, setOffset] = useState(0);
  const progress = shimmer?.progress;

  useEffect(() => {
    shimmer?.increaseActiveShimmers();
    return () => {
      shimmer?.decreaseActiveShimmers();
    };
  }, [shimmer]);

  const measure = () => {
    if (shimmerRef.current) {
      shimmerRef.current.measureInWindow((x) => {
        setOffset(x);
      });
    }
  };

  const gradientStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: (progress?.value ?? 0) - offset }],
    };
  });

  return (
    <View ref={shimmerRef} onLayout={measure} style={[styles.container, style]}>
      <Animated.View style={[gradientStyle, styles.gradientWrapper]}>
        <MyLinearGradient
          colors={['transparent', '#FFFFFF30', 'transparent']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  gradientWrapper: StyleSheet.absoluteFillObject,
});
