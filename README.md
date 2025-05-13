# react-native-fast-shimmer

Shimmer skeleton for loading placeholders

## Installation

```sh
npm install react-native-fast-shimmer
```

## Usage

```js
import { Shimmer, ShimmerProvider } from 'react-native-fast-shimmer';

export default function App() {
  return (
    <ShimmerProvider duration={1000}>
      <View>
        <Shimmer style={styles.shimmerMain} />
      </View>
      <View>
        <Shimmer style={styles.shimmerMain} />
      </View>
    </ShimmerProvider>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
