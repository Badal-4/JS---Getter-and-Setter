import { LightningElement, api } from 'lwc';

export default class GetterSetter extends LightningElement {
  // Private field to hold the actual name
  _name = '';

  // Getter for the name property
  get name() {
    
    return this._name.toUpperCase(); // Convert to uppercase before returning
  }

  // Setter for the name property with console logging
  set name(value) {
    if (value.length < 3) {
      this.error = true;
      console.log('Error: Name must be at least 3 characters long.');
    } else {
      this.error = false;
      this._name = value;
      console.log('New name set:', value);
    }
  }

  // Handle input change event
  handleInputChange(event) {
    this.name = event.target.value;
  }

  // Check name using console log
  checkName() {
    console.log('Current name:', this.name); // Getter is called here
  }
}
