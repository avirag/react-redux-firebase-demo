import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignInLinks /> : <SignOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">MarioPlan</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.fb.auth
  }
}

export default connect(mapStateToProps)(Navbar);
