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

      it('divisible by 15', function() {
        expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
      });
    });

    describe('known when a number is NOT', function(){
      it('divisible by 3', function() {
        expect(javabuzz.isDivisibleByThree(4)).toBe(false);
      });

      it('divisible by 5', function() {
        expect(javabuzz.isDivisibleByFive(4)).toBe(false);
      });

      it('divisible by 15', function() {
        expect(javabuzz.isDivisibleByFifteen(4)).toBe(false);
      });
    });

    describe('when playing, says', function() {
      it('says "Java" when a number is divisible by 3 ', function() {
          expect(javabuzz.says(3)).toEqual("Java");
      });

      it('says "Buzz" when a number is divisible by 5', function() {
          expect(javabuzz.says(5)).toEqual("Buzz");
      });

      it('says "JavaBuzz" when a number is divisible by 15', function() {
          expect(javabuzz.says(15)).toEqual("JavaBuzz");
      });
    });


});
