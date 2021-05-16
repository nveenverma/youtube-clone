import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from "react-redux"
import { Route, Switch, Redirect, useHistory } from "react-router-dom"

import Header from './components/header/Header'
import Sidebar from "./components/sidebar/Sidebar"
import HomeScreen from "./screens/homeScreen/HomeScreen"
import LoginScreen from './screens/loginScreen/LoginScreen'

import "./_app.scss";

const Layout = ({ children }) => {

    const [sidebar, toggleSidebar] = useState(false);
    const handleToggleSidebar = () => toggleSidebar(value => !value);

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar}/>  
            <div className="app__container">
                <Sidebar 
                    sidebar={sidebar} 
                    handleToggleSidebar={handleToggleSidebar}
                />
                <Container fluid className="app__main">
                    { children }
                </Container>
            </div>
        </>
    )
}

const App = () => {

    // Accessing accessToken and loading state from auth in Central Store
    const {accessToken, loading} = useSelector(state => state.auth);

    // Create history variable via useHistory Hook
    const history = useHistory();
    
    useEffect(() => {
        if (!loading && !accessToken) {
            history.push('/auth')
        }
    }, [accessToken, loading, history])

    return (
        <Switch>
            <Route path='/auth'>
                <LoginScreen />
            </Route>
            <Route path='/search'>
                <Layout>
                    <h1>Search Results</h1>
                </Layout>
            </Route>
            <Route path='/'>
                <Layout>
                    <HomeScreen />
                </Layout>
            </Route>
            <Route>
                <Redirect to='/' />
            </Route>
        </Switch>    
    )
}

export default App