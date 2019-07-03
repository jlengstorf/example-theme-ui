/** @jsx jsx */
import {
  jsx,
  Layout as DefaultLayout,
  Header,
  Footer,
  Main,
  Container,
  Styled
} from 'theme-ui';
import { Global } from '@emotion/core';

const Layout = ({ children }) => (
  <DefaultLayout
    sx={{ fontFamily: 'body', backgroundColor: 'background', color: 'text' }}
  >
    <Global styles={{ body: { margin: 0 } }} />
    <Header>
      <span>A header!</span>
    </Header>
    <Main>
      <Container>
        <Styled.h1>Test</Styled.h1>
        {children}
      </Container>
    </Main>
    <Footer>Footer!</Footer>
  </DefaultLayout>
);

export default Layout;
