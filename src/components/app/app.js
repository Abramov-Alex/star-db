import React, {Component} from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import '../../css/mycss.css';

export default class App extends Component {
    render() {
        return(
            <>
                123
                <Header />
                <RandomPlanet />
                <div className="row">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>
            </>
        )
    }
}