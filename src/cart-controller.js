export function addToCart(id, products) {
  const product = products.find((item) => item.id === id);
  if (product) {
    return products.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });
  } else {
    return [...products, { id, count: 1 }];
  }
}

export function reduceFromCart(id, products) {
  const product = products.find((item) => item.id === id);
  if (product.count > 1) {
    return products.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count - 1 };
      } else {
        return item;
      }
    });
  } else {
    return deleteFromCart(id, products);
  }
}

export function deleteFromCart(id, products) {
  return products.filter((item) => item.id !== id);
}

export function calculateSum(products, cartProducts) {
  const sum = cartProducts.reduce((sum, current) => {
    const product = products.find((product) => product._id === current.id);
    return sum + product.price * current.count;
  }, 0);
  return sum;
}

export function saveCart(products) {
  try {
    localStorage.setItem('sport-equipe-cart', JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

export function getCart() {
  try {
    const products = localStorage.getItem('sport-equipe-cart');
    if (products) {
      return JSON.parse(products);
    }
    return [];
  } catch (error) {
    console.log(error);
  }
}
