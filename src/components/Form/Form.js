import React, { Component } from 'react';
import './Form.css';

const availableItems = [
  'beef', 'chicken', 'pasta', 'dessert', 
  'lamb', 'miscellaneous', 'pork', 
  'seafood', 'side', 'starter', 
  'vegan', 'vegetarian', 'breakfast', 'goat'
];

class FoodApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      errors: {},
    };
  }
  onSubmit = (data) => {
    const item = data.item.toLowerCase();
    
    if (availableItems.includes(item)) {
      this.setState({ message: `Yes! ${item} is available.`, errors: {} });
    } else {
      this.setState({
        message: `Sorry, ${item} is not available.`,
       errors:{ item:{ message: 'Invalid item entered' } }
       
      });
    }
  };

  render() {
    const { message, errors } = this.state;

    return (
      <div>
        <h1>Food Availability Checker</h1>
        <form onSubmit={e => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const item = formData.get('item');
          this.onSubmit({ item });
        }}>
          <div>
            <label htmlFor="item">Enter food item:</label>
            <input name="item" required />
            {errors.item && <span className="error">{errors.item.message}</span>}
          </div>
          
          <button type="submit">Check Availability</button>
        </form>

        {message && <p>{message}</p>}
      </div>
    );
  }
}

export default FoodApp;
