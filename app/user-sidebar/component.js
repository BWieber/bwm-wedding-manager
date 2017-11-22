import Ember from 'ember';

const { Component, set, get } = Ember;

export default Component.extend({

  guestsArr: [],

  didInsertElement() {
    const dbRefObject = firebase.database().ref().child('guests');
    debugger;

    let arrayStr = '';

    let context = this;
    let guestArr = get(this, 'guestArr');

    dbRefObject.on('value', snap => {
      arrayStr = JSON.stringify(snap.val(), null, 3).replace(/['"]+/g, '').split(',');

      for(let i = 0; i < arrayStr.length; i++) {
        guestsArr.addObject(arrayStr[i]);
      }
      // set(context, 'guestArr', arrayStr.split(','));
    });
  }
});
