// export default App;

import React, { Component, Redirect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';


import RedirectGoogleAuth from './components/RedirectGoogleAuth';
import LoginLocal from './components/login-local';
import PersonalAccount from './components/personal-account';
import Logout from './components/logout';
import Users from './components/Users';
// import Results from "./pages/Results";

import PhotoWidgetUploader from './components/PhotoWidgetUploader';
import UsersDb from './components/UsersDb';

import Home from './pages/Home';

import Modern from "./pages/Modern";
import Decor from "./pages/Decor";
import Luxury from "./pages/Luxury";
import Antique from "./pages/Antique";
import Container from "./components/Container";
import "./components/Container.css";

import NavbarMain from "./components/Navbar-main/Navbar-main";
import NavbarUser from "./components/Navbar-user/Navbar-user";
import Search from "./pages/Search";
import Results from "./pages/Results";

import Admin from './pages/Admin';
import Images from './components/Images3';
import SignUp from './components/SignUp';
import LogIn from './pages/LogIn';
import LocalAPI from './utils/local-auth';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount = () => {
    if (!this.state.user || !this.state.user.email) {
      LocalAPI.getUserData().then(user => {
        if (user) {
          this.setState({ user: user.data });
        }
      });
    }

  }



  // state = {
  //   user: {}
  // }

  logOut=()=>{
    LocalAPI.getLogout().then((res)=>{
      this.setUser({});
      return <Redirect to='/'/>
    })
  }


  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div>
      {this.props.children}
      <Router>
        <Container>
          <NavbarUser user={this.state.user} logOut={this.logOut}/>
          <NavbarMain />
          <Switch>
            <Route exact path='/' render={() => (<Home {...this.props} setUser={this.setUser} user={this.state.user}/>)}/>
            <Route exact path="/modern" render={() => (<Modern {...this.props} setUser={this.setUser} user={this.state.user} />)}/>
            <Route exact path="/decor" render={() => (<Decor {...this.props} setUser={this.setUser} user={this.state.user} />)} />
            <Route exact path="/luxury" render={() => (<Luxury {...this.props} setUser={this.setUser} user={this.state.user} />)}/>
            <Route exact path="/antique" render={() => (<Antique {...this.props} setUser={this.setUser} user={this.state.user} />)}/>
            <Route exact path="/results/:query" render={() => (<Results {...this.props} setUser={this.setUser} user={this.state.user}/>)} component={Results} />
            <Route exact path="/admin" render={() => (<Admin {...this.props} user={this.state.user} />)}/>            
            <Route exact path='/login' component={LogIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/images' component={Images} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/login-local" render={() => (<LoginLocal {...this.props} setUser={this.setUser} user={this.state.user} />)} />
            <Route exact path="/personal-account" render={
              () => (
                <PersonalAccount {...this.props} setUser={this.setUser} user={this.state.user} />
              )
            } />
            <Route exact path="/photoWidgetUploader" component={PhotoWidgetUploader} />
            {/* <Route exact path="/apiPhotos" component={ApiPhotos}/> */}
            <Route exact path="/usersDb" component={UsersDb} />
            {window.location.origin === "http://localhost:3000" ? (
              <Route exact path="/auth/google" component={RedirectGoogleAuth} />
            ) : (
              false
            )}
          </Switch>
          {/* <Footer /> */}
        </Container>
      </Router>
      </div>
    );



    // >>>>>>> f2701a2bbe69aa7c63d63b5a20482f4b18ca9f77
  }
}

export default App;
