// App.tsx
import React, { useState } from 'react';
import { View, FlatList, Image, Pressable, StyleSheet, Dimensions } from 'react-native';

const imagePairs = [
  { main: require('../assets/images/download.jpg'), alt: require('../assets/images/hp1.jpg') },
  { main: require('../assets/images/download (1).jpg'), alt: require('../assets/images/hp2.jpg') },
  { main: require('../assets/images/download (2).jpg'), alt: require('../assets/images/hp3.jpg') },
  { main: require('../assets/images/download (3).jpg'), alt: require('../assets/images/hp4.jpg') },
  { main: require('../assets/images/download (4).jpg'), alt: require('../assets/images/hp5.jpg') },
  { main: require('../assets/images/download (5).jpg'), alt: require('../assets/images/hp6.jpg') },
  { main: require('../assets/images/download (6).jpg'), alt: require('../assets/images/hp7.jpg') },
  { main: require('../assets/images/download (7).jpg'), alt: require('../assets/images/hp8.jpg') },
  { main: require('../assets/images/download (8).jpg'), alt: require('../assets/images/download (9).jpg') },
];

const IMAGE_SIZE = Dimensions.get('window').width / 3 - 10;

export default function App() {
  const [states, setStates] = useState(
    imagePairs.map(() => ({
      isAlt: false,
      scale: 1,
    }))
  );

  const handlePress = (index: number) => {
    setStates(prev =>
      prev.map((item, i) =>
        i === index
          ? {
              isAlt: !item.isAlt,
              scale: Math.min(item.scale * 1.2, 2),
            }
          : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={imagePairs}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        renderItem={({ item, index }) => {
          const state = states[index];
          return (
            <Pressable onPress={() => handlePress(index)} style={styles.imageWrapper}>
              <Image
                source={state.isAlt ? item.alt : item.main}
                style={[
                  styles.image,
                  {
                    transform: [{ scale: state.scale }],
                  },
                ]}
                resizeMode="contain"
              />
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: IMAGE_SIZE - 10,
    height: IMAGE_SIZE - 10,
  },
});
55
