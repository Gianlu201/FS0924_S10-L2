import { Component } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

class SingleComment extends Component {
  deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU4NzEwODA3ZGI3MzAwMTU0MDYzYWUiLCJpYXQiOjE3MzY3NzM5MjIsImV4cCI6MTczNzk4MzUyMn0.OVzrySUHhFDCw6DReVLpW87EXfMqm4h_3z9n3hgH3jI',
          },
        }
      );
      if (response.ok) {
        alert('La recensione è stata elimata!');
        this.props.setNewUpdate();
      } else {
        throw new Error('La recensione non è stata eliminata!');
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <ListGroup.Item className='d-flex justify-content-between'>
        <p className='text-start m-0'>
          {this.props.comment.rate} - {this.props.comment.comment}
        </p>
        <Button
          variant='danger'
          className=' align-self-end ms-2'
          onClick={() => this.deleteComment(this.props.comment._id)}
        >
          Elimina
        </Button>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
