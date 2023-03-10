// An array of passenger objects, or think of it as a list of passenger objects.
var passenger = [
    { name: "Jane Dollop", paid: true, ticket: "coach" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Propertie", paid: false, ticket: "firstclass" },
    { name: "John funcall", paid: true, ticket: "coach" },
    { name: "Anna Maria", paid: true, ticket: "firstclass" },
    { name: "Matthaios Stioukis", paid: false, ticket: "coach" },
    { name: "Michael Angelos", paid: true, ticket: "premium"},
    { name: "Leonardo Davinci", paid: true, ticket: "premium"}
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

function printPassenger(passenger) {
    var hasPaid;
    if (checkNotPaid(passenger)) {
        hasPaid = "not paid!";
    } else {
        hasPaid = "paid!";
    }
    var message = "The passenger: " + passenger.name + " , has " + hasPaid;
    console.log(message);
}

function checkAllPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}
// Here I created a function which is responsible just for creating the drink order for each passenger based on their ticket type.
function createDrinkOrder(passenger) {
    // get drink order
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like cocktail or wine?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Would you like cola, water, or a wine?");
        }
    } else {
        orderFunction = function() {
            alert("You can choose between cola and water.");
        };
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    var foodOrderFunction;
    if (passenger.ticket === "firstclass") {
        foodOrderFunction = function() {
            alert("Would you like chicken or pasta?");
        }; 
    } else if (passenger.ticket === "premium") {
        foodOrderFunction = function() {
            alert("Would you like a cheese plate or a salad.");
        };
    } else {
        foodOrderFunction = function() {
            alert("Nuts or Pretzel?")
        };
    }
    return foodOrderFunction;
}

function serveCustomer(passenger) {
    // get drink order
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    // get dinner order
    getDrinkOrderFunction();
    getDinnerOrderFunction();
    // show movie
    getDrinkOrderFunction();
    // pick up trash

}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    };
}

var havePaid = checkAllPassengers(passenger, checkNotPaid);
var canFly = checkAllPassengers(passenger, checkNoFlyList);


if (!havePaid) {console.log("We can't fly because someone has not paid.")};
if (!canFly) {console.log("We can't fly because someone is on the no Fly list.")};
checkAllPassengers(passenger, printPassenger);
servePassengers(passenger);
