'use strict';

function LikeButton() {

const [liked, setLiked] = React.useState(false);

    if (this.state.liked) {
      return 'You liked this.';
    }

    return React.createElement(
      'button',
      { 
        onClick: () => setLiked (true),
      },
      'Like'
    );
  }

