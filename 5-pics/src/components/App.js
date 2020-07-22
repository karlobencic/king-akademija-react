import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import FormikSearchBar from './FormikSearchBar';
import ImageList from './imageList';
import { Container } from 'react-bootstrap';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term, callback = undefined) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        if (callback) {
            callback(false);
        }

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <Container style={{ marginTop: 25 }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <FormikSearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </Container>
        );
    }
}

export default App;
