import { Component } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

export default class Counter extends Component {
    state = {
        count: 0,
        step: 2,
    };
    incrementar(){
        this.setState({ count: this.state.count + this.state.step});
    }
    decrementar() {
        this.setState({ count: this.state.count - 1 });
    }
    alteraStep(e) {
        this.setState({ step: parseInt(e.nativeEvent.text) })
    }
    alteraStep2(text) {
        this.setState({ step: parseInt(text) })
    }
    alteraStep(text){
        this.setState({ step: parseInt(text)});
    }
    render() {
        return (
            <View style={StyleSheet.contador}>
            <TextInput
                defaultValue={this.state.step} 
                onChangeText={(text) => this.alteraStep(text)}
                inputMode="numeric"
                keyboardType="numeric"
            />
            <Text>Contador: {this.state.count}</Text>
            <Button onPress={() => this.incrementar()} title='+'/>
            <Button onPress={() => this.decrementar()} title='-'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    contador: {
        flexDirection: 'row',
        alingItems: 'center',
    },
   
});