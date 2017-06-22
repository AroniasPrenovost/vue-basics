// new instance 
var vm = new Vue({
  el: '#vue-instance',
  data: {
  	x: 1,
    name: '',
    greeting: 'Hello VueJs!',
    isLoggedIn: false,
    inventory: [
      {name: 'MacBook Air', price: 1000},
      {name: 'MacBook Pro', price: 1800},
      {name: 'Lenovo W530', price: 1400},
      {name: 'Acer Aspire One', price: 300}
    ]
  },
  methods: {
    sayHello: function(){
      alert('Hey there, ' + this.name);
    },
    login: function() {
      // 'this' refers to the vm instance
      this.isLoggedIn = !this.isLoggedIn;
    }
  },
   computed: {
    doubleX: function() {
      return this.x * 2;
    }
  }
});