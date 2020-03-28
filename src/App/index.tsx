import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Helvetica, 'Times New Roman', serif;
    margin: 0;
    background-color: darkmagenta;
    color: white;
    h1 {
      font-size: 40px;
    }
  }
`

const Cheese = styled.h2`
  font-size: 30px;
`

interface TThingProps {
  cheese: string
  like: boolean
}

const Thing: React.FC<TThingProps> = (props: TThingProps): React.ReactElement => {
  return <Cheese>{props.cheese}</Cheese>
}

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <h1>App</h1>
      <Thing cheese="camenbert" like={true} />
    </>
  )
}

export default App
