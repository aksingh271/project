<nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
    <Link className="navbar-brand" to={"/home"}>
      Home
    </Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to={"/sign-in"}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/sign-up"}>
            Sign up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/myprofile"}>
            My Profile
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>;

//   data-dismiss="modal"
