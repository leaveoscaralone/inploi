import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store'
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: aliceblue;
    border: 4px solid #65bc66;
    justify-content: center;
    align-items: center;
    font-family: arial;
  }
`

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  return (
    <>
    <GlobalStyle />
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </>
  )
}

export default App;
