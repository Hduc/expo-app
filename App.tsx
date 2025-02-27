// App.tsx
import "expo-router/entry";
import { Slot } from 'expo-router';
import "./global.css"; // Import Tailwind CSS

export default function App() {
  return <Slot />;;
}