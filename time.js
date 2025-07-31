function convertISTtoJST(istTimeStr) {
  // Create a Date object in IST
  const istDate = new Date(`1970-01-01T${istTimeStr}+05:30`);

  // Convert to JST by adding 3.5 hours (difference between IST and JST)
  const jstDate = new Date(istDate.getTime() + (3.5 * 60 * 60 * 1000));

  // Format the JST time
  const jstHours = jstDate.getUTCHours().toString().padStart(2, '0');
  const jstMinutes = jstDate.getUTCMinutes().toString().padStart(2, '0');

  return `${jstHours}:${jstMinutes} JST`;
}

// Example usage:
console.log(convertISTtoJST("14:00")); // Converts 2:00 PM IST to JST
