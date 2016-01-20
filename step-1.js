1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
// Objects have another special
// ability which is that they
// know their own context. They
// can access properties and
// functions on themselves.
 
var Human = function (options) {
  this.firstName = options.firstName;
  this.preferredName = options.preferredName || options.firstName;
  this.lastName = options.lastName;
  this.height = options.heightInInches;
  this.happiness = 50;
 
  this.say = function (phrase) {
    return phrase;
  };
 
  this.sayHeight = function () {
    return 'I am ' + Math.floor(this.height/12)+ " feet and " + this.height %12 + ' inches tall.';
  };
};
 
var attrs = {
  firstName: 'Bryan',
  preferredName: 'Wes',
  lastName: 'Reid',
  heightInInches: 66
};
var Wes = new Human(attrs);
 
console.log(Wes.sayHeight());
 
var attrs = {
  firstName: 'Robert',
  preferredName: 'Robby',
  lastName: 'Hajek',
  heightInInches: 71
};
var Robby = new Human(attrs);
 
console.log(Robby.sayHeight());
 
// Our Wes and Robby instances each say
// their respective heights! Nice! We
// don't need to pass them any new
// parameters to get it right, they just
// know what it is.
 
// TODO:
// 1. Write / re-write the sayHeight function
//    so that it returns the height in feet
//    and inches.
//    e.g. Wes.sayHeight() >> 'I am 5 foot, 
//                             6 inches tall'






