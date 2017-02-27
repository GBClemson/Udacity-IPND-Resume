
var bio = {
	"myName":"Greg Bopp",
	"location":"Anderson, SC",
	"email": {"href":"mailto:greg@awesome.com?Subject=You%20are%20awesome!", "icon":"fa-envelope", "label":"&nbsp;greg@awesome.com"},
	"phone": {"href":"tel:+01-864-555-1212", "icon":"fa-phone", "label":"&nbsp;+01-864-555-1212"},
	"linkedin": {"href":"https://www.linkedin.com/in/greg-bopp/", "icon":"fa-linkedin", "label":"&nbsp;greg-bopp"},
	"github": {"href":"https://github.com/gbclemson", "icon":"fa-github", "label":"&nbsp;gbclemson"},	
	"role": [
		"An aspiring Web Developer",
		'A relentless pursuer of "what if"',
		"A purveyor of fine chicken wings",
		"A creator of things both physical and digital",
		"Madly in love with my wife",
		"A lover of logic",
		"A board game enthusiast",
		"A top notch team player"
	]
};    
bio.display = function(){
	var newHTMLheaderName = HTMLheaderName.replace("%data%",bio.myName);
	var newHTMLheaderlocation = HTMLheaderlocation.replace("%data%",bio.location);
	$("#bioName").append(newHTMLheaderName);
	$("#bioName").append(newHTMLheaderlocation);
	
	var newHTMLemail = HTMLemail.replace("%href%",bio.email.href)
								.replace("%icon%",bio.email.icon)
								.replace("%iconSize%","fa-lg");
	var newHTMLemailTop = newHTMLemail.replace("%label%"," ");	
	var newHTMLemailBottom = newHTMLemail.replace("%label%",bio.email.label);

	var newHTMLphoneBottom = HTMLphone.replace("%href%",bio.phone.href)
									  .replace("%icon%",bio.phone.icon)
									  .replace("%iconSize%","fa-lg")
									  .replace("%label%",bio.phone.label);

	var newHTMLlinkedin = HTMLlinkedin.replace("%href%",bio.linkedin.href)
									  .replace("%icon%",bio.linkedin.icon)
									  .replace("%iconSize%","fa-lg");
	var newHTMLlinkedinTop = newHTMLlinkedin.replace("%label%"," ");
	var newHTMLlinkedinBottom = newHTMLlinkedin.replace("%label%",bio.linkedin.label);	

	var newHTMLgithub = HTMLgithub.replace("%href%",bio.github.href)
								  .replace("%icon%",bio.github.icon)
								  .replace("%iconSize%","fa-lg");
	var newHTMLgithubTop = newHTMLgithub.replace("%label%"," ");
	var newHTMLgithubBottom = newHTMLgithub.replace("%label%",bio.github.label);

	$("#topContacts").append(newHTMLemailTop); 
	$("#topContacts").append(newHTMLlinkedinTop);
	$("#topContacts").append(newHTMLgithubTop);

	$("#bottomContacts").append(newHTMLemailBottom);
	$("#bottomContacts").append(newHTMLphoneBottom);
	$("#bottomContacts").append(newHTMLlinkedinBottom);
	$("#bottomContacts").append(newHTMLgithubBottom);

	$("#bioRole").append(HTMLheaderRole);
	function rotateTerm() {
    var roleNum = $("#rotate").data("term") || 0;
    $("#rotate").data("term", roleNum == bio.role.length -1 ? 0 : roleNum + 1).text(bio.role[roleNum]).fadeIn()
                .delay(4000).fadeOut(300, rotateTerm);
    }
    $(rotateTerm);
}
bio.display();

var welcome = {
	"welcomeMessage":"I am welcoming you to my page with the welcome object",
	"biopic":"images/vitalogyHome-Green.png"
}
welcome.display = function(){
	$("#biopic").append(HTMLbioPic.replace("%data%",welcome.biopic));
	$("#welcome").append(HTMLwelcomeMsg.replace("%data%",welcome.welcomeMessage));
}
welcome.display();

var skillsStart = {
	"circleData": [
	{
		"title": "HTML / CSS",
		"percentage": "75",
		"radius": "70"
	},{
		"title": "Bootstrap",
		"percentage": "65",
		"radius": "70"
	},{
		"title": "Javascript",
		"percentage": "45",
		"radius": "70"
	},{
		"title": "Python",
		"percentage": "30",
		"radius": "70"
	},{
		"title": "Chicken Wings",
		"percentage": "250",
		"radius": "70"	
	},{
		"title": "Desire to Learn",
		"percentage": "199",
		"radius": "70"
	}],
	/*This is where you set the percentage of the entire circle shown to make it look more like a speedometer type chart:
		Examples:
			"circleSegment": "50" = 50% of an full circle
			"circleSegment": "65" = 65% of an full circle
			"circleSegment": "100" = a full circle
	*/
	"circleSegment": "55",//Set this between 50 and 100
	"strokeWidth": "8",//This sets the thickness of each filled bar on the chart
	"circleColors":["#ff6600", "#33cc33", "#bf8040", "#ffa500", "#aaff00", "#ff6600", "#33cc33", "#bf8040", "#ffa500", "#aaff00"]
};
skillsStart.display= function(){
	if(skillsStart.circleSegment.length > 0){
		var circleSegment = Number(skillsStart.circleSegment/100);
	}else{
		console.log("You got no circleSegment size!!");
	}
	if(skillsStart.circleData.length > 0){
		$("#skillsHeading").append(HTMLskillsHeading);
		for(var i=0; i < skillsStart.circleData.length; i++){//FOR LOOP EXAMPLE
			var strokeWidth = Number(skillsStart.strokeWidth);
			var colorCount = 0;//This will be used to establish which color to make the circle segments
			var color = skillsStart.circleColors[colorCount];
			var radius = skillsStart.circleData[i].radius;
			var percentage = (skillsStart.circleData[i].percentage/100);
			var svgCircumference = (2*Math.PI*radius);
			var svgBoxWidth = Number(radius*2.5);
			var svgBoxHeight = Number(svgBoxWidth*(circleSegment+0.3));
			var svgOrigin = (radius*1.25);
			var dashArrayShown = (svgCircumference*circleSegment);
			var svgPercent = (svgCircumference-(percentage*dashArrayShown));
			var svg100Percent = (svgCircumference-dashArrayShown);
			var rotateCircle = (360*((1-circleSegment)/2)+90);
			var svgPercentText = skillsStart.circleData[i].percentage;
			var svgLineX1 = (svgBoxWidth*0.1);
			var svgLineX2 = (svgBoxWidth*0.9);
			var svgLineY = (svgBoxWidth*(circleSegment+0.1));
			var svgPercentY = (svgLineY-10);
			var svgTitleY = (svgLineY+20);
			var svgTitle = skillsStart.circleData[i].title;

			var newHTMLskillsStart = HTMLskillsStart.replace("%svgWidth%", svgBoxWidth)
										       	    .replace("%svgHeight%", svgBoxHeight);

			var newHTMLskills = HTMLskills;
			var count = 0;//This will be used to establish which color to make the circle segments
			while(percentage > 1){
				newHTMLskills = newHTMLskills.replace(/%svgOrigin%/g, svgOrigin)
								    	     .replace(/%radius%/g, radius)
								    	     .replace(/%strokeWidth%/g, strokeWidth)
								    	     .replace("%dashArrayShown%", dashArrayShown)
								    	     .replace(/%rotateCircle%/g, rotateCircle)
								    	     .replace("%strokeColor%", color)
								    	     .replace("%svgCircumference%", svgCircumference)
								    	     .replace("%svgPercent%", svg100Percent);
				newHTMLskills = newHTMLskills+HTMLskills;
				colorCount = (colorCount+1);
				color = skillsStart.circleColors[colorCount];
				percentage = (percentage-1);
				radius = (radius-(strokeWidth+1));
				svgCircumference = (2*Math.PI*radius);
				dashArrayShown = (svgCircumference*circleSegment);
				svg100Percent = (svgCircumference-dashArrayShown);
				svgPercent = (svgCircumference-(percentage*dashArrayShown));

			}
			newHTMLskills = newHTMLskills.replace(/%svgOrigin%/g, svgOrigin)
						    	         .replace(/%radius%/g, radius)
						    	         .replace(/%strokeWidth%/g, strokeWidth)
						    	         .replace("%dashArrayShown%", dashArrayShown)
						    	         .replace(/%rotateCircle%/g, rotateCircle)
						    	         .replace("%strokeColor%", color)
						    	         .replace("%svgCircumference%", svgCircumference)
						    	         .replace("%svgPercent%", svgPercent);			
			/*newHTMLskills = newHTMLskills;*/

			var newHTMLskillsEnd = HTMLskillsEnd.replace(/%svgOrigin%/g, svgOrigin)
												.replace("%svgPercentY%", svgPercentY)
												.replace(/%svgTitleColor%/g, skillsStart.circleColors[0])
												.replace("%svgPercentText%", svgPercentText)
												.replace("%svgLineX1%", svgLineX1)
												.replace(/%svgLineY%/g, svgLineY)
												.replace("%svgLineX2%", svgLineX2)
												.replace("%svgTitleY%", svgTitleY)
												.replace("%svgTitle%", svgTitle);

			combinedHTMLskills = (newHTMLskillsStart+newHTMLskills+newHTMLskillsEnd);
				/*console.log("currently i is: "+i+" and combinedHTMLskills is"+combinedHTMLskills);*/
			$("#skills").append(combinedHTMLskills);

		}//FOR LOOP END
	}else{
		console.log("You got no skills's!!");
	}
};
skillsStart.display();

var portfolio = {
	"projects": [
	{
		"projectTitle": "Simple HTML/CSS Website",
		"description": "This project was completed while going through the Intro to Programming Nanodegree at udacity.com. It is an old school, \
very basic website that was developed purely in html and css. My focus was to try new things with the large buttons to make them responsive to a \
changing viewport as well as ensure that the top navigation area was consistent through each page as it loads.",
		"overlayText": "Simple 4 page website done purely in html and css",
		"images": ["project_01-01.JPG","project_01-02.JPG","project_01-03.JPG","project_01-04.JPG"]
	},{
		"projectTitle": "Python Fill-in-the-Blanks Quiz",
		"description": "This project was an Intro to Programming Nanodegree assignment through udacity.com. It is done completely in python \
and it is a series of procedures that call on one another to display a short fill in the blanks quiz based on one of 3 difficulties that the \
user selects. Once you select a difficulty, you will be asked to give a number of incorrect answers allowed. I tried to make it completely \
break proof by accounting for answers that would not be acceptable.  Once you have completed a quiz you will be asked if you would like to \
try another one.",
		"overlayText": "Python fill-in-the-blanks quiz",
		"images": ["project_02-01.JPG","project_02-02.JPG","project_02-03.JPG","project_02-04.JPG"]
	},{
		"projectTitle": "Movie Trailer Website",
		"description": "This was a fun project to do during the Intro to Programming Nanodegree at udacity.com. It is a simple movie info / trailer \
website that is completely generated by using backend data stored in python. When you execute one of the files, you will launch a web browser and \
the web page is dynamically populated with all of the movies and info that was loaded into a python file. This was a great exercise in seeing \
how powerful the backend can be in a very approachable way. I opted to add a bit more functionality to the project by dispalying each movie's \
release year, rating and a brief summary on the home page.",
		"overlayText": "One page website that collects data from pyton files and launches a page with movie information",
		"images": ["project_03-01.JPG","project_03-02.JPG","project_03-03.JPG","project_03-04.JPG"]
	}]
};
portfolio.display = function(){
	if(portfolio.projects.length > 0){
		$("#projectStart").append(HTMLprojectStart);
		for(var i=0; i < portfolio.projects.length; i++){
			var modalNum = (i+1);
				
			var newHTMLmodalStart = HTMLmodalStart.replace(/%modalNum%/g, modalNum)
											  	  .replace("%thumbnailImage%", portfolio.projects[i].images[0])
											  	  .replace("%overlayText%", portfolio.projects[i].overlayText)
											  	  .replace("%projectTitle%", portfolio.projects[i].projectTitle);
			
			for(var j=0; j < portfolio.projects[i].images.length; j++){

				if(j===0){
					var newHTMLmodalImages = HTMLmodalImages.replace("item", "item active");
				}

				newHTMLmodalImages = newHTMLmodalImages.replace("%projectImage%", portfolio.projects[i].images[j]);

				if(j < (portfolio.projects[i].images.length-1)){		
					newHTMLmodalImages = newHTMLmodalImages+HTMLmodalImages;
				}
			}

			var newHTMLmodalEnd = HTMLmodalEnd.replace(/%modalNum%/g, modalNum)
											  .replace("%description%", portfolio.projects[i].description);

			combinedModal = (newHTMLmodalStart+newHTMLmodalImages+newHTMLmodalEnd);
			$("#projects").append(combinedModal);

		}//FOR LOOP END
	}else{
		console.log("You got no projects!!");
	}
}
portfolio.display();

var work = {
	"jobs": [
	{
		"employer": "AT&T",
		"location": "Greenville, SC",
		"workDates": "11/14 - Present",
		"title": "Account Executive",
		"duties": "Help customers buy phones and other devices. more random text here that doesn't belong here but I put it here anyway \
			because I just really wanted the text to go to another line."
	},{
		"employer": "Second Company",
		"location": "Atlanta, GA",
		"workDates": "06/12 - 11/14",
		"title": "Second title",
		"duties": "Help customers do second class stuff. more random text here that doesn't belong here but I put it here anyway \
			because I just really wanted the text to go to another line."
	},{
		"employer": "AT&T",
		"location": "Anderson, SC",
		"workDates": "02/10 - 05/12",
		"title": "Retail Sales Consultant",
		"duties": "Help customers buy phones and other devices. more random text here that doesn't belong here but I put it here anyway \
			because I just really wanted the text to go to another line."
	}]
};
work.display = function(){
	if(work.jobs.length > 0){
		$("#workStart").append(HTMLworkStart);
		for(var i=0; i < work.jobs.length; i++){//FOR LOOP EXAMPLE
			var newHTMLworkEntry = HTMLworkEntry.replace("%employer%",work.jobs[i].employer)
												.replace("%workLocation%",work.jobs[i].location)
												.replace("%workDates%",work.jobs[i].workDates)
												.replace("%title%",work.jobs[i].title)
												.replace("%duties%",work.jobs[i].duties)

			$("#workEntries").append(newHTMLworkEntry);
				/*console.log("currently i is: "+i+" and newHTMLworkEntry is: "+newHTMLworkEntry);*/
		}//FOR LOOP END
	}else{
		console.log("You got no work experience!!");
	}
}
work.display();

var education = {
  "schools": [
	{
		"degree": "Masters of Science",
		"major": "Computer Science",
		"dates": 2022,
		"schoolName": "Georgia Institute of Technology",
		"location": "Atlanta, GA"
	},{
		"degree": "Bachelor of Arts",
		"major": "Architecture",
		"dates": 2004,
		"schoolName": "Clemson University",
		"location": "Clemson, SC"
	},{
		"degree": "Associate of Science",
		"major": "University Transfer",
		"dates": 2000,
		"schoolName": "Tri-County Technical College",
		"location": "Pendleton, SC"
	}],

  "onlineCourses": [
	{
		"courseTitle": "Full Stack Web Developer Nanodegree",
		"dates": 2017,
		"onlineSchool": "Udacity",
		"courseURL": '<a href="https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004">course link</a>'	
	},{
		"courseTitle": "Front-End Web Developer Nanodegree",
		"dates": 2017,
		"onlineSchool": "Udacity",
		"courseURL": '<a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001">course link</a>'
	},{
		"courseTitle": "Intro to Programming Nanodegree",
		"dates":2017,
		"onlineSchool": "Udacity",
		"courseURL": '<a href="https://www.udacity.com/degrees/intro-to-programming-nanodegree--nd000">course link</a>'
	}]
}
education.display = function(){
	if(education.schools.length > 0){
		$("#educationStart").append(HTMLschoolStart);
		for(var i=0; i < education.schools.length; i++){//FOR LOOP EXAMPLE
			var newHTMLschoolEntry = HTMLschoolEntry.replace("%degree%",education.schools[i].degree)
													.replace("%major%",education.schools[i].major)
													.replace("%dates%",education.schools[i].dates) 
													.replace("%schoolName%",education.schools[i].schoolName)
													.replace("%schoolLocation%",education.schools[i].location);
			$("#educationEntries").append(newHTMLschoolEntry);
													
		}//FOR LOOP END
	}if(education.onlineCourses.length > 0){
		$("#onlineStart").append(HTMLonlineStart);
		for(var i=0; i < education.onlineCourses.length; i++){//FOR LOOP EXAMPLE
			var newHTMLonlineEntry = HTMLonlineEntry.replace("%courseTitle%",education.onlineCourses[i].courseTitle)
													.replace("%dates%",education.onlineCourses[i].dates)
													.replace("%onlineSchool%",education.onlineCourses[i].onlineSchool)
													.replace("%courseURL%",education.onlineCourses[i].courseURL);
			$("#onlineEntries").append(newHTMLonlineEntry);
		}//FOR LOOP END
	}else{
		console.log("You got no skoolin'!!");
	}
}
education.display();

$("#mapDiv").append(googleMap);

