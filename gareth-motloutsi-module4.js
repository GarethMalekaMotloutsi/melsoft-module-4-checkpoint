
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

