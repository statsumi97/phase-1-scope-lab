// Write your solution in this file!
var customerName = 'bob';

//
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

//
var bestCustomer = undefined;
function setBestCustomer() {
  bestCustomer = 'not bob';
}

//
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

//
const leastFavoriteCustomer = 'steve';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}

/*
describe('changeLeastFavoriteCustomer()', function() {
    it('unsuccessfully tries to reassign the least favorite customer', function() {
      expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
    });
  });
});
  */