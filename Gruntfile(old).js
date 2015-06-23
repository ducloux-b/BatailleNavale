module.exports=function(grunt){
	grunt.registerTask('hello','HelloNantes',function(){
    	console.log('HelloGrunt, depuis Nantes!');
	});

	//Liste de tasks (appelée par "grunt visite")
	grunt.registerTask('etape1','etape1',function(){
		console.log('etape1');
	});
	grunt.registerTask('etape2','etape2',function(){
		console.log('etape2');
	});
	grunt.registerTask('etape3','etape3',function(){
		console.log('etape3');
	});
	grunt.registerTask('visite',['etape1','etape2','etape3']);//

	//MultiTask (appelée par "grunt hello", ou "grunt hello:configNantes"/"grunt hello:configRennes" selon la configuration que l'on veut)
	grunt.initConfig({
		hello:{
			configNantes:'Nantes',
			configRennes:'Rennes',
		},
		copy:{
			main:{
				src:['public/**/*.js','public/**/*.css','public/**/*.html'],
				dest:'tmp/',
				//ou bien on remplace dest et src par:
				//files:{'tmp/':['public/**/*.js','public/**/*.css','public/**/*.html']},
				expand:true
			},
			
		},
		connect: {
			dev: {
				options: {
					base:'public',
					hostname:'localhost',
					port: 8080,
					open:true,
					livereload:true
				}
			}
		},
		watch: {
			dev: {
				files:['public/**/*.*'],
      			options:{
      				livereload: true
      			}
    		}
		}
	});


	grunt.registerMultiTask('hello','Hello',function(){
		console.log('Hello Grunt, depuis %s!, avec la config %s',this.data,this.target);//this.target=> le nom de l'attribut. this.data=>sa valeur
	});


	grunt.registerTask('connect-and-watch',['copy','connect','watch']);//le copy sert à créer une sorte d'espace de travail à partir de sources éparses

	//
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Task par défaut (appelée par "grunt")
	grunt.registerTask('default','hello');
};
