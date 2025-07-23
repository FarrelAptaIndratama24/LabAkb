import { Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function HomeScreen() {
  return (
    <View 
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          marginTop: 100
        }}>
      <MaterialCommunityIcons name="weather-windy" size={24} color="black" />
      <MaterialIcons name="flight-land" size={24} color="black" />
      <MaterialCommunityIcons name="weather-lightning" size={24} color="black" />
      <MaterialCommunityIcons name="airplane-takeoff" size={24} color="black" />
      <MaterialCommunityIcons name="chart-gantt" size={24} color="black" />
      <MaterialCommunityIcons name="sunglasses" size={24} color="black" />
      <Fontisto name="island" size={24} color="black" />
      <Foundation name="mountains" size={24} color="black" />
      <MaterialIcons name="forest" size={24} color="black" />
      <FontAwesome6 name="wolf-pack-battalion" size={24} color="black" />
    </View>
  );
}
