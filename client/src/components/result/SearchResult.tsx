import * as React from 'react';
import './style.css';
import sm from '../carousel/spidermanFFH.jpg';

export interface IResultProps {
}

export default class SearchResult extends React.Component<IResultProps> {
    public render() {
        return (
            <div className="result-wrapper col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2">
                <div className="result-container row">
                    <div className="col-2 display-inline" />
                    <div className="poster-wrapper col-8">
                       
                    <img src={sm} className="w-100 c-image" alt="..." />
                    </div>
                </div>
                <div className="btn-wrapper row">
                    <div className="col-2 display-inline"></div>
                    <button className="signup btn" data-dismiss="modal" id="rb-btn"
                                data-toggle="modal" data-target="#result-modal">open modal</button>
                </div>

                {/* login modal */}
                <div className="modal fade login" id="result-modal" role="dialog" 
                    aria-labelledby="resultModal" aria-hidden="true">
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
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label><strong>Password</strong></label>
                                        <input type="password" className="form-control"/>
                                    </div>
                                </form>
                                <button type="button" className="btn btn-block" id="rb-btn">Login</button>
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

