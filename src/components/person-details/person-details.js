import React, {Component} from 'react';

export default class PersonDetail extends Component {
    render() {
        return(
            <div className="card">
                <img className="" src="" />
                <div className="card-body">
                    <h4>R2-D2</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span>Gender</span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            <span>Birth Year</span>
                            <span>43</span>
                        </li>
                        <li className="list-group-item">
                            <span>Eye color</span>
                            <span>red</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}