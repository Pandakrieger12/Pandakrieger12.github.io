$(document).ready(function() {
    let counter = $("#counter");

    // Beim Laden der Seite die aktuelle Anzahl der Besucher vom Server abrufen und anzeigen
    updateCounterFromServer();

    // AJAX-Anfrage zum Abrufen der aktuellen Gesamtanzahl der Besucher vom Server
    function updateCounterFromServer() {
        $.ajax({
            url: "update_counter.php", // URL zum Abrufen der aktuellen Gesamtanzahl der Besucher vom Server
            type: "GET",
            success: function(response) {
                counter.text("RickRolled Counter: " + response);
            },
            error: function(xhr, status, error) {
                console.error("Fehler beim Abrufen des aktuellen Counters vom Server: " + error);
            }
        });
    }
});
