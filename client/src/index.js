import React from 'react';
import ReactDOM from 'react-dom';
import CommentDashboard from './components/CommentDashboard';
import registerServiceWorker from './registerServiceWorker';

// Comment dashboard
  // Comment list
    // Comment parent
      // Comment comment (comment and reply)
  // Form

ReactDOM.render(<CommentDashboard />, document.getElementById('root'));
registerServiceWorker();
