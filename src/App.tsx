import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button } from './components/button';

const theme = {
  colors: {
    primary: '#0d6efd',
    secondary: '#6c757d',
    danger: '#dc3545'
  }
};

const Wrapper = styled.div`
  & > button { 
    display: block;
    margin: 1.5rem;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Button text="hey 0" variant="primary" type="submit"  />
        <Button text="hey 1" variant="secondary" />
        <Button text="hey 2" variant="danger" />
        <Button text="hey 2" variant="primary" disabled />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
