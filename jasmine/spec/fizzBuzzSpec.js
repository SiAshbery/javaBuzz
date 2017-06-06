describe('Javabuzz', function() {

    var javabuzz;

    beforeEach(function () {
      javabuzz = new Javabuzz();
    })

    describe('known when a number is', function(){
      it('divisible by 3', function() {
        expect(javabuzz.isDivisibleByThree(3)).toBe(true);
      });

      it('divisible by 5', function() {
        expect(javabuzz.isDivisibleByFive(5)).toBe(true);
      });
    });

    describe('known when a number is NOT', function(){
      it('divisible by 3', function() {
        expect(javabuzz.isDivisibleByThree(4)).toBe(false);
      });

      it('divisible by 5', function() {
        expect(javabuzz.isDivisibleByFive(4)).toBe(false);
      });
    });




});
