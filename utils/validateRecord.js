function validateRecord ({name , quantity , purchase_date}) {
    const errors = [];

    if (!name || name.trim()=== '') {
        errors.push('Name is required');
    }

    if (!quantity || isNaN(quantity) || Number(quantity) <= 0) {
        errors.push('Quantity must be a positive number');
    }

        if (!purchase_date || isNaN(Date.parse(purchase_date))) {
            errors.push('Purchase date must be a valid date');
        } 
        
        return errors;
    }

    module.exports = validateRecord;