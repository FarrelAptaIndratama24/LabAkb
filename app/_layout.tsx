import { Stack, Slot, useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  // const router = useRouter();

  // return (
  //   <Stack
  //     // screenOptions={{
  //     //   header: ({ navigation }) => (
  //     //     <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#f5f5f5' }}>
  //     //       <TouchableOpacity onPress={() => navigation.navigate('/')} style={{ marginRight: 12 }}>
  //     //         <FontAwesome name="home" size={28} color="#333" />
  //     //       </TouchableOpacity>
  //     //       <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Home</Text>
  //     //     </View>
  //     //   ),
  //     // }}
  //   >
  //     {/* <Slot /> */}
  //   </Stack>
  // );
return (
    <Stack
      screenOptions={{
        headerShown: false, // pastikan ini di Stack utama
      }}
    >
      <Stack.Screen name="(Tabs)" />
    </Stack>
  );

}