<a href="https://www.callstack.com/open-source?utm_campaign=generic&utm_source=github&utm_medium=referral&utm_content=fast-shimmer" align="center">
  <picture>
    <img alt="React Native Fast Shimmer" src="https://github.com/user-attachments/assets/6535ab95-8c4a-4c91-a2ec-ccd463a02caf">
  </picture>
</a>

[![mit licence][license-badge]][license]
[![npm][npm]][npm-url]

Easy way to add shimmer placeholders that conform to parent component size and continuosly animate between children.

| Android                                      | iOS                              |
| -------------------------------------------- | -------------------------------- |
| ![android](./docs/android.gif 'Android gif') | ![ios](./docs/ios.gif 'iOS gif') |

## Getting Started

This library requires [reanimated](https://docs.swmansion.com/react-native-reanimated/) and [react-native-svg](https://github.com/software-mansion/react-native-svg)

```sh
npm install react-native-fast-shimmer react-native-reanimated react-native-svg
```

## Usage

```js
import { Shimmer, ShimmerProvider } from 'react-native-fast-shimmer';
import { Easing } from 'react-native-reanimated';

export default function App() {
  return (
    <ShimmerProvider duration={1000}>
      <View>
        <Shimmer style={styles.shimmerMain} easing={Easing.linear} speed={1} />
      </View>
    </ShimmerProvider>
  );
}
```

## Props

#### `Shimmer` Component

| Prop              | Type                          | Default                                       | Description                                             |
| ----------------- | ----------------------------- | --------------------------------------------- | ------------------------------------------------------- |
| `style`           | `ViewStyle` or `ViewStyle[]`  | `undefined`                                   | Custom styles for the Shimmer container.                |
| `linearGradients` | `string[]`                    | `['transparent', '#FFFFFF30', 'transparent']` | Array of colors for the linear gradient animation.      |
| `easing`          | `EasingFunction` (reanimated) | `Easing.linear`                               | Easing for shimmer time interpolation                   |
| `speed`           | `number`                      | `1`                                           | Speed param for multiplying speed of individual shimmer |
| `gradientStart`   | `{ x: number; y: number }`    | `{ x: 0, y: 0.5 }`                            | Start coordinates for the linear gradient.              |
| `gradientEnd`     | `{ x: number; y: number }`    | `{ x: 1, y: 0.5 }`                            | End coordinates for the linear gradient.                |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

## Made with ❤️ at Callstack

react-native-fast-shimmer is an open source project and will always remain free to use. If you think it's cool, please star it 🌟. [Callstack][callstack-readme-with-love] is a group of React and React Native geeks, contact us at [hello@callstack.com](mailto:hello@callstack.com) if you need any help with these or just want to say hi!

<!-- badges -->

[callstack-readme-with-love]: https://callstack.com/?utm_source=github.com&utm_medium=referral&utm_campaign=fast-shimmers&utm_term=readme-with-love
[license-badge]: https://img.shields.io/npm/l/react-native-fast-shimmer?style=for-the-badge
[license]: https://github.com/callstack/react-native-fast-shimmer/blob/main/LICENSE
[npm-url]: https://npmjs.com/package/react-native-fast-shimmer
[npm]: https://img.shields.io/npm/v/react-native-fast-shimmer?style=for-the-badge
