var dirtBiker = {
    name: "Jhon",
    age: 23,
    height: "5ft 8in",
    bikes: [
        {
            cc: 450,
            color: "green",
            make: "kawaski",
        },{
            cc: 750,
            color: "oriang",
            make: "honda",
        },{
            cc: 250,
            color: "white",
            make: "honda",
        },{
            cc: 1550,
            color: "black",
            make: "kawaski",
        }        
    ],
    favoritRaces: [
        {
            track: {
                requiredCC: 250,
                location: {
                    utah: [
                        "Shouth Jordan",
                        "Saint George",
                    ],
                    idaho:[
                        "Chalder",
                        "Wilder",
                    ],
                    mexico: [
                        "Baha",
                        "crel",
                    ]
                },    
            },
            hillClimbing: {
                requiredCC: 750,
                location: function(){
                    return this.favoritRaces.track.location.utah
                }
            }    
        },    
    ]
}