import { StyleSheet, Dimensions } from 'react-native';

const IMAGE_SIZE = Dimensions.get('window').width / 3 - 10;

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
