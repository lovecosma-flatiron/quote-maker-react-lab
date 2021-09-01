import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

import {removeQuote, upvoteQuote, downvoteQuote} from "../actions/quotes"

class Quotes extends Component {



  handleRemoveQuote = (quoteId) => {
    this.props.removeQuote(quoteId)
  }

  handleUpVote = (quoteId) => {
    this.props.upvoteQuote(quoteId)
  }

  handleDownVote = (quoteId) => {
    this.props.downvoteQuote(quoteId)
  }


  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => <QuoteCard quote={quote} handleRemoveQuote={this.handleRemoveQuote} handleUpVote={this.handleUpVote} handleDownVote={this.handleDownVote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
