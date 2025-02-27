// app/_layout.web.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function WebLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* Header cố định */}
      <View style={{ padding: 20, backgroundColor: '#333' }}>
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
          Web Header
        </Text>
      </View>

      {/* Nội dung màn hình */}
      <View style={{ flex: 1, padding: 20 }}>
        <Stack />
      </View>

      {/* Footer cố định */}
      <View style={{ padding: 20, backgroundColor: '#333' }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          © 2025 My Website
        </Text>
      </View>
    </View>
  );
}
