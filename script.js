document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
  };

  const themeToggleButton = document.getElementById('theme-toggle');
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
  }

  // Gebetszeiten
  const fajrTime = { hours: 5, minutes: 11 }; // Fajr Zeit (05:11)
  const maghribTime = { hours: 18, minutes: 03 }; // Maghrib Zeit (18:03)
  const ishaTime = { hours: 19, minutes: 36 }; // Isha Zeit (19:36)

  function updateCountdown() {
    const now = new Date();
    const fajr = new Date();
    const maghrib = new Date();
    const isha = new Date();

    fajr.setHours(fajrTime.hours, fajrTime.minutes, 0);
    maghrib.setHours(maghribTime.hours, maghribTime.minutes, 0);
    isha.setHours(ishaTime.hours, ishaTime.minutes, 0);

    let targetTime, message;

    if (now >= fajr && now < maghrib) {
      targetTime = maghrib;
      message = "Iftara kalan süre";
    } else if (now >= isha || now < fajr) {
      // Falls nach Isha oder vor Fajr -> Countdown bis Fajr
      targetTime = fajr;
      message = "Sahura kalan süre";
      if (now >= isha) {
        fajr.setDate(fajr.getDate() + 1); // Fajr auf den nächsten Tag setzen
      }
    } else {
      document.getElementById('countdown').innerText = "Zwischen Maghrib und Isha.";
      return;
    }

    const diff = targetTime - now;

    if (diff > 0) {
      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

      document.getElementById('countdown').innerText = `${hours}:${minutes}:${seconds} ${message}`;
    } else {
      document.getElementById('countdown').innerText = "Zeit erreicht!";
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

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
