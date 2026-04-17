const validateRecord = require('./validateRecord');

describe('validateRecord' , () => {

    it('should return no errors for valid input' , () => {
        const result = validateRecord({
            name: 'Staples',
            quantity: '5',
            purchase_date: '2024-01-15'
        });
       expect(result).toHaveLength(0);
    });

    it('should return an error if name is empty', () =>{
        const result = validateRecord({
            name: '',
            quantity: '5',
            purchase_date: "2024-01-15"
        });
        expect(result).toContain("Name is required");
    });

    it("should return an error if quantity is not a number" , () => {
       const result = validateRecord({
        name: "Staples",
        quantity: "abc",
        purchase_date: "2024-01-15"
       });
       expect(result).toContain("Quantity must be a positive number");
    });

    it("should return an error if quantity is zero or negative" , () => {
        const result = validateRecord({
          name: "Staples",
          quantity: "0",
          purchase_date: "2024-01-15"
        });
        expect(result).toContain("Quantity must be a positive number");
    });

    it("should return multiple errors if multiple fields are invalid" , () => {
        const result = validateRecord({
            name: "",
            quantity: "abc",
            purchase_date: "not-a-date"
        });
        expect(result).toHaveLength(3);
    });

    it("should return an error if purchase_date is invalid" , () => {
      const result = validateRecord({
        name: "Staples",
        quantity: "5",
        purchase_date: "not-a-date"
      });
      
      expect(result).toContain("Purchase date must be a valid date");
    });

});