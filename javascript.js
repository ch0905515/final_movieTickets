
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
            varArr: createVarArr(mainCount)
        },
        methods: {
            getImage: function(i){
                
                return "https://image.tmdb.org/t/p/w500" + jsObject.results[i].poster_path; 
            },

        }
       
    
    })
    



});






// $.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=54400abc068adca7102fee24733fbc06&language=en-US&page=1", function (jsObject) {
                
        
//     console.log(jsObject);
   
    
    
    
// });