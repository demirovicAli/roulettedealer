import { Text, View } from "react-native";
import { Link } from "expo-router";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { stil } from "@/components/stil";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        alignSelf: "stretch",
        backgroundColor: "green",
        height: "100%",
      }}
    >
      <View style={stil.topcontainer}></View>
      <View style={stil.midcontainer}></View>
      <View style={stil.bottomcontainer}></View>
    </SafeAreaView>
  );
}
