const formatDate = (dateString: string) => {
  const dateObj = new Date(dateString);

  const day = dateObj.getDate(); // e.g., 19
  const month = dateObj.toLocaleString("default", { month: "long" }); // e.g., March
  const year = dateObj.getFullYear(); // e.g., 2025

  return { day, month, year };
};

export { formatDate };
