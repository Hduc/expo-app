// app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function Layout() {
    return (
        <View style={{ flex: 1 }}>
              {/* Header cố định */}
              <View style={{ padding: 4, backgroundColor: '#333' }}>
                <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
                  Web Header
                </Text>
              </View>
        
              {/* Nội dung màn hình */}
              <View style={{ flex: 1, padding: 20 }}>
                <Stack screenOptions={{headerShown:false}} />
              </View>
        
              {/* Footer cố định */}
              <View style={{ padding: 20, backgroundColor: '#333' }}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>
                  © 2025 My Website
                </Text>
              </View>
            </View>
    )
//   return (
//     <Stack
//       screenOptions={{
//         headerStyle: { backgroundColor: '#f4511e' },
//         headerTintColor: '#fff',
//         headerTitleStyle: { fontWeight: 'bold' }
//       }}
//     />
//   );
}
