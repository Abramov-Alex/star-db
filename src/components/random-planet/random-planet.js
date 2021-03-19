import React, {Component} from "react";
import SwapiService from '../../services/swapi-service'

export default class RandomPlanet extends Component {

    swapiServise = new SwapiService();

    state = {
        name: 'Planet Name',
        population: null,
        rotationPeriod: null,
        diameter: null
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        this.swapiServise.getAllPlanets(7).then((planet) => {
            this.setState({
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotationPeriod,
                diameter: planet.diameter
            })
        })
    };

    render() {

        const {name, population, rotationPeriod, diameter} = this.state;

        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card" style={{padding: "20px"}}>
                        <div className="row">
                            <div className="col-md-6">
                                <img className="imgPlanet" alt="?" src=""/>
                            </div>
                            <div className="col-md-6">
                                <h4>{name}</h4>
                                <ul className="item-list list-group">
                                    <li className="list-group-item">
                                        <span>Population</span>
                                        <span className="liSpan">{population}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>Rotation Period</span>
                                        <span className="liSpan">{rotationPeriod}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>Diameter</span>
                                        <span className="liSpan">{diameter}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}