// app/_layout.web.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function WebLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* Header cố định */}
      <View style={{ padding: 5, backgroundColor: '#333' }}>
      
      </View>

      {/* Nội dung màn hình */}
      <View style={{ flex: 1, padding: 10 }}>
        <Stack screenOptions={{headerShown:false}}/>
      </View>
    </View>
  );
}
