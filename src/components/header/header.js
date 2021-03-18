import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return(
            <>
                <div className="header">
                    <h3>
                        <a href="#" style={{color: 'white'}}>
                            Star DB
                        </a>
                    </h3>
                    <ul className="">
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
            </>
        )
    }
}