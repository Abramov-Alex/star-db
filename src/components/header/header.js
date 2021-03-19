import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-md-6">
                    <h1>
                        <a href="#" style={{color: 'white'}}>
                            Star DB
                        </a>
                    </h1>
                </div>
                <div className="col-md-6">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">
                                People
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Planets
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Starships
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}