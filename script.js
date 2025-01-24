document.addEventListener("DOMContentLoaded", () => {
    const timesContainer = document.getElementById("times");
  
    fetch("gebetszeiten.json")
      .then((response) => response.json())
      .then((data) => {
        const today = new Date().toISOString().split("T")[0];
        const todayTimes = data.dates.find((entry) => entry.date === today);
  
        if (todayTimes) {
          timesContainer.innerHTML = `
            <h3>Datum: ${todayTimes.date}</h3>
            <p><strong>Fajr:</strong> ${todayTimes.fajr}</p>
            <p><strong>Dhuhr:</strong> ${todayTimes.dhuhr}</p>
            <p><strong>Asr:</strong> ${todayTimes.asr}</p>
            <p><strong>Maghrib:</strong> ${todayTimes.maghrib}</p>
            <p><strong>Isha:</strong> ${todayTimes.isha}</p>
          `;
        } else {
          timesContainer.innerHTML = "<p>Keine Gebetszeiten für heute gefunden.</p>";
        }
      })
      .catch((error) => {
        console.error("Fehler beim Laden der Gebetszeiten:", error);
        timesContainer.innerHTML = "<p>Fehler beim Laden der Daten.</p>";
      });
  });

  