import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
} from "react-native";
import { useEffect } from "react";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useFonts } from "expo-font";

const LoginScreen = () => {
  const [fontsLoaded] = useFonts({
    GEOLOGICAREG: require("../assets/fonts/Geologica_Auto-Regular.ttf"),
    GEOLOGICABOLD: require("../assets/fonts/Geologica_Auto-Bold.ttf"),
  });
  useEffect(() => {
    if (!fontsLoaded) {
      return;
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={tw`w-full h-full`}>
      <View style={tw`w-full h-80`}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios14-memoji-hero.jpg",
          }}
        />
      </View>
      <View style={tw`w-full h-80 flex items-center justify-center mt-10`}>
        <Text style={boldText}>Unleash the Power of Conversations!</Text>
        <Text style={infoText}>
          The ultimate chatting app designed to enhance your communication
          experience
        </Text>
        <Pressable
          style={tw`mt-20 w-64 items-center py-5 rounded-lg bg-red-600`}
        >
          <Text style={buttonStyles}>Login with Google</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const boldText = StyleSheet.create({
  ...tw`mt-2 text-center`,
  fontFamily: "GEOLOGICABOLD",
  fontSize: 38,
});

const infoText = StyleSheet.create({
  ...tw`mt-2 text-center text-gray-500 w-72 leading-6`,
  fontFamily: "GEOLOGICAREG",
  fontSize: 18,
});

const buttonStyles = StyleSheet.create({
  ...tw`text-white font-semibold text-lg`,
  fontFamily: "GEOLOGICABOLD",
});
