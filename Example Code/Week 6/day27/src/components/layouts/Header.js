import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authSignOut } from "../../actions/authActions";

const Header = ({ user, authSignOut }) => {
  const onSignOut = (event) => {
    event.preventDefault();

    authSignOut();
  };

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary text-light p-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Backend
          </Link>
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            {user.isAuthenticated && (
              <>
                <ul class="navbar-nav">
                  <li class="nav-item px-2">
                    <Link to="/" class="nav-link active">
                      Dashboard
                    </Link>
                  </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link">
                      <i class="fas fa-user"></i> Hello
                    </a>
                  </li>
                  <li class="nav-item">
                    <a onClick={onSignOut} class="nav-link">
                      <i class="fas fa-user-times"></i> Logout
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>

      <section id="actions" className="py-4 mb-4 bg-dark">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { authSignOut })(Header);
