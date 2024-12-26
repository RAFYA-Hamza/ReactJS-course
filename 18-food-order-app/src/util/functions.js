export function calculateLength(data) {
  return data.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );
}

export function formattedPrice(prices) {
  const [prevPrice, newPrice] = prices;

  return (parseFloat(prevPrice) + parseFloat(newPrice)).toFixed(2);
}

export function calculateTotalPrice(data) {
  return data
    .reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.quantity * currentItem.price,
      0
    )
    .toFixed(2);
}
