import Ember from 'ember';

const { Route, set } = Ember;

export default Route.extend({

  model() {
    const dbRefObject = firebase.database().ref().child('guests');

    let arrayStr = '';

    dbRefObject.on('value', snap => {
      arrayStr = JSON.stringify(snap.val(), null, 3);
    });

    let guestsArr = arrayStr.replace(/['"]+/g, '')

    console.log(guestsArr);

    set(this.controllerFor('lodgings'), 'guestArr', guestsArr);

    return guestsArr;
  }
});
