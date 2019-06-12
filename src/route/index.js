import React from 'react'

import { Route,BrowserRouter} from 'react-router-dom'
import Home from '../page/home/index'


const routerConfig= (
    <BrowserRouter>
        <div>
            <Route  path='/' component={Home}/>
        </div>
    </BrowserRouter>
)
export default routerConfig;