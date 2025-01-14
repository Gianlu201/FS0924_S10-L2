import { Component } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Error from './Error';

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
    newUpdate: false,
  };

  getBook = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          this.props.asin,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzU4NzEwODA3ZGI3MzAwMTU0MDYzYWUiLCJpYXQiOjE3MzY3NzM5MjIsImV4cCI6MTczNzk4MzUyMn0.OVzrySUHhFDCw6DReVLpW87EXfMqm4h_3z9n3hgH3jI',
          },
        }
      );
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: comments, isLoading: false, isError: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  setNewUpdate = () => {
    this.setState({ newUpdate: !this.state.newUpdate });
  };

  componentDidMount = async () => {
    this.getBook();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.asin !== this.props.asin) {
      this.getBook();
    }

    if (prevState.newUpdate !== this.state.newUpdate) {
      this.getBook();
    }
  }

  render() {
    return (
      <div className='text-center'>
        {this.state.isError && <Error />}
        {this.props.asin && (
          <>
            <AddComment
              asin={this.props.asin}
              newUpdate={this.state.newUpdate}
              setNewUpdate={this.setNewUpdate}
            />
            <CommentList
              commentsToShow={this.state.comments}
              newUpdate={this.state.newUpdate}
              setNewUpdate={this.setNewUpdate}
            />
          </>
        )}
        {/* <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} /> */}
      </div>
    );
  }
}

export default CommentArea;
