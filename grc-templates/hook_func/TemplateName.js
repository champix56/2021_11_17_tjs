import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const initialState = {};
function TemplateName(props) {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    //didMount + didUpdate
    return () => {
      //willUnmount
    };
  }, [state]);
  return <div data-testid="TemplateName">templateName</div>;
}

TemplateName.propTypes = {};
TemplateName.defaultProps = {};
export default TemplateName;
