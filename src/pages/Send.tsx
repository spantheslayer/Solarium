import React from 'react';
import { SafeAreaView, StatusBar, Text, View, useColorScheme } from 'react-native';

const SendETH = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-gray-100 dark:bg-gray-800 h-full flex items-center justify-center';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View className="flex h-full items-center justify-center">
        <Text className="text-white text-2xl font-bold">This is Send ETH Page !!</Text>
      </View>
    </SafeAreaView>
  );
};

export default SendETH;
