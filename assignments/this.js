/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default Binding Rule: By default the 'this' keyword refrences the global object for the current runtime environment (it is bound to the window which is the browser object).

* 2. The Implicit Binding Rule: Describes the case where a mehod refrences the 'this' keyword. When a method uses the this keyword, this refrences the object the method is called on. This can be identified by locating the dot operator, the objject the method is called on is left of the dot operator, the method is to the right of the dot.

* 3. The Explicit Binding Rule: Describes the scenario when .call, .apply, .bind is used. You have already bount the object and are oing it through another function outside the object.

* 4. The New Binding Rule: Is wehn you have an object and via the parameters you defin each part of the object and you refere to the values.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this)

// Principle 2
// code example for Implicit Binding
const pizza = {
  toppings: ['Cheese', 'Ham'],
  getToppings: function(){
    return 'Toppings: - ' + this.toppings;
  }
}
console.log(pizza.getToppings())

// Principle 3
// code example for New Binding
function Vehicle(type, year){
  this.type = type;
  this.year = year;

  this.description = function () {
      console.log(`This is a ${this.type} car that was made in ${this.year}`)
  }
}
const myFirstCar = new Vehicle('Nissan Altima', '2015')

// Principle 4
// code example for Explicit Binding
const mySecondCar = new Vehicle('BMW', '2018')
myFirstCar.description.apply(mySecondCar)
