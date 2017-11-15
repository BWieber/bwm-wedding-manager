import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  model() {
    var recentPostsRef = firebase.database().ref('guests')
    return recentPostsRef;
  }
});
