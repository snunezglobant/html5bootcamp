describe("add a Movie", function() {   
 var moviesample

  beforeEach(function(){
         moviesample = new modelMovie({
            title: 'Sample Movie',
            year: '0000'
        });        
   });

  it('should have a value', function(){
     expect(moviesample.isEmpty()).toBe(false);
  });
});

 
