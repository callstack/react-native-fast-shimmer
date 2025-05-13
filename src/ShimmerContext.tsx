import {
  createContext,
  useEffect,
  useState,
  type FunctionComponent,
} from 'react';
import {
  cancelAnimation,
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

interface ShimmerContextType {
  progress: SharedValue<number>;
  increaseActiveShimmers: () => void;
  decreaseActiveShimmers: () => void;
}

const ShimmerContext = createContext<ShimmerContextType | null>(null);

interface ShimmerProviderProps {
  children?: React.ReactNode;
  duration?: number;
}

const ShimmerProvider: FunctionComponent<ShimmerProviderProps> = ({
  children,
  duration = 3000,
}) => {
  const [activeShimmers, setActiveShimmers] = useState(0);
  const [isShimmerActive, setIsShimmerActive] = useState(false);
  const progress = useSharedValue(-300);

  useEffect(() => {
    if (!isShimmerActive && activeShimmers > 0) {
      setIsShimmerActive(true);
      progress.value = -300;
      progress.value = withRepeat(
        withTiming(300, {
          duration: duration,
          easing: Easing.ease,
        }),
        -1,
        false
      );
    }

    if (isShimmerActive && activeShimmers === 0) {
      cancelAnimation(progress);
      setIsShimmerActive(false);
    }
  }, [activeShimmers, isShimmerActive, progress, duration]);

  const increaseActiveShimmers = () => {
    setActiveShimmers((prev) => prev + 1);
  };

  const decreaseActiveShimmers = () => {
    setActiveShimmers((prev) => Math.max(prev - 1, 0));
  };

  return (
    <ShimmerContext.Provider
      value={{ progress, increaseActiveShimmers, decreaseActiveShimmers }}
    >
      {children}
    </ShimmerContext.Provider>
  );
};
export { ShimmerContext, ShimmerProvider };
