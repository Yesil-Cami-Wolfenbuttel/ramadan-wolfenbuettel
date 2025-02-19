
document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
  };

  const themeToggleButton = document.getElementById('theme-toggle');
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
  }

  // Countdown Timer Logic
  setInterval(() => {
    const now = new Date();
    const maghrib = new Date();
    maghrib.setHours(17, 32, 0); // Maghrib time (17:32)
    maghrib.setSeconds(0); // Ensure no leftover seconds

    const diff = maghrib - now; // Difference in milliseconds

    if (diff > 0) {
      // Calculate hours, minutes, and seconds
      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

      // Update countdown display
      document.getElementById('countdown').innerText = `${hours}:${minutes}:${seconds} 
      bis Maghrib`;
    } else {
      // Once Maghrib time is reached
      document.getElementById('countdown').innerText = 'Es ist Zeit für Maghrib!';
    }
  }, 1000); // Update every second

  // Hadith des Tages
  const hadiths = [
    "„ALLAH'IM SENIN IÇIN ORUÇ TUTTUM, SENIN RIZKINLA ORUCUMU AÇIYORUM. HAMD OLSUN VERMIŞ OLDUĞUN NIMETLERE. OH ALLAH. FÜR DICH HABE ICH GEFASTET UND MIT DEINEN GABEN BEGEHE ICH MEIN IFTAR“ - AMIN",
  ];

  const hadithElement = document.getElementById('hadith');
  if (hadithElement) {
    hadithElement.innerText = hadiths[new Date().getDay() % hadiths.length];
  }

  // Leaflet.js Map Initialization
  var map = L.map('map').setView([52.1654719, 10.5229386], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([52.1654719, 10.5229386]).addTo(map)
    .bindPopup('DITIB Moschee - Schützenstraße 37, 38304 Wolfenbüttel')
    .openPopup();
});
