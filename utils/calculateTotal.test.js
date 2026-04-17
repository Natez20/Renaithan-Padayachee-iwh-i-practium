const calculateTotal = require("./calculateTotal");

describe("calulateTotal" , () => {
  
    it('should return no errors' , () => {
    const result = calculateTotal(5,40);
    expect(result).toBe(200);
});

it("should return an error if non number" , () => {
   const result = calculateTotal("abc",40 );
   expect(result).toBeNull();
});

it("should return an error if zero or negative number", () =>{
   const result = calculateTotal(6,-1);
   expect(result).toBeNull();
});

it('should return no errors if valid combinations' , () => {
    const result = calculateTotal(6,80);
    expect(result).toBe(480);
});


});