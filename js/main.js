var app = new Vue({
    el:'#app',
    data:{
        message:"Hi! Im Huy"
    }
})

var app2 = new Vue({
    el:'#app-2',
    data:{
        message:"Ban da mo trang nay vao"+new Date().toLocaleDateString()
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:false
    }
})

var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'Hoc JavaScript'},
            {text:'Hoc Vue'},
            {text: 'ABCXYZ'}
        ]
    }
})

var app5 = new Vue({
    el:'#app-5',
    data:{
        message: 'BBBB BBBBBB OOOOOOO OOOOO'
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split(' ').reverse().join(' ')
        }
    }
})

var app6 = new Vue({
    el:'#app-6',
    data:{
        message: "QWERTYUIO"
    }
})

Vue.component('todo-item', {
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el:'#app-7',
    data:{
        groceryList:[
            {id:0, text:'A'},
            {id:1, text:'B'},
            {id:2, text:'C'}
        ]
    }
})

Vue.component('tdc-component',{
    template: '<h1>UUUUUUUUUUUUUU</h1>'
});
var app8 = new Vue({
    el:'#app-8',
});