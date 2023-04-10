import React from 'react';
import { SafeAreaView, StatusBar, Text, View, useColorScheme } from 'react-native';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView className="bg-gray-100 dark:bg-gray-800">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View className="flex h-full items-center justify-center">
        <Text className="text-white text-2xl font-bold">This is Home !!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
