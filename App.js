import React from 'react'
import { View } from 'react-native'
import Contador from './src/components/Contador'

export default function App() {
  return (
    <View>
      <Contador limite={10} />
    </View>
  )
}
// import { StyleSheet, Text, View } from 'react-native';
// import Counter from './src/components/Counter';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Counter />
//       <Counter />
//       <Counter />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
