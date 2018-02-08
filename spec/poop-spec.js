import { Poop } from "./../js/scripts.js";

describe('Poop', function(){
  it('should make poop when we start', function(){
    const poop = new Poop(1);
    expect(poop instanceof Poop).toEqual(true);
  })

  it('should make smelliness random', function(){
    const poop = new Poop(1);
    const originalSmelliness = poop.smelliness;
    poop.setSmelliness();
    expect(poop.smelliness).not.toEqual(originalSmelliness);
  })
})
