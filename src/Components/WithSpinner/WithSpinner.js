import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./WithSpinner.styles";

const WithSpinner = WrappedComponent => {
    // pass prop isLoading boolean value
  const Spinner = ({ isLoading, ...otherProps }) => {
    // if isLoading prop is true, load spinner
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      // Else pass the component back with every other prop than isLoading.
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
