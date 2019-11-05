import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';

import Router from './app/config/routes'
import {fontFamily} from "./app/styles/theme";
import {moderateScale as normalize} from 'react-native-size-matters';

export default class App extends React.Component {
    render() {
        return (
            /*<Provider store={store}>*/
            <View style={styles.container}>
                <Text style={styles.textBox}>Exorcizamus te omnis imundus spiritus omnis satanica potestas omnis
                    incursio infernalis adversarii</Text>
            </View>
            // </Provider>?
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#75b',
        alignItems: 'center',
        justifyContent: 'center',


    },
    textBox: {
        fontSize: normalize(36),
        margin: normalize(20)
    }
});
