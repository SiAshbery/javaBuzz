describe('Javabuzz', function() {

    var javabuzz;

    describe('known when a number is', function(){
      it('divisible by 3', function() {
        javabuzz = new Javabuzz();
        expect(javabuzz.isDivisibleByThree(3)).toBe(true);
      });
    });
});
