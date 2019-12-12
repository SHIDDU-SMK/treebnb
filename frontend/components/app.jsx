import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal';
import SearchBox from './forms/search_box';
import TreehouseIndexContainer from './treehouses/treehouse_index_container';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = (props) => {
    return (
        <div className="app-container">
            <Modal />
            <header>
                <NavbarContainer />
            </header>
            <Switch>
                <Route
                    exact path="/treehouses"
                    component={ TreehouseIndexContainer } />
                <Route path="/">
                    <SearchBox />
                    <TreehouseIndexContainer />
                    <Redirect to="/" />
                </Route>
            </Switch>
        </div>
    );
}

export default App;


// <Redirect from="*" to="/" />
// Header should always just have the NavbarContainer
// Root route: Both the SearchBox component (into which you should put the background image) and the TreehouseIndexContainer below that
// Treehouse index route: Just the TreehouseIndexContainer