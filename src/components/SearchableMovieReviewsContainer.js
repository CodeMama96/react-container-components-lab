import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component{

    constructor() {
        super()
    
        this.state = {
          reviews: [],
          searchTerm: ""
        };
    }

    componentDidMount() {
        fetch(URL)
          .then(response => response.json())
          .then(data => this.setState({ reviews: data.reviews }))
      }

      handleSearch = (event, searchTerm )=> {
        event.preventDefault()
        fetch(URL)
        .then(response => response.json())
        .then(data =>

            this.setState({reviews: data['data']})
            
        )

    }
    render(){
        return(<div>
    <MovieReviews reviews={this.state.reviews}/>
        </div>)
    }
}

export default SearchableMovieReviewsContainer
