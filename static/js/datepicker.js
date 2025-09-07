document.addEventListener('DOMContentLoaded', function() {
    // Initialize date pickers
    flatpickr("input[type=date]", {
        altInput: true,
        altFormat: "d/m/Y",
        dateFormat: "Y-m-d", // This sends Y-m-d to the server
        minDate: "today",
        enableTime: false,
        // Ensure the calendar opens above the input if there's not enough space below
        position: "auto",
        // Allow selecting a range of dates
        mode: "single"
    });
});
