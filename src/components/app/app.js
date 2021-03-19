import React, {Component} from 'react';
import Header from '../header/header';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import RandomPlanet from "../random-planet/random-planet";
import '../../css/mycss.css';

export default class App extends Component {
    render() {
        return(
            <div className="container">
                <br/>
                <Header />
                <RandomPlanet />
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        )
    }
}