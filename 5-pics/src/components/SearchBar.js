import React from 'react';
import { Form } from 'react-bootstrap';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <Form onSubmit={this.onFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Image Search</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter term"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                </Form.Group>
            </Form>
        );
    }
}

export default SearchBar;
