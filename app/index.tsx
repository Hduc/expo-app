// app/index.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold text-blue-600">Home Screen</Text>
      <Link href="/sign-in" asChild>
        <TouchableOpacity className="mt-4 px-4 py-2 bg-blue-500 rounded-full">
          <Text className="text-white">Go to Sign In</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
