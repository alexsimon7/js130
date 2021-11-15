'use strict';

let Account = (function() {
  let hiddenEmail;
  let hiddenPassword;
  let hiddenFirstName;
  let hiddenLastName;

  return {
    init(email, password, firstName, lastName) { 
      hiddenEmail = email;
      hiddenFirstName = firstName;
      hiddenLastName = lastName;
      hiddenPassword = password;
      this.displayName = new Array(16).fill('x').map(element => element = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[Math.floor(Math.random() * 62)]).join('');
      return this;
    },
  
    reanonymize(enteredPassword) {
      if(enteredPassword === hiddenPassword) {
        this.displayName = new Array(16).fill('x').map(element => element = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[Math.floor(Math.random() * 62)]).join('');
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(enteredPassword) {
      if(enteredPassword === hiddenPassword) {
        return hiddenFirstName;
      } else {
        return 'Invalid Password';
      }
    },
    
    lastName(enteredPassword) {
      if(enteredPassword === hiddenPassword) {
        return hiddenLastName;
      } else {
        return 'Invalid Password';
      }
    },
    
    email(enteredPassword) {
      if (enteredPassword === hiddenPassword) {
        return hiddenEmail;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(enteredPassword, newPassword) {
      if(enteredPassword === hiddenPassword) {
        hiddenPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    }
  }
})(); 


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
