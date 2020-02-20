/*Carrusel */
var carrusel = new Vue({
    el: '#carrusel',
    data: {
        contador: 0
    },
    created(){
        console.log('Carrusel hecho');
    },
    mounted(){
        setInterval(function(){
            this.contador++
            console.log(this.contador);
        }, 3000)
    }
})


/*Examples 
var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Usted cargó esta página el ' + new Date().toLocaleString()
    }
})
*/