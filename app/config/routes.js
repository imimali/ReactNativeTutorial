import React from 'react';
import {AppLoading} from 'expo';

import {Scene, Router, Stack} from 'react-native-router-flux';

import Home from '../modules/home/scenes/Home';
import Article from '../modules/home/scenes/Article';
import Source from '../modules/home/scenes/Source';

import {color, navTitleStyle} from "../styles/theme";



class RouterComponent extends React.Component {
    render() {
        return (
            <Router>
                <Scene key="root"
                       navigationBarStyle={{backgroundColor: "#fff"}}
                       titleStyle={navTitleStyle}
                       backButtonTintColor={color.black}>
                    <Scene key="Home" component={Home} title="Headlines" initial/>
                    <Scene key="Article" component={Article} title="Article"/>
                    <Scene key="Source" component={Source} title="Source"/>
                </Scene>
            </Router>
        )
    }
}
export default RouterComponent;