import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(

<BrowserRouter>
<ChakraProvider>
  <Provider store={store}>
   <App/>
  </Provider>
</ChakraProvider>
</BrowserRouter>,
document.getElementById("root"))
