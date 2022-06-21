import React, { memo, Fragment } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import PropsRoute from "../shared/components/PropsRoute";
import Home from "./home/Home";
import useLocationBlocker from "../shared/functions/useLocationBlocker";

import { DappUI, AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core';
import '@elrondnetwork/dapp-core/dist/index.css';
import Collection from "./collection/Collection";
import Attributes from "./attributes/Attributes";
import FAQ from "./FAQ/FAQ";
import RulesAndRegulation from "./Rule/RulesAndRegulation";
// import { SignWithLedgerModal } from "@elrondnetwork/dapp-core/dist/UI";

const {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal,
  DappCorePages: { UnlockPage }
} = DappUI;

const routes = [];

function Router(props) {
  const { selectHome, selectCollection, selectAttributes, selectFAQ, selectRulesAndRegulation } = props;

  // useLocationBlocker();
  return (
    <AuthenticatedRoutesWrapper
      routes={routes}
      unlockRoute={'/unlock'}
    >

      <TransactionsToastList />
      <NotificationModal />
      <SignTransactionsModals className='custom-class-for-modals' />
      <Switch>

        <Route
          exact
          path="/unlock"
          render={(props) =>
            <div style={{ marginTop: '150px' }}>
              <UnlockPage 
              description={'Choose a login method'} 
              shouldRenderDefaultCss={false}
              className="wallet-connector"
              loginRoute={'/'} />

            </div>
          }
        />

        <PropsRoute
          exact
          path="/"
          component={Home}
          selectHome={selectHome}
          style={{ marginTop: '150px' }}
        />
        <PropsRoute
          exact
          path="/RulesAndRegulation"
          component={RulesAndRegulation}
          selectHome={selectRulesAndRegulation}
          style={{ marginTop: '150px' }}
        />
        <PropsRoute
          exact
          path="/collection"
          component={Collection}
          selectHome={selectCollection}
          style={{ marginTop: '0px' }}
        />
        <PropsRoute
          exact
          path="/attributes"
          component={Attributes}
          selectHome={selectAttributes}
          style={{ marginTop: '0px' }}
        />
        <PropsRoute
          exact
          path="/faq"
          component={FAQ}
          selectHome={selectFAQ}
          style={{ marginTop: '0px' }}
        />

      </Switch>
    </AuthenticatedRoutesWrapper>
  );
}

Router.propTypes = {
  selectHome: PropTypes.func.isRequired,
  selectConnect: PropTypes.func.isRequired,
};

export default memo(Router);
