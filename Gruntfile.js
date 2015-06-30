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
		clean:{
			tmp:['tmp']
		},
		copy:{
			dev:{
				files:[{
					expand:true,
					src: ['public/**/*.*'],
					dest:'tmp/'
				},
				{
					expand: true,
					flatten:true,
					src:['bower_components/**/angular.js',
					'bower_components/**/bootstrap.js',
					'bower_components/**/angular-route.js'],
					dest:'tmp/public/lib'
				}]
			}
		},
		connect: {
			dev: {
				options: {
					base:'tmp/public',
					hostname:'localhost',
					port: 3000,
					open:true,
					livereload:true
				}
			}
		},
		watch: {
			dev: {
				files:['public/**/*.*'],
				tasks:['copy'],
      			options:{
      				livereload: true
      			}
    		}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				autoWatch: true
			}
		}
	});


	grunt.registerMultiTask('hello','Hello',function(){
		console.log('Hello Grunt, depuis %s!, avec la config %s',this.data,this.target);//this.target=> le nom de l'attribut. this.data=>sa valeur
	});


	grunt.registerTask('copy-and-connect-and-watch',['clean','copy','connect','watch']);//le copy sert à créer une sorte d'espace de travail à partir de sources éparses

	//
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');//lancer par "grunt karma"

	//Task par défaut (appelée par "grunt")
	grunt.registerTask('default','hello');
};
