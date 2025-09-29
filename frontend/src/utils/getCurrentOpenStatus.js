export const getCurrentOpenStatus = (hours) => {
  // Simple implementation - you can enhance this with actual time checking
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.toLocaleDateString("en-US", { weekday: "short" });

  const todayHours = hours?.find((h) => h.day === currentDay);
  if (!todayHours) return { isOpen: false, text: "Closed today" };

  // Basic time parsing - enhance as needed
  const openHour = parseInt(todayHours.open);
  const closeHour = parseInt(todayHours.close);

  const isOpen = currentHour >= openHour && currentHour < closeHour;
  return {
    isOpen,
    text: isOpen ? `Open until ${todayHours.close}` : "Closed now",
  };
};
