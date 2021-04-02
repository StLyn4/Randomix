import { View, Text, Image } from 'react-native';
import { animated } from 'react-spring/renderprops-native';

import CodeBlock from '@/CodeBlock';

const AnimatedView = animated(View);
const AnimatedText = animated(Text);
const AnimatedImage = animated(Image);
const AnimatedCodeBlock = animated(CodeBlock);

export { AnimatedView, AnimatedText, AnimatedImage, AnimatedCodeBlock };
