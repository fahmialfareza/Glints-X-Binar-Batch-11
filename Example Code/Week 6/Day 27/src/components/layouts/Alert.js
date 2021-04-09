import React, { Fragment } from "react";
import { connect } from "react-redux";

const Alert = ({ alert: { alert } }) => {
  return (
    <Fragment>
      {alert && alert.message && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, {})(Alert);
