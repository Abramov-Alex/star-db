import React, {Component} from 'react';

export default class ItemList extends Component {
    render() {
        return(
            <div className="card" style={{padding: "20px"}}>
                <ul className="item-list list-group">
                    <li className="list-group-item">
                        Luke Skywalker
                    </li>
                    <li className="list-group-item">
                        Dart Vader
                    </li>
                    <li className="list-group-item">
                        R2-D2
                    </li>
                </ul>
            </div>
        );
    }
}