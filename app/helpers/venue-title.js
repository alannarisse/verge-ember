import Ember from 'ember';

export function venueTitle([title, about, address]/*, hash*/) {
  let returnStr = title;
  if (address != null) {
  	returnStr += ' address: ' + address;
  }
  if (about != null){

  	returnStr = about;
  }
  return returnStr;
}

export default Ember.Helper.helper(venueTitle);
