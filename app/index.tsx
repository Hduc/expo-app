// app/index.tsx
import React from 'react';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Home Screen</Text>
      <Link href="/details">
        <TouchableOpacity className="mt-4 px-4 py-2 bg-blue-500 rounded">
          <Text className="text-white">Go to Details</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
