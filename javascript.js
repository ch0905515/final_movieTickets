
//use this number to change the amount of movies
var mainCount = 3;

$.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=54400abc068adca7102fee24733fbc06&language=en-US&page=1", function (jsObject) {
    
   console.log(jsObject);

   function createVarArr(x){
       var varArr= [];

       for(var p = 0; p < x; p++){
        varArr.push([0,0]);
       }

       console.log(varArr);
       return varArr;
   
   }


    var app = new Vue({
        el: '#app',
        data: {
            count: mainCount,
            arr:  jsObject.results,
            varArr: createVarArr(mainCount),
            number: 0,
            adult: 6.99,
            child: 3.99,
            totalA: 0,
            totalC: 0,
        },
        methods: {
            getImage: function(i){
                
                return "https://image.tmdb.org/t/p/w500" + jsObject.results[i].poster_path; 
            },
            getSubtotal: function(x) {
                var aT = this.varArr[x][0] * this.adult;
                var cT = this.varArr[x][1] * this.child;

                var subT = aT + cT;
                return Math.round(subT * 100) / 100;;

            },
            
            incrementTicket: function(r,c){
                var num = this.varArr[r][c] + 1;
                if(c== 0){
                    this.totalA++;
                }
                else if (c == 1){
                    this.totalC++;
                }
                app.$set(app.varArr[r], c, num)
                this.number++;
                
                console.log("ticket added " + num)
                console.log(this.varArr[r][c]);
            },
            decrementTicket: function(r,c){
                var num = this.varArr[r][c] - 1;
                if(c== 0){
                    this.totalA--;
                }
                else if (c == 1){
                    this.totalC--;
                }
                app.$set(app.varArr[r], c, num)
                this.number--;
                
                console.log("ticket removed " + num)
                console.log(this.varArr[r][c]);
            },
            removeTickets: function(r){
                var total = this.varArr[r][0] + this.varArr[r][1];
                this.totalA -= this.varArr[r][0];
                this.totalC -= this.varArr[r][1];
                this.varArr[r][0] = 0;
                this.varArr[r][1] = 0;
                this.number -= total;
            
                console.log(this.number);
                
            }
            
        },
        computed: {
            totalTicketsA: function(){
                var num = (this.totalA * 6.99);
                return Math.round(num * 100) / 100;
                
            },
            totalTicketsC: function(){
                var num = (this.totalC * 3.99);
                return Math.round(num * 100) / 100;
                
            },
            totalTickets: function(){
                    var num = ((this.totalA * 6.99) + (this.totalC * 3.99));
                    return Math.round(num * 100) / 100;
                
            },
            tax: function(){
                var num =  (this.totalTickets * 0.081);
                return Math.round(num * 100) / 100;
            
        },
        totalFull: function(){
           var num = (this.tax + this.totalTickets);
           return Math.round(num * 100) / 100;
        
    }
        
        }
    
    })
    



});






// $.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=54400abc068adca7102fee24733fbc06&language=en-US&page=1", function (jsObject) {
                
        
//     console.log(jsObject);
   
    
    
    
// });