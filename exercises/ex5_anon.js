'use strict';

let Account = {
  init(email, password, firstName, lastName) {
    this.firstName = function(enteredPassword) {
      if(enteredPassword === password) {
        return firstName;
      } else {
        return 'Invalid Password';
      }
    },
    this.lastName = function(enteredPassword) {
      if(enteredPassword === password) {
        return lastName;
      } else {
        return 'Invalid Password';
      }
    },
    this.email = function(enteredPassword) {
      if (enteredPassword === password) {
        return email;
      } else {
        return 'Invalid Password';
      }
    },

    this.resetPassword = function(enteredPassword, newPassword) {
      if(enteredPassword === password) {
        this.password = newPassword
        return true;
      } else {
        return 'Invalid Password';
      }
    }


    this.displayName = new Array(16).fill('x').map(element => element = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[Math.floor(Math.random() * 62)]).join('');
    
    return this;
  },

  reanonymize(enteredPassword) {
    if(enteredPassword === this.password) {
      this.displayName = new Array(16).fill('x').map(element => element = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[Math.floor(Math.random() * 62)]).join('');
      return true;
    } else {
      return 'Invalid Password';
    }
  }
};

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
