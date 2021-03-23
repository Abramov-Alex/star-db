import React, {Component} from "react";

export default class RandomPlanetDetail extends Component {
    render() {

        const {id, name, population, rotationPeriod, diameter} = this.props;

        return(
            <div className="row">
                <div className="col-md-3">
                    <img className="imgPlanet" alt="?" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                </div>
                <div className="col-md-9">
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
        )
    }
}