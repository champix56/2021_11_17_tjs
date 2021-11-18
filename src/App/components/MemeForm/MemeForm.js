import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const initialState = {};
function MemeForm(props) {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    //didMount + didUpdate
    return () => {
      //willUnmount
    };
  }, [state]);
  return <div data-testid="MemeForm">memeForm</div>;
}

MemeForm.propTypes = {};
MemeForm.defaultProps = {};
export default MemeForm;
