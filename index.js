function Person(name){
  this.name = name;
  let test = {age: 30, height: 170};
  let optimum = function(factor){
    console.log(factor)
    console.log(test)
  }
  this.run = function(){
    optimum(0.5)
    console.log(this.name + ' can run fast')
  }
}

const another = new Person("Jane")
another.run()
