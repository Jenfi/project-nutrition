import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { products } from 'reducers/products'
import  { ScanBarcode} from 'components/ScanBarcode'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Product } from 'components/Product'
import { NotFound } from 'components/NotFound'
import { Header } from 'components/Header'

import './app.css'

// https://world.openfoodfacts.org/api/v0/product/[barcode].jso

const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
  <Provider store={store}>
    <Header />
    <LoadingIndicator />
    <ScanBarcode />
    {/* {if pruduct in api, && <Product>} */}
    <Product />
{/* {if no product in api && <NotFound />} */}
    {/* <NotFound /> */}
  </Provider>
  )
}
