import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Contador extends Component {
  state = {
    contador: 0,
  };

  incrementar() {
    if (this.state.contador < this.props.limite) {
      this.setState({ contador: this.state.contador + 1 });
    }
  }

  render() {
    return (
      <View>
        <Text>Contador</Text>
        <Text>{this.state.contador}</Text>
        <Button title="Incrementar" onPress={() => this.incrementar()} />
      </View>
    );
  }
}

// import { Component } from 'react';
// import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

// export default class Counter extends Component {
//     state = {
//         count: 0,
//         step: 2,
//     };
//     incrementar(){
//         this.setState({ count: this.state.count + this.state.step});
//     }
//     decrementar() {
//         this.setState({ count: this.state.count - 1 });
//     }
//     alteraStep(e) {
//         this.setState({ step: parseInt(e.nativeEvent.text) })
//     }
//     alteraStep2(text) {
//         this.setState({ step: parseInt(text) })
//     }
//     render() {
//         return (
//             <View style={StyleSheet.contador}>
//             <TextInput
//                 defaultValue={this.state.step}
//                 onChangeText={(text) => this.alteraStep(text)}
//                 inputMode="numeric"
//                 keyboardType="numeric"
//             />
//             <Text>Contador: {this.state.count}</Text>
//             <Button onPress={() => this.incrementar()} title='+'/>
//             <Button onPress={() => this.decrementar()} title='-'/>
//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     contador: {
//         flexDirection: 'row',
//         alingItems: 'center',
//     },

// });
