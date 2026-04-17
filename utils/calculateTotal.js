function calculateTotal(quantity, pricePerUnit) {
    if (typeof quantity !== 'number' || typeof pricePerUnit !== 'number') {
        return null;
    }
    if (quantity <= 0 || pricePerUnit <= 0) {
        return null;
    }
    return quantity * pricePerUnit;
}

module.exports = calculateTotal;