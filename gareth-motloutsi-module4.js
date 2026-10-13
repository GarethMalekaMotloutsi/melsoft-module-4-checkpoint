
console.log("Festival Access & Crowd Control System");

// Starting data from assignment
let attendees = [
    { name: "Lebo", age: 22, ticket: "General", hasTicket: true, checkedIn: false, spend: 350 },
    { name: "Aisha", age: 19, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 1200 },
    { name: "Thabo", age: 17, ticket: "General", hasTicket: true, checkedIn: false, spend: 250 },
    { name: "Naledi", age: 25, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 850 },
    { name: "Jason", age: 31, ticket: "General", hasTicket: false, checkedIn: false, spend: 0 },
    { name: "Zanele", age: 20, ticket: "General", hasTicket: true, checkedIn: false, spend: 650 },
    { name: "Karabo", age: 16, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 900 },
    { name: "Michael", age: 28, ticket: "General", hasTicket: true, checkedIn: false, spend: 450 }
];

// Challenge 1: View the Queue
console.log("\nChallenge 1: View the Queue");


// Show the details for everyone in the queue
for (const attendee of attendees) {
    console.log("========================");
    console.log("Name:", attendee.name);
    console.log("Age:", attendee.age);
    console.log("Ticket:", attendee.ticket);
    console.log("Valid Ticket:", attendee.hasTicket);
}
console.log("========================");


// Challenge 2: Who Can Enter?
console.log("\nChallenge 2: Who Can Enter?");


// Check the age and ticket before allowing entry
for (const attendee of attendees) {
    if (attendee.age >= 18 && attendee.hasTicket === true) {
        console.log(attendee.name + " -> ENTRY APPROVED");
    } else if (attendee.age < 18) {
        console.log(attendee.name + " -> ENTRY DENIED: UNDER 18");
    } else {
        console.log(attendee.name + " -> ENTRY DENIED: NO VALID TICKET");
    }
}


// Challenge 3: Access Zones
console.log("\nChallenge 3: Access Zones");


// Give each ticket type the correct wristband
for (const attendee of attendees) {
    console.log("\nName:", attendee.name);
    console.log("Ticket:", attendee.ticket);

    switch (attendee.ticket) {
        case "VIP":
            console.log("Wristband: GOLD");
            break;
        case "General":
            console.log("Wristband: BLUE");
            break;
        default:
            console.log("Wristband: UNKNOWN TICKET TYPE");
    }
}


 // Challenge 4: VIP Lounge Security
console.log("\nChallenge 4: VIP Lounge Security");

// Only valid adult VIP ticket holders can enter
for (const attendee of attendees) {
    if (
        attendee.hasTicket === true &&
        attendee.ticket === "VIP" &&
        attendee.age >= 18
    ) {
        console.log(attendee.name + " -> VIP LOUNGE ACCESS APPROVED");
    } else {
        console.log(attendee.name + " -> VIP LOUNGE ACCESS DENIED");
    }
}


 // Challenge 5: Find a Person in the Queue
console.log("\nChallenge 5: Find a Person in the Queue");

let searchName = "Zanele";

// Stop searching when the person is found
for (const attendee of attendees) {
    if (attendee.name === searchName) {
        console.log("ATTENDEE FOUND");
        console.log("Name:", attendee.name);
        console.log("Age:", attendee.age);
        console.log("Ticket:", attendee.ticket);
        console.log("Valid Ticket:", attendee.hasTicket);
        break;
    }
}



 // Challenge 6: Security Fast Lane
console.log("\nChallenge 6: Security Fast Lane");

// Skip anyone who does not have a valid ticket
for (const attendee of attendees) {
    if (attendee.hasTicket === false) {
        continue;
    }

    console.log("Checking " + attendee.name + "...");
}



 // Challenge 7: Food Voucher Rewards
console.log("\nChallenge 7: Food Voucher Rewards");

// Give a voucher based on how much each person spent
for (const attendee of attendees) {
    let voucher;

    if (attendee.spend >= 1000) {
        voucher = "R200 food voucher";
    } else if (attendee.spend >= 500) {
        voucher = "R100 food voucher";
    } else if (attendee.spend >= 300) {
        voucher = "R50 food voucher";
    } else {
        voucher = "No voucher";
    }

    console.log(attendee.name + " -> " + voucher);
}



 // Challenge 8: Festival Statistics
console.log("\nChallenge 8: Festival Statistics");

// Start all the totals at zero
let validTickets = 0;
let invalidTickets = 0;
let under18 = 0;
let vipCount = 0;
let generalCount = 0;
let totalSpend = 0;

for (const attendee of attendees) {
    if (attendee.hasTicket === true) {
        validTickets++;
    } else {
        invalidTickets++;
    }

    if (attendee.age < 18) {
        under18++;
    }

    if (attendee.ticket === "VIP") {
        vipCount++;
    } else if (attendee.ticket === "General") {
        generalCount++;
    }

    totalSpend += attendee.spend;
}

let averageSpend = totalSpend / attendees.length;

console.log("Total attendees:", attendees.length);
console.log("Valid tickets:", validTickets);
console.log("Invalid tickets:", invalidTickets);
console.log("Under 18:", under18);
console.log("General ticket holders:", generalCount);
console.log("VIP ticket holders:", vipCount);
console.log("Total spent: R" + totalSpend.toFixed(2));
console.log("Average spend: R" + averageSpend.toFixed(2));



 // Challenge 9: Find the Biggest Spender
console.log("\nChallenge 9: Find the Biggest Spender");

// Start with the first attendee and compare the others
let biggestSpender = attendees[0];

for (const attendee of attendees) {
    if (attendee.spend > biggestSpender.spend) {
        biggestSpender = attendee;
    }
}

console.log("===== TOP CUSTOMER =====");
console.log("Name:", biggestSpender.name);
console.log("Amount Spent: R" + biggestSpender.spend);
console.log("Reward: Backstage Upgrade");



 // Challenge 10: Venue Capacity
console.log("\nChallenge 10: Venue Capacity");

let capacity = 5;
let peopleInside = 0;

// Only admit people who meet the entry rules
for (const attendee of attendees) {
    if (attendee.age >= 18 && attendee.hasTicket === true) {
        peopleInside++;
        console.log(attendee.name + " entered.");
        console.log("People inside: " + peopleInside + " / " + capacity);

        if (peopleInside === capacity) {
            console.log("VENUE FULL");
            console.log("STOP ADMITTING PEOPLE");
            break;
        }
    }
}


 // Challenge 11: Closing-Time Countdown
console.log("\nChallenge 11: Closing-Time Countdown");

// Count down the minutes until the festival closes
for (let minutes = 10; minutes >= 1; minutes--) {
    console.log("Festival closes in " + minutes + " minute" + (minutes === 1 ? "" : "s") + "...");

    if (minutes === 5) {
        console.log("WARNING: LAST ENTRY HAS ENDED");
    }

    if (minutes === 2) {
        console.log("PLEASE PROCEED TO THE EXIT");
    }
}

console.log("FESTIVAL CLOSED");



 // Final Challenge: Festival Control Dashboard
console.log("\nFinal Challenge: Festival Control Dashboard");

let option = 2;

console.log("==============================");
console.log("       FESTIVAL CONTROL");
console.log("==============================");
console.log("1 - View Attendee Queue");
console.log("2 - Process Entry");
console.log("3 - View VIP Guests");
console.log("4 - View Denied Attendees");
console.log("5 - View Festival Statistics");
console.log("6 - Find Biggest Spender");
console.log("7 - Close Festival");

// Run the selected menu option
switch (option) {
    case 1:
        for (const attendee of attendees) {
            console.log(attendee.name, "-", attendee.age, "-", attendee.ticket);
        }
        break;

    case 2:
        for (const attendee of attendees) {
            if (attendee.age >= 18 && attendee.hasTicket === true) {
                console.log(attendee.name + " -> ENTRY APPROVED");
            } else {
                console.log(attendee.name + " -> ENTRY DENIED");
            }
        }
        break;

    case 3:
        for (const attendee of attendees) {
            if (
                attendee.ticket === "VIP" &&
                attendee.hasTicket === true &&
                attendee.age >= 18
            ) {
                console.log(attendee.name, "-> VIP GUEST");
            }
        }
        break;

    case 4:
        for (const attendee of attendees) {
            if (attendee.age < 18) {
                console.log(attendee.name + " -> UNDER 18");
            } else if (attendee.hasTicket === false) {
                console.log(attendee.name + " -> NO VALID TICKET");
            }
        }
        break;

    case 5:
        let dashboardValidTickets = 0;
        let dashboardInvalidTickets = 0;
        let dashboardTotalSpend = 0;

        for (const attendee of attendees) {
            if (attendee.hasTicket === true) {
                dashboardValidTickets++;
            } else {
                dashboardInvalidTickets++;
            }

            dashboardTotalSpend += attendee.spend;
        }

        console.log("Total attendees:", attendees.length);
        console.log("Valid tickets:", dashboardValidTickets);
        console.log("Invalid tickets:", dashboardInvalidTickets);
        console.log("Total spent: R" + dashboardTotalSpend.toFixed(2));
        break;

    case 6:
        let dashboardBiggestSpender = attendees[0];

        for (const attendee of attendees) {
            if (attendee.spend > dashboardBiggestSpender.spend) {
                dashboardBiggestSpender = attendee;
            }
        }

        console.log("Biggest spender:", dashboardBiggestSpender.name);
        console.log("Amount spent: R" + dashboardBiggestSpender.spend);
        break;

    case 7:
        console.log("FESTIVAL CLOSED");
        break;

    default:
        console.log("Invalid menu option");
}
