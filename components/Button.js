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
// NOTE: All images used where gotten from the net or defaulted in the root directory of this source                                                                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Dependencies Import
 */
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

/** Exporting our @function <Button /> as a function */
export default function Button({ label, theme, onPress }) {
 // Checking if our theme mode is equal to the primary theme
 if (theme === "primary") {
    return (
        <View
        style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
        >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
        <FontAwesome
         name="picture-o"
         size={18}
         color="#25292e"
         style={styles.buttonIcon}
        />
         <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
         </Pressable>
      </View>   
    );
 } 
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

// Styles for the Button
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});