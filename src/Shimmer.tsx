import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  type ViewStyle,
  Dimensions,
  type LayoutChangeEvent,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  type EasingFunction,
} from 'react-native-reanimated';
import { ShimmerContext } from './ShimmerContext';
import { MyLinearGradient } from './LinearGradient';

const DEFAULT_LINEAR_GRADIENTS = ['transparent', '#FFFFFFFF', 'transparent'];
const DEFAULT_GRADIENT_START = { x: 0, y: 0.5 };
const DEFAULT_GRADIENT_END = { x: 1, y: 0.5 };
const SCREEN_WIDTH = Dimensions.get('window').width;

interface ShimmerProps {
  style?: ViewStyle | ViewStyle[];
  linearGradients?: string[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
  easing?: EasingFunction;
  speed?: number;
}

export const Shimmer = ({
  style,
  linearGradients = DEFAULT_LINEAR_GRADIENTS,
  gradientStart = DEFAULT_GRADIENT_START,
  gradientEnd = DEFAULT_GRADIENT_END,
  easing = Easing.linear,
  speed = 1,
}: ShimmerProps): React.ReactNode => {
  const shimmer = useContext(ShimmerContext);

  const [offset, setOffset] = useState(0);
  const [componentWidth, setComponentWidth] = useState(0);

  useEffect(() => {
    shimmer?.increaseActiveShimmers();
    return () => {
      shimmer?.decreaseActiveShimmers();
    };
  }, [shimmer]);

  const measure = useCallback(
    (event: LayoutChangeEvent) => {
      if (componentWidth === 0) {
        event.target.measureInWindow((x, _y, width) => {
          setComponentWidth(width);
          setOffset(x);
        });
      }
    },
    [componentWidth]
  );

  const gradientStyle = useAnimatedStyle(() => {
    const localProgress = ((shimmer?.progress?.value ?? 0) * speed) % 1;
    const easedProgress = easing(localProgress);

    const remappedRange =
      -(componentWidth + offset) +
      ((SCREEN_WIDTH + componentWidth) * easedProgress) / 1;

    return {
      transform: [
        {
          translateX: remappedRange,
        },
      ],
    };
  });

  return (
    <View onLayout={measure} style={[styles.container, style]}>
      <Animated.View style={[gradientStyle, styles.gradientWrapper]}>
        <MyLinearGradient
          colors={shimmer?.gradientConfig?.colors ?? linearGradients}
          start={shimmer?.gradientConfig?.start ?? gradientStart}
          end={shimmer?.gradientConfig?.end ?? gradientEnd}
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
