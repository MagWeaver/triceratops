import React from 'react';
import ReactDOM from 'react-dom'; 

console.log('new share loaded!');

var CreateShareComponent = React.createClass({
        render: function() {
          return (
            <div className="newShare">
              <h1>This is a new share</h1>
              
            </div>
          );
        }
      });

export default CreateShareComponent; 
