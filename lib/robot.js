'use strict';

const Robot = (function Robot() {
  var directions = [ 'east', 'west', 'north', 'south' ]

  // var currentDirection = directions[i];
  // implement your solution here!
  return class Robot{

    constructor(){
      // this.bearing = bearing
      // this.coordinates = coordinates
    }

    orient(currentDirection) {
      if (directions.includes(currentDirection)){
        this.bearing = currentDirection
      } else {
        throw new Error("Invalid Robot Bearing")
      }
    }

    // ({x: 0, y: 0, direction: "north"})
    place(location) {
      let x = location.x
      let y = location.y
      this.coordinates = [x, y]
      this.bearing = location.direction
    }

    instructions(instruction) {
      let route = []
      let newArr = instruction.split('')
      for(let i in newArr) {
      switch (newArr[i]) {
        case "A":
          route.push("advance")
          this.advance()
          break;
        case 'L':
          route.push("turnLeft")
          this.turnLeft()
          break;
        case 'R':
          route.push('turnRight')
          this.turnRight()
          break;
        }
      }
      return route
    }

    at(x, y){
      this.coordinates = [x, y]
    }

    turnRight() {
      switch (this.bearing) {
        case "north":
            return this.bearing = "east"
            break;
        case "south":
            return this.bearing = "west"
            break;
        case "east":
            return this.bearing = "south"
            break;
        case "west":
            return this.bearing = "north"
            break;
      }
    }

    turnLeft() {
      switch (this.bearing) {
        case "north":
            return this.bearing = "west"
            break;
        case "south":
            return this.bearing = "east"
            break;
        case "east":
            return this.bearing = "north"
            break;
        case "west":
            return this.bearing = "south"
            break;
      }
    }

    advance() {
      switch (this.bearing) {
        case "north":
            return this.coordinates[1] +=1
            break;
        case "south":
            return this.coordinates[1] -=1
            break;
        case "east":
            return this.coordinates[0] +=1
            break;
        case "west":
            return this.coordinates[0] -=1
            break;
      }
    }

    evaluate(instruction) {
      this.instructions(instruction)

    }
  }
})()
