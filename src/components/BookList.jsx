import { Component } from 'react';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
import { Col, Form, Row } from 'react-bootstrap';

import '/public/assets/css/bookList.css';

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedBookAsin: '',
  };

  setSelectedBook = (newBookAsin) => {
    this.setState({ selectedBookAsin: newBookAsin });
  };

  render() {
    return (
      <>
        <Row className='justify-content-center mt-5'>
          <Col xs={12} md={4} className='text-center'>
            <Form.Group>
              <Form.Control
                type='search'
                placeholder='Cerca un libro'
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='g-2 mt-3 position-relative'>
          <Col md={9}>
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={12} md={3} className='mb-3' key={b.asin}>
                    <SingleBook
                      book={b}
                      selectedBookAsin={this.state.selectedBookAsin}
                      setSelectedBook={this.setSelectedBook}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={3} className='commentCol ps-3'>
            <CommentArea asin={this.state.selectedBookAsin} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
