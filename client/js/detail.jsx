import React from 'react';
import ReactDOM from 'react-dom'; 

console.log('detail page loaded!');

var DetailComponent = React.createClass({
        render: function() {
          return (
            <div className="detail">
              <h1>This is a new detail</h1>
            </div>
          );
        }
      });

export default DetailComponent; 