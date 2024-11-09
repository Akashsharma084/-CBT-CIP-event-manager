document.addEventListener("DOMContentLoaded", function () {
    const eventForm = document.getElementById("event-form");
    const eventsContainer = document.getElementById("events-container");

    // Sample upcoming events data
    const events = [
        { name: "Tech Conference 2024", date: "2024-12-15", location: "sharda university" },
        { name: "Art Exhibition", date: "2024-11-20", location: "agra" },
        { name: "Music Festival", date: "2024-11-25", location: "anand college" }
    ];

    // Function to render events
    function renderEvents() {
        eventsContainer.innerHTML = ""; // Clear the container
        events.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("event-card");

            eventCard.innerHTML = `
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
            `;

            eventsContainer.appendChild(eventCard);
        });
    }

    // Call renderEvents on page load
    renderEvents();

    // Handle form submission
    eventForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const eventName = document.getElementById("event-name").value;
        const eventDate = document.getElementById("event-date").value;
        const eventLocation = document.getElementById("event-location").value;

        // Add the new event to the events array
        events.push({ name: eventName, date: eventDate, location: eventLocation });

        // Clear the form
        eventForm.reset();

        // Re-render events
        renderEvents();
    });
});
