const app = new Vue({
    el: '#app',
    data: {
        cerca: '',
        filmList: [],
        tvList: [],
    },

    methods: {

        filterCerca() {
            if (this.cerca.length >= 4) {
                this.films(),
                this.tvs()
            }
            //pulizia placeholder input
            this.cerca = ''
        },
        films() {
            axios.get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: '293279bb3908f24597440e51fb280b4c',
                    lenguage: 'it-IT',
                    query: this.cerca
                }
            })
            
            .then( response => {
                this.filmList = response.data.results;
                
              })
            .catch(error => {
                // handle error
                console.log(error);
              })
    

            },

        tvs() {
            axios.get("https://api.themoviedb.org/3/search/tv", {
                params: {
                    api_key: '293279bb3908f24597440e51fb280b4c',
                    lenguage: 'it-IT',
                    query: this.cerca
                }
            })
            
            .then( response => {
                this.tvList = response.data.results;
                
              })
            .catch(error => {
                // handle error
                console.log(error);
              })
    
            },

            getVote(vote) {
                return Math.ceil (vote / 2);
            },

            getPoster(path) {
                 return `https://image.tmdb.org/t/p/w342/${path}`
             },

            checkPoster(poster){
                if (poster != "") 
                return poster
            },
            
            
        }

        },
    );
