import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {

    render () {

        console.log("Coded with love by Aaron Saban 👀👍")

        const { Component, pageProps, reduxStore} = this.props

        return (
        <Provider store={reduxStore}>
            <Component {...pageProps} />
        </Provider>
        )
  }
}

export default withReduxStore(MyApp)