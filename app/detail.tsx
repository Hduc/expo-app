// app/details.tsx
import React from 'react';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function DetailsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Details Screen</Text>
      <Link href="/">
        <TouchableOpacity className="mt-4 px-4 py-2 bg-green-500 rounded">
          <Text className="text-white">Go Back Home</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
