## Getting Started

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

## Made with ❤️ at Callstack

react-native-fast-shimmer is an open source project and will always remain free to use. If you think it's cool, please star it 🌟. [Callstack][callstack-readme-with-love] is a group of React and React Native geeks, contact us at [hello@callstack.com](mailto:hello@callstack.com) if you need any help with these or just want to say hi!
