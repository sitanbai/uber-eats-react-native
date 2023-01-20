import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";
import Catagories from "../components/Catagoires";

function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
        <Catagories />
      </View>
    </SafeAreaView>
  );
}

export default Home;
