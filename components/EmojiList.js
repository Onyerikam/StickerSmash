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

import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';

/** Exporting our @function <EmojiList /> as a function */
export default function EmojiList({ onSelect, onCloseModal }) {
  // Retriving our const emojis, we only used 6 but you can add more is you want.
  const [emoji] = useState([
    require('../assets/images/emoji1.png'),
    require('../assets/images/emoji2.png'),
    require('../assets/images/emoji3.png'),
    require('../assets/images/emoji4.png'),
    require('../assets/images/emoji5.png'),
    require('../assets/images/emoji6.png'),
  ]);

  return (
    // FlatList not ScrollView for Better rendering
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}>
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

// Styles for the emojiList
const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});