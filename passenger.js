// An array of passenger objects, or think of it as a list of passenger objects.
var passenger = [
    { name: "Jane Dollop", paid: true },
    { name: "Dr. Evel", paid: true },
    { name: "Sue Propertie", paid: false },
    { name: "John funcall", paid: true },
    { name: "Anna Maria", paid: true },
    { name: "Matthaios Stioukis", paid: false }
];

var noFlyList = [passenger[1]];

function checkNoFlyList(passenger) {
    for (var i = 0; i < noFlyList.length; i++) {
        if (passenger === noFlyList[i]) {
            return true;
        }
    }
    return false;
}

function checkNotPaid(passenger) {
    if (!passenger.paid) {
        return true;
    }
    return false;
}

function checkAllPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

var havePaid = checkAllPassengers(passenger, checkNotPaid);
var canFly = checkAllPassengers(passenger, checkNoFlyList);

if (!havePaid) {console.log("We can't fly because someone has not paid.")};
if (!canFly) {console.log("We can't fly because someone is on the no Fly list.")};

