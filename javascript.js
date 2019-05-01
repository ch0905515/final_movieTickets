


$.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=54400abc068adca7102fee24733fbc06&language=en-US&page=1", function (jsObject) {
    
   console.log(jsObject);

   
    var app = new Vue({
        el: '#app',
        data: {
            count: 3,
            arr:  jsObject.results
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