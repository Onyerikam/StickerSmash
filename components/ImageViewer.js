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


// Dependency Import
import { StyleSheet, Image } from "react-native";

/** Exporting our @function <ImageViewer /> as a function */
export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    /**
     * Hope you understand it (⌐■_■)
     * Cause I ain't explaining.
     * Bye 🤞
    */
    const imageSource = selectedImage !== null
      ? { uri: selectedImage}
      : placeholderImageSource;

    return (
        <Image source={imageSource} style={styles.image}/>
    );
}

// Styles for the ImageViewer
const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 400,
        borderRadius: 18,
    },
})