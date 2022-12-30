/**
 * @license StickerSmash
 *
 * Copyright (c) YtechGod.
 * Copyright (c) Onyerikam.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                                                          //
// CONTRIBUTING: Pls suggest new update to the app and even give us codes that can be added to make it better. To contribute: https://uplink.mn.co/landing and https://github.com/Onyerikam //
//                                                                                                                                                                                          //
// CREDITS: This work is based on an original work made by Onyerikam: https://github.com/Onyerikam                                                                                          //
//                                                                                                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Dependencies Import
*/

import { View, Image } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';

// Using reanimated to declear constants
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedView = Animated.createAnimatedComponent(View);

/** Exporting our @function <EmojiSticker /> as a function */
export default function EmojiSticker({ imageSize, stickerSource }) {
  
  /**
   * A little maths and logic here don't get confused ¯\_(ツ)_/¯
   * translate X and Y is for the axis X and Y like in a graph
   * scaleImage is using a shared value of the imageSize
   * onDoubleTap is for two taps, onActive will be implemented if it is the original scaleImage value, then we times it by two if it is
   * imageStyle is for the animatedStyle with a width and a height of the scaledImage value which was already multiplied by two
   * onDrag is using an animatedGestureHandler to start, activate/check if active. If started it will check the translateX and Y value and if active it will add the event of the X and Y with the context to increase the size of the emoji
   * containerStyle is used to return a transformed translateX and Y value which has gone through a lot of maths and physics
   * and it returns the PanGesture and Animated View no longer the view and the properties passed
   * Thats it. Now you get the logic. Happy coding 😊.
   * .then => if (understood) => DELETE ME!!! else => throw (error) => alert("Do not understand!!!");
  */

  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value) {
        scaleImage.value = scaleImage.value * 2;
      }
    },
  });
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });
  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
  });
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onDrag}>
    <AnimatedView style={[containerStyle, { top: -350 }]}>
      <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
      <AnimatedImage
        source={stickerSource}
        resizeMode="contain"
        style={[imageStyle, { width: imageSize, height: imageSize }]}
        />
      </TapGestureHandler>
    </AnimatedView>
   </PanGestureHandler>
  );
}