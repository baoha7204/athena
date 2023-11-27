export const formatPrice = (price, currency) => {
    return price >= 0.01 ? `${(Math.round(price * 100) / 100).toFixed(2)} ${currency}` : `<0.01 ${currency}`;
};

export const formatQuantity = (quantity) => `${quantity} item` + (quantity > 1 ? 's' : '');
