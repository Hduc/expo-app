import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import './global.css';


export default function App() {
  return <Slot />;
}
// export default function App() {
//   return (
//     <>
//       <ScreenContent title="Trang chủ" path="App.tsx" />
//       <StatusBar style="auto" />
//     </>
//   );
// }
