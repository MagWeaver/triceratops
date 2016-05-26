import React from 'react';
import ReactDOM from 'react-dom'; 

console.log('User page loaded!');

var UserComponent = React.createClass({
        render: function() {
          return (
            <div className="user">
              <h1>This is a user page</h1>
              
            </div>
          );
        }
      });

export default UserComponent; 