const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

export const formatDate = (date: Date | undefined) => {
  return date
    ? new Date(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Date not available";
};
