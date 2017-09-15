import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from  '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // returned obj will show up as props in BookList
  return {
    books: state.books
  }
}

//Anything returned form thsi func will end up as props on BookList container
function mapDispatchToProps(dispatch) {
  //whenver selectBook is called, result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//promote BookList form Component to container - needs to know about
//dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
