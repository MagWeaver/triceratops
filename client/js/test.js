import React from 'react';
import ReactDOM from 'react-dom'; 

console.log('test js is loaded!');

var TestComponent = React.createClass({
        render: function() {
          return (
            <div className="commentBox">
              <h1>Comments</h1>
              
            </div>
          );
        }
      });

export default TestComponent; 





