var express = require('express'); //Load the web server module

var app = express(); //Create a new instance of the server

var port = 5000; //This is the port server - we'll use it later

app.use(express.static('public')); //Serve all the files under /public directly. This will return all the files under /public when you go to /.


app.get('/', function(req, res) { //Create a new route - this will be ignored because of the previous line!
    res.send('Hello World');
});

app.get('/eyal', function(req, res) { //Create a new route '/arik' and execute this code when someone goes to /arik
    res.json({ //res.json simply returns whatever json is passed to it. We return a simple object with basic info and social networks
    	basicInfo: {
    		firstName:'eyal', lastName: 'koren', title:'Fullstack developer'
    	},
    	socialNetworks: [
	        {
	            name: 'Facebook',
	            link: '#',
	            'iconName': 'facebook'
	        },
	        {
	            name: 'Linkedin',
	            link: '#',
	            'iconName': 'linkedin'
	        },
	        {
	            name: 'Medium',
	            link: '#',
	            'iconName': 'medium'
	        },
	        {
	            name: 'Email',
	            link: '#',
	            'iconName': 'envelope'
	        },
	        {
	            name: 'Website',
	            link: '#',
	            'iconName': 'globe'
	        },
            
        
		],
          games:[
        {
            game:'clash of clans',
            award:'best game of 2016',
            program_lan:'Java'
            
        },
            {
                game:'mario_brothers',
                award:'None',
                program_lan:'assembler++'
                
                
            },
              {
                  game:'I wanna be the boshy',
                  award:'best indie game 2013',
                  program_lan:'c++'
                  
                  
              },
        
        
        ],
        proskills:[
            {
                photshop:'30%', 
              illustrator:'65%', 
              javascript:'80%', 
               HTML_css:'80%'
            },
            
            
        ],
        perskills:[
          {
               creativity:'90%', 
               teamwork:'85%',
               hardwork:'85%', 
               leadership:'80%'          
          },
            
        ],
        Education:[
          {
              school:'benzvi high school',
              years:'12',
              college:'ort university'
          }
            
        ],
        hobbies:[
          {
              sports:[
                  {
                      sport1:'football',
                      sport2:'basketball',
                      sport3:'chess'
                  },
              ],
              other:[
                  {
                      other1:'photography',
                      other2:'game developing',
                      other3:'none'
                  },
                  
              ],
          
          }
            
        ],
        languages:[
         {
           english:'100%',
           spanish:'71%',
           french:'30%'
         },
            
            
        ],
    });
    
});

app.listen(port, function(err){ //Start the server on port 5000
    console.log('running server on port ' + port); //This code is exectued when server it up and running. We just print a message
});
