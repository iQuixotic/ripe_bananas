import React from 'react';
import logo from './logo.png';
import Searchbar from './searchbar';
import 'react-fa';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ILoginState, IState } from '../../redux/reducers';
import { loginEmailUpdate, loginPasswordUpdate, signupPasswordUpdate, signupEmailUpdate, signupConfirmPassword, signupFirstnameUpdate, signupLastnameUpdate } from '../../redux/actions/loginsignup.actions';

export interface ILoginProps {
    login: ILoginState;

    // action porperties
    loginEmailUpdate: (email: string) => void;
    loginPasswordUpdate: (password: string) => void;
    signupEmailUpdate: (email: string) => void;
    signupPasswordUpdate: (password: string) => void;
    signupConfirmPassword: (password: string) => void;
    signupFirstnameUpdate: (fn: string) => void;
    signupLastnameUpdate: (ln: string) => void;
}

/**
 * This component renders the navbar for the website.
 * Menu features will change dependant on if a user is
 * logged in or not. Contains the website name, logo and
 * a menu with the searchbar, movie list and fluctuating options,
 * signup, login, profile and logout.
 */
class NavComponent extends React.Component<ILoginProps> {
    
    handleLoginEmailUpdate(e: any) {
        console.log('input changing');
        const value = e.target.value;
        this.props.loginEmailUpdate(value);
    }

    handleLoginPasswordUpdate(e: any) {
        console.log('input changing');
        const value = e.target.value;
        this.props.loginPasswordUpdate(value);
    }

    handleSignupEmailUpdate(e: any) {
        console.log('input changing');
        const value = e.target.value;
        this.props.signupEmailUpdate(value);
    }

    handleSignupPasswordUpdate(e: any) {
        console.log('input changing');
        const value = e.target.value;
        this.props.signupPasswordUpdate(value);
    }

    handleSignupConfirmPassword(e: any) {
        console.log('input changing');
        const value = e.target.value;
        this.props.signupConfirmPassword(value);
    }

    handleSignupFirstnameUpdate(e: any) {
        console.log('input changing');
        const value = e.target.value;
        this.props.signupFirstnameUpdate(value);
    }

    handleSignupLastnameUpdate(e: any) {
        console.log('input changing');
        const value = e.target.value;
        this.props.signupLastnameUpdate(value);
    }

    signupUser() {
        console.log(this.props.login.firstname);
        console.log(this.props.login.lastname);
        console.log(this.props.login.signupEmail);
        console.log(this.props.login.signupPassword);
        console.log(this.props.login.confirmPassword);
    }

    /**
     * Contains the axios call to the backend to log in a user using
     * the email and password they type in the login modal
     * @param em email used to login user
     * @param pw password used to login a user
     */
    loginUser() {
        console.log(this.props.login);
        console.log(this.props.login.loginEmail);
        console.log(this.props.login.loginPassword);
        // const url = "http://localhost:8080/login"
        // Axios({
        //   method: "post",
        //   url: url,
        //   data: {
        //     email: this.props.loginEmailUpdate,
        //     password: this.props.loginPasswordUpdate
        //   }
        // });
        //-------then catch block to be added in later---------
        //   .then(res => {
        //     window.localStorage.setItem('token', res.data.token);
        //     this.props.history.push("/home");
        //     return res.data;
        //   })
        //   .catch(err => {
        //     this.setState({
        //       ...this.state,
        //       badLogin: true
        //     });
        //     console.log(err);
        //   });
        //--------------------------------------------------------
    }

    /**
     * Renders the nav component
     */
    public render() {
        return (
            <div className="navigation">
    
                {/* Navbar expands when large, collapses when md or smaller */}
                <nav className="navbar nav-img navbar-toggleable-md 
                navbar-expand-md navbar-dark bg-dark display-front nav-pad d-flex">
    
                    {/* for the header. includes title and logo */}
                    <div className="align-items-end row blue-bg display-inline">
                        <div className="navbar-header display-inline" id="title">Ripe Bananas</div>
                        <img className="logo display-inline" src={logo} alt="Bananas"/>
                    </div>
    
                    {/* button for menu on mobile */}
                    <button className="navbar-toggler" id="rb-btn" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
    
                    {/* menu for the navbar */}
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav ml-auto margin-nav">
                            <li className="nav-item"><Searchbar /></li>
                            <li className="p5px"><Link className="btn" id="rb-btn" to="/dashboard">Home</Link></li>
                            <li className="p5px"><Link className="btn" id="rb-btn" to="/movies">Movies</Link></li>
                            {/* <li className="p5px"><Link className="btn" id="rb-btn" to="/landing">Profile</Link></li> */}
                            <li className="p5px"><button className="btn" id="rb-btn" 
                            data-toggle="modal" data-target="#signup-modal">signup</button></li>
                            <li className="p5px"><button className="btn" id="rb-btn"
                            data-toggle="modal" data-target="#login-modal">login</button></li>
                            {/* <li className="p5px"><button className="btn" id="rb-btn">Logout</button></li> */}
                        </ul>
                    </div>
                </nav>

                {/* signup modal */}
                <div className="modal fade login" id="signup-modal" role="dialog" aria-labelledby="signupModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title" id="exampleModalLabel">SIGNUP</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-6">
                                            <label><strong>First Name</strong></label>
                                            <input type="text" className="form-control"
                                            onChange={(e) => this.handleSignupFirstnameUpdate(e)}/>
                                        </div>
                                        <div className="form-group col-6">
                                            <label><strong>Last Name</strong></label>
                                            <input type="text" className="form-control"
                                            onChange={(e) => this.handleSignupLastnameUpdate(e)}/>
                                        </div>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label><strong>Email</strong></label>
                                        <input type="email" className="form-control"
                                        onChange={(e) => this.handleSignupEmailUpdate(e)}/>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-6">
                                            <label><strong>Password</strong></label>
                                            <input type="password" className="form-control"
                                            onChange={(e) => this.handleSignupPasswordUpdate(e)}/>
                                        </div>
                                        <div className="form-group col-6">
                                            <label><strong>Confirm Password</strong></label>
                                            <input type="password" className="form-control"
                                            onChange={(e) => this.handleSignupConfirmPassword(e)}/>
                                        </div>
                                        
                                    </div>
                                </form>
                                <button type="button" className="btn btn-block" id="rb-btn"
                                onClick={() => this.signupUser()}>Signup</button>
                            </div>
                            <div className="modal-footer">
                                {'Already have an account? '}
                                <button className="signup btn" data-dismiss="modal" id="rb-btn"
                                data-toggle="modal" data-target="#login-modal"> login here</button>                            
                            </div>
                        </div>
                    </div>
                </div>

                {/* login modal */}
                <div className="modal fade login" id="login-modal" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title" id="exampleModalLabel">LOGIN</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label><strong>Email address</strong></label>
                                        <input type="text" className="form-control"
                                        onChange={(e) => this.handleLoginEmailUpdate(e)}/>
                                    </div>
                                    <div className="form-group">
                                        <label><strong>Password</strong></label>
                                        <input type="password" className="form-control"
                                        onChange={(e) => this.handleLoginPasswordUpdate(e)}/>
                                    </div>
                                </form>
                                <button type="button" className="btn btn-block" id="rb-btn"
                                onClick={() => this.loginUser()}>Login</button>
                            </div>
                            <div className="modal-footer">
                                Don't have an account? 
                                <button className="signup btn" id="rb-btn" data-dismiss="modal" 
                                data-toggle="modal" data-target="#signup-modal"> Sign up here</button>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => ({
    login: state.login
});

const mapDispatchToProps = {
    loginEmailUpdate: loginEmailUpdate,
    loginPasswordUpdate: loginPasswordUpdate,
    signupEmailUpdate: signupEmailUpdate,
    signupPasswordUpdate: signupPasswordUpdate,
    signupConfirmPassword: signupConfirmPassword,
    signupFirstnameUpdate: signupFirstnameUpdate,
    signupLastnameUpdate: signupLastnameUpdate

};

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);