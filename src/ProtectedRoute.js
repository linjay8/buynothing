import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export default function ProtectedRoute(props) {
  const { component, ...remainingProps } = props;

  withAuthenticationRequired();
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => {
          return <div className="loader">Loading...</div>;
        },
      })}
      {...remainingProps}
    />
  );
}
