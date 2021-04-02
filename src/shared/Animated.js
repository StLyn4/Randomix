import { View, Text } from 'react-native';
import { animated } from 'react-spring/renderprops-native';

import CodeBlock from '@/CodeBlock';
import CoinPlate from '@/CoinPlate';

const AnimatedView = animated(View);
const AnimatedText = animated(Text);
const AnimatedCodeBlock = animated(CodeBlock);
const AnimatedCoinPlate = animated(CoinPlate);

export { AnimatedView, AnimatedText, AnimatedCodeBlock, AnimatedCoinPlate };
