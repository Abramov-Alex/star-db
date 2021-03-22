import React, {Component} from 'react';
import SwapiService from "../../services/swapi-service";

export default class PersonDetail extends Component {

    swapiServise = new SwapiService();

    state = {
        id: null,
        name: null,
        gender: null,
        birthYear: null,
        eyeColor: null
    }

    constructor() {
        super();
        this.updatePerson();
    }

    updatePerson() {
        const id = Math.floor(Math.random()*25) +2;
        this.swapiServise.getPerson(id).then((person) => {
            this.setState({
                id,
                name: person.name,
                gender: person.gender,
                birthYear: person.birth_year,
                eyeColor: person.eye_color
            })
        })
    }

    render() {

        const {id, name, gender, birthYear, eyeColor} = this.state;

        return(
            <div className="card">
                <img className="imgPerson" alt="?" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span>Gender</span>
                            <span className="liSpan">{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span>Birth Year</span>
                            <span className="liSpan">{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span>Eye color</span>
                            <span className="liSpan">{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}