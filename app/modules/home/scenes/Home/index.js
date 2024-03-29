import React from 'react';
import {FlatList, RefreshControl, ActivityIndicator, Button} from 'react-native';

import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import NewsItem from "../../components/newsItem/index"

import {actions as home} from "../../index"


const {getNewsHeadlines} = home;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }

    componentDidMount() {
        this.getNewsHeadlines(false);
    }

    getNewsHeadlines = (refreshing = true) => {

        this.setState({refreshing});
        this.props.getNewsHeadlines()
            .finally(() => this.setState({refreshing: false}));
    };
    renderItem = ({item, index}) => {
        return <NewsItem article={item}/>
    };

    render() {
        const {articles, isFetching, hasError, errorMsg} = this.props;
        if (isFetching) return <ActivityIndicator/>;

        else {
            return (
                <FlatList key="lliisstt"
                          style={{backgroundColor: '#eaeaea'}}
                          contentContainerStyle={{paddingVertical: 15,}}
                          ref='listRef'
                          data={articles}
                          extraData={this.state}
                          renderItem={this.renderItem}
                          initialNumToRender={5}
                          keyExtractor={(item, index) => index.toString() + "_home"}
                          refreshControl={
                              <RefreshControl
                                  refreshing={this.state.refreshing}
                                  onRefresh={this.getNewsHeadlines}
                              />
                          }
                />
            );
        }
    }
}

function mapStateToProps(state, props) {
    return {
        isFetching: state.homeReducer.isFetching,
        hasError: state.homeReducer.hasError,
        errorMsg: state.homeReducer.errorMsg,
        articles: state.homeReducer.articles
    }
}

export default connect(mapStateToProps, {getNewsHeadlines})(Home);
