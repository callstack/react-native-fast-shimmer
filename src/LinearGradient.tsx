import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import type { ViewStyle, StyleProp } from 'react-native';

interface Props {
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export const MyLinearGradient = ({
  colors,
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 },
  style,
}: Props) => {
  const gradientId = 'grad';

  return (
    <Svg style={style}>
      <Defs>
        <LinearGradient
          id={gradientId}
          x1={start.x}
          y1={start.y}
          x2={end.x}
          y2={end.y}
        >
          {colors.map((color, i) => (
            <Stop
              key={i}
              offset={`${(i / (colors.length - 1)) * 100}%`}
              stopColor={color === 'transparent' ? 'white' : color}
              stopOpacity={color === 'transparent' ? 0 : 1}
            />
          ))}
        </LinearGradient>
      </Defs>
      <Rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${gradientId})`}
      />
    </Svg>
  );
};
