import React, {Component} from 'react';
import './bootstrap.css';

export class Poll extends Component {
    state = {
        question: '',
        vote: '',
        votes: []

    }

    render() {
        return (
            <div class="container">
                <div class="form-group">
                    <input id="question" className="form-control" placeholder="Wprowadź pytanie"
                           value={this.state.question}
                           onChange={this.onQuestionChange}/>
                    <div class="form-group">
                        <input id="vote" className="form-control" placeholder="Wprowadź opcje" value={this.state.vote}
                               onChange={this.onVoteChange}/>
                        <button className="btn btn-info"
                                onSubmit={this.onVoteSubmit}>Dodaj opcje
                        </button>
                    </div>
                    <button className="btn">Dodaj ankiete</button>
                </div>
                <span>{this.state.question}</span>
                -
                <span>{this.state.vote}</span>
            </div>

        );
    }


    onQuestionChange = (event) => {
        this.setState({
            question: event.target.value
        })
    }

    onVoteChange = (event) => {
        this.setState({
            vote: event.target.value
        })
    }

    onVoteSubmit = () => {
        this.setState(prev => ({
            votes: [...prev.votes, prev.vote]
        }))
    }

}