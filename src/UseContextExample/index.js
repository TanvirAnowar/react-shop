import React from 'react'
import Shop from './shop'
import About from './about'
import Navigation from './navigation'

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

const Index = () => {
    return (
        <>
            <Router>
                <Navigation />

                <Switch>                 
                                            
                    {/* <Route path='/' exact component={Index} /> */}

                    <Route path='/shop' component={Shop} />

                    <Route path='/about' component={About} />                    
                </Switch>
            </Router>
        </>
    )
}

export default Index
