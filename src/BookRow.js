import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookRow extends Component {
  render() {
    const book = this.props.book;
    const authors = book.authors.map(author => (
      <Link to={`/authors/${author.id}`}>
        <div key={author.id}>{author.name}</div>
      </Link>
    ));

    return (
      <tr>
        <td>{book.title}</td>
        <td>{authors}</td>
        <td>
          <Link
            to={`/books/${book.color}`}
            className="btn"
            style={{ backgroundColor: book.color }}
          ></Link>
        </td>
      </tr>
    );
  }
}
export default BookRow;
