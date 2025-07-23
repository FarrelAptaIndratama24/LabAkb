import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Slot } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'BitcountGridSingle': require('../assets/fonts/BitcountGridSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf'),
    'FascinateInline-Regular': require('../assets/fonts/FascinateInline-Regular.ttf'),
    'Inter': require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'MonsieurLaDoulaise': require('../assets/fonts/MonsieurLaDoulaise-Regular.ttf'),
    'OpenSans': require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'PassionsConflict': require('../assets/fonts/PassionsConflict-Regular.ttf'),
    'Roboto': require('../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
    'Rubik': require('../assets/fonts/Rubik-VariableFont_wght.ttf'),
    'UnifrakturMaguntia': require('../assets/fonts/UnifrakturMaguntia-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Slot />;
}
