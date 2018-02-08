export class Poop {
  constructor(smelliness) {
    this.smelliness = smelliness;
  }

  setSmelliness() {
    this.smelliness = Math.random() * 1000;
  }
}
