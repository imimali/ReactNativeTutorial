import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Home from './app/modules/home/scenes/Home/index';

import {moderateScale as normalize} from 'react-native-size-matters';
import store from './app/redux/store';
import RouterComponent from "./app/config/routes";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <RouterComponent/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: '#333',
    },
});
