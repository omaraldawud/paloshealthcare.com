// utils/getMedTypeIcon.js
export function getMedTypeIcon(medType) {
  if (!medType) return "bi-geo-alt"; // fallback

  switch (medType.toLowerCase()) {
    case "clinic":
      return "bi-hospital"; // 🏥 clinic
    case "pharmacy":
      return "bi-capsule"; // 💊 pharmacy
    case "hospital":
      return "bi-building"; // 🏢 hospital
    case "doctor":
    case "physician":
      return "bi-person-badge"; // 👨‍⚕️ doctor
    case "dentist":
      return "bi-emoji-smile"; // 😁 dentist
    case "lab":
    case "laboratory":
      return "bi-droplet"; // 🧪 lab
    case "urgentcare":
      return "bi-lightning-charge";
    case "cardio":
      return "bi-heart-pulse";
    case "prmarycare":
      return "bi-heart-pulse";
    default:
      return "bi-geo-alt"; // 📍 fallback
  }
}
