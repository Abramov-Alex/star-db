import React, {Component} from "react";
import SwapiService from '../../services/swapi-service'
import Spinner from "../spinner/spinner";

export default class RandomPlanet extends Component {

    swapiServise = new SwapiService();

    state = {
        id: null,
        name: 'Planet Name',
        population: null,
        rotationPeriod: null,
        diameter: null,
        spinner: true
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*25) +2;
        this.swapiServise.getPlanet(id).then((planet) => {
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter,
                spinner: false
            })
        })
    };

    render() {

        const {id, name, population, rotationPeriod, diameter, spinner} = this.state;

        const loading = spinner ? <Spinner /> : null;
        const content = !spinner ? <RandomPlanet planet={...props}/> : null;

        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card" style={{padding: "20px"}}>
                        {loading}
                        {content}
                        >
                    </div>
                </div>
            </div>
        )
    };
}