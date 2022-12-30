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

import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

/** Exporting our @function <IconButton /> as a function */
export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

// Styles for the IconButton
const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});