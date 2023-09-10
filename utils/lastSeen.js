export default function formatLastSeenDate(dateString) {
  // Extract year, month, day, hours, minutes, and seconds from the string
  const year = parseInt(dateString.substr(0, 4), 10);
  const month = parseInt(dateString.substr(4, 2), 10) - 1; // Months are zero-based
  const day = parseInt(dateString.substr(6, 2), 10);
  const hours = parseInt(dateString.substr(9, 2), 10);
  const minutes = parseInt(dateString.substr(11, 2), 10);
  const seconds = parseInt(dateString.substr(13, 2), 10);

  const lastSeenDate = new Date(Date.UTC(year, month, day, hours, minutes, seconds));
  if (isNaN(lastSeenDate)) {
    return "Invalid date";
  }

  const currentDate = new Date();
  const timeDifference = currentDate - lastSeenDate;
  const secondsDifference = Math.floor(timeDifference / 1000);

  if (secondsDifference < 60) {
    return "Just now";
  } else if (secondsDifference < 3600) {
    const minutes = Math.floor(secondsDifference / 60);
    return `${minutes} minute(s) ago`;
  } else if (secondsDifference < 86400) {
    const hours = Math.floor(secondsDifference / 3600);
    return `${hours} hour(s) ago`;
  } else {
    const days = Math.floor(secondsDifference / 86400);
    return `${days} day(s) ago`;
  }
}
