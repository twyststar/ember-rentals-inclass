import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    //weather (rental.location){
  //   get-api call for weather @ location- text result to display on this page?
  // }
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    },
    destroyReview(review) {
      this.sendAction('destroyReview', review);
    }
  }
});
