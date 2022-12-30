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
// CONTRIBUTING: Pls suggest new update to the app and even give us codes that can be added to make it better. To contribute: https://uplink.mn.co/sign_up and https://github.com/Onyerikam //
//                                                                                                                                                                                          //
// CREDITS: This work is based on an original work/idea made by Onyerikam: https://github.com/Onyerikam                                                                                     //
//                                                                                                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Dependencies Import
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';

/**
 * Components Import
*/

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

// Importing a static image
const PlaceholderImage = require('./assets/images/Musify ad.jpg');

/** Exporting our @function <App /> as a function */
export default function App() {
  /** @implements useStates() */

  const [status, requestPermission] = MediaLibrary.usePermissions(); // usePermissions() for storage async
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);

  // useRef();
  const imageRef = useRef();

  // Declearing constants
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // Checking the platform which our software runs on
    if (Platform.OS !== 'web') {
      try {
        // Creating a Uri for our img
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
         
        // Using the MediaLib to save our Uri
        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved!");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      // For platform differences we used dom-to-image to render the view
      domtoimage
        .toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        })
        // Creating a link to download the Smashed Image as a constant with the name and file extension constant
        .then(dataUrl => {
          let link = document.createElement('a');
          link.download = 'Your smashed sticker.jpg';
          link.href = dataUrl;
          link.click();
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  // Checking if our status is equals to null so that we can request storage permissions
  if (status === null){
    requestPermission();
  }

  // A const to select our Image and Sync it with our storage
  const pickImageAsync = async () => {
    // Enables us to launch selected Images
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    
    // Check is the result is not empty
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Please select an image!');
    }
  };

  return (
    // We used Gesture Handler instead of <View> </View> for better root rendering
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}/>
        {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null} 
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="light" />
    </GestureHandlerRootView>
    // To edit we passed the showAppOptions func that we created and passed all the keys for each function
  );
  // Also we made sure that this work is kept clean. You can delete this if done reading
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,    
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
