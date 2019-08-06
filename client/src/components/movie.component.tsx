import React from 'react';
import Axios from 'axios';
import { IState, IPokeState } from '../Reducers';
import { pokeSearchResolved, userSubmitRequest, inputUpdate } from '../Actions/movie.actions';
import { connect } from 'react-redux';

// Recall that mostly redux components will deal with properties
// provided by the state store
export interface IPokeProps {
    poke: IPokeState;

    // Action properties from the dispatcher
    pokeSearchResolved: (name: string, id: number, spriteUrl: string, types: string[]) => void;
    userSubmitRequest: () => void;
    inputUpdate: (inputValue: string) => void;
}

export class PokeComponent extends React.Component<IPokeProps> {
    constructor(props: any) {
        super(props);
    }

    handleInputChange(e: any) {
        console.log('input changing');
        const value = e.target.value;
        this.props.inputUpdate(value);
    }

    submit() {
        console.log('submit clicked');
        const url = `https://pokeapi.co/api/v2/pokemon/${this.props.poke.inputValue}`;
        this.props.userSubmitRequest();
        Axios.get(url).then(payload => {
            const id = payload.data.id;
            const name = payload.data.name;
            const spriteUrl = payload.data.sprites.front_default;
            const types = payload.data.types.map((typingAssignment: any) => {
                return typingAssignment.type.name;
            });
            this.props.pokeSearchResolved(name, id, spriteUrl, types);
        })
    }

    submitPost() {
        const url = `https://api.myjson.com/bins`;
        const data = {
            a: 'Abby',
            b: 'Billy',
            c: 'Cindy'
        };
        const config = {
            headers: {
                "Content-Type": "text/html",
            }
        }
        Axios.post(url, data, config).then((payload) => {
            console.log(payload);
        })
    }

    render() {
        const types = this.props.poke.types.map((type) => {
            return (<span key={type} className="poke-type-span">{type}</span>);
        })
        return (
            <div>
                <h1>Poke Finder</h1>
                <div id="poke-display">
                    <h2>#{this.props.poke.id}: {this.props.poke.name}</h2>
                    <img src={this.props.poke.spriteUrl}></img>
                    <div>
                        {types}
                    </div>
                </div>
                <div id="poke-input">
                    <input type="text" id="poke-text-input" onChange={(e) => this.handleInputChange(e)} />
                    <button onClick={() => this.submit()}>Submit</button>
                    <button onClick={() => this.submitPost()}>Submit</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => ({
    poke: state.poke
});

const mapDispatchToProps = {
    pokeSearchResolved: pokeSearchResolved,
    userSubmitRequest: userSubmitRequest,
    inputUpdate: inputUpdate
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeComponent);