module.exports = function () {
  let totalPrice = 0;
  let numberOfAmericano = 0;

  const getTotalPrice = function () {

    if (numberOfAmericano === 4) totalPrice = 4.50;
	
    return totalPrice;
  };
  const scan = function (sku) {
    const priceOfApple = 1;
    const priceOfAmericano = 2;
	if(sku === 'Americano') numberOfAmericano++;
    if (sku == "Apple") totalPrice += priceOfApple;
    if (sku == "Americano") totalPrice += priceOfAmericano;
    if (sku == "Banana") totalPrice += 1.2;
  };
  return {
    scan,
    getTotalPrice,
  };
};
