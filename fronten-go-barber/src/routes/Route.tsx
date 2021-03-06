import React from 'react';
import {
  RouteProps as ReactRouteDOMProps,
  Route as ReactDOMRoute,
  Redirect
} from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactRouteDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ?
          (<Component />)
          : (<Redirect to={{ pathname: isPrivate ? '/' : '/dashboard', state: { from: location } }} />)
      }}
    />
  );
}

export default Route;
