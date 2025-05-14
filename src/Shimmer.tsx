import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { ShimmerContext } from './ShimmerContext';
import { MyLinearGradient } from './LinearGradient';

const DEFAULT_LINEAR_GRADIENTS = ['transparent', '#FFFFFF30', 'transparent'];
const DEFAULT_GRADIENT_START = { x: 0, y: 0.5 };
const DEFAULT_GRADIENT_END = { x: 1, y: 0.5 };

interface Props {
  style?: ViewStyle | ViewStyle[];
  linearGradients?: string[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
}

export const Shimmer = ({
  style,
  linearGradients = DEFAULT_LINEAR_GRADIENTS,
  gradientStart = DEFAULT_GRADIENT_START,
  gradientEnd = DEFAULT_GRADIENT_END,
}: Props): React.ReactNode => {
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
          colors={linearGradients}
          start={gradientStart}
          end={gradientEnd}
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
