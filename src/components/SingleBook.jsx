import { Component } from 'react';
import { Card } from 'react-bootstrap';
import '/public/assets/css/singleBook.css';

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    // this.setState({ selected: !this.state.selected });
    this.props.setSelectedBook(this.props.book.asin);
  };

  checkSelection = () => {
    if (this.props.selectedBookAsin === this.props.book.asin) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  };

  componentDidMount() {
    this.checkSelection();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedBookAsin !== this.props.selectedBookAsin) {
      this.checkSelection();
    }
  }

  render() {
    return (
      <>
        <Card
          onClick={() => {
            this.handleClick();
          }}
          style={{ border: this.state.selected ? '3px solid red' : 'none' }}
        >
          <Card.Img variant='top' src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
