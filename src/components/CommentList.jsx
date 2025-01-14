import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';
import { Component } from 'react';

class CommentList extends Component {
  render() {
    console.log(this.props.commentsToShow.length);
    return (
      <>
        {this.props.commentsToShow.length > 0 ? (
          <ListGroup style={{ color: 'black' }} className='mt-2'>
            {this.props.commentsToShow.map((comment) => (
              <SingleComment
                comment={comment}
                key={comment._id}
                setNewUpdate={this.props.setNewUpdate}
              />
            ))}
          </ListGroup>
        ) : (
          <h4 className='px-5 text-secondary'>No comment has been left yet</h4>
        )}
      </>
    );
  }
}

export default CommentList;
