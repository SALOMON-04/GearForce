// Initialiser la carte centrée sur la Côte d'Ivoire
const map = L.map('map').setView([5.3600, -4.0083], 13);

// Fond de carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// Exemple d'entreprise sur la carte
const entreprises = [
    { nom: "GearForce Abidjan", lat: 5.3600, lng: -4.0083, type: "Buldozer" },
    { nom: "Chantier Nord", lat: 5.3700, lng: -4.0200, type: "Grue" },
    { nom: "Transport Sud", lat: 5.3500, lng: -4.0050, type: "Foreuse" }
];

// Ajouter chaque entreprise sur la carte
entreprises.forEach(e => {
    L.marker([e.lat, e.lng])
        .addTo(map)
        .bindPopup(`
            <strong>${e.nom}</strong><br>
            Type : ${e.type}
        `);
});