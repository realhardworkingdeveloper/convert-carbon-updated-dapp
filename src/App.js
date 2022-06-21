import React, { Fragment, Suspense, lazy } from "react";
import { ThemeProvider, StyledEngineProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";
import { DappProvider } from '@elrondnetwork/dapp-core';
import './index.css'
const Layout = lazy(() => import("./components/Layout"));

const environment = 'devnet';

function App() {
  return (
    <BrowserRouter>
      <DappProvider
        environment={environment}
        customNetworkConfig={{ name: 'customConfig', apiTimeout: 6000 }}
        completedTransactionsDelay={200}
      >
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Pace color={theme.palette.primary.light} />
            <Suspense fallback={<Fragment />}>
              <Layout />
            </Suspense>
          </ThemeProvider>
        </StyledEngineProvider>
      </DappProvider>
    </BrowserRouter>
  );
}

export default App;
