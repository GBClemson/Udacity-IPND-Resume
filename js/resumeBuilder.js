/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {};
bio.name="Greg Bopp";
bio.role="Web Developer";
bio.contacts={
	"mobile":"864-555-1212",
	"email":"awesomeemail@email.com",
	"github":"gbclemson",
	"location":"Anderson, SC",
};
bio.welcomeMessage="I am welcoming you to my page with the welcome object";
bio.skills=["awesomeness","laugh master","lounger extraordinaire","professional eater"];
console.log("The number of entries in the skills list is "+bio.skills.length);
bio.biopic="images/me.png";

bio.display = function(){
	//$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));//OLD
	//$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));//OLD
	$("#gregNav").prepend(HTMLheaderRole.replace("%data%",bio.role));//NEW
	$("#gregNav").prepend(HTMLheaderName.replace("%data%",bio.name));//NEW
	$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile)); 
	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email)); 
	$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github)); 
	$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
	$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));  
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		var i = 0;
		/*while(i < bio.skills.length){//WHILE LOOP EXAMPLE
			//var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);//OLD
			//$("#skills").append(formattedSkill);//OLD
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));//NEW
			i = i+1;
		}*///WHILE LOOP END
		for(i=0; i < bio.skills.length; i++){//FOR LOOP EXAMPLE
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));//NEW
		}//FOR LOOP END
	}else{
		console.log("You got no skillz!!");
	}
}
bio.display();

var work = {
	"jobs": [
	{
		"employer": "AT&T",
		"title": "Account Executive",
		"workLocation": "Greenville, SC",
		"employmentDates": "Nov. 2014 - Present",
		"duties": "Help customers buy phones and other devices. more random text here that doesn't belong here but I put it here anyway because I just really wanted the text to go to another line."
	},{
		"employer": "AT&T",
		"title": "Retail Sales Consultant",
		"workLocation": "Anderson, SC",
		"employmentDates": "Feb. 2012 - Nov. 2014",
		"duties": "Help customers buy phones and other devices. more random text here that doesn't belong here but I put it here anyway because I just really wanted the text to go to another line."
	}]
};

work.display = function(){
	if(work.jobs.length > 0){
		$("#workExperience").append(HTMLworkStart);
		for(var i=0; i < work.jobs.length; i++){//FOR LOOP EXAMPLE
			$("#workExperience").append(HTMLworkEmployer.replace("%data%",work.jobs[i].employer));
			$("#workExperience").append(HTMLworkTitle.replace("%data%",work.jobs[i].title));
			$("#workExperience").append(HTMLworkLocation.replace("%data%",work.jobs[i].workLocation));
			$("#workExperience").append(HTMLworkDates.replace("%data%",work.jobs[i].employmentDates));
			$("#workExperience").append(HTMLworkDescription.replace("%data%",work.jobs[i].duties));
		}//FOR LOOP END
	}else{
		console.log("You got no work experience!!");
	}
}
work.display();

var portfolio = {
	"projects": [
	{
		"title": "Electric City Printing Website",
		"dates": 2006,
		"description": "New flash based website for Electric City Printing Company",
		"image": "images/ecpc.jpg"
	},{
		"title": "Logo for H.R. Bopp Construction Co.",
		"dates": 2010,
		"description": "New logo for a construction company",
		"image": "images/construction.jpg"
	}]
};

portfolio.display = function(){
	if(portfolio.projects.length > 0){
		$("#projects").append(HTMLprojectStart);
		for(var i=0; i < portfolio.projects.length; i++){//FOR LOOP EXAMPLE
			$("#projects").append(HTMLprojectTitle.replace("%data%",portfolio.projects[i].title));
			$("#projects").append(HTMLprojectDates.replace("%data%",portfolio.projects[i].dates));
			$("#projects").append(HTMLprojectDescription.replace("%data%",portfolio.projects[i].description)); 
			$("#projects").append(HTMLprojectImage.replace("%data%",portfolio.projects[i].image));
		}//FOR LOOP END
	}else{
		console.log("You got no projects!!");
	}
}
portfolio.display();

var education = {
  "schools": [
	{
		"schoolName": "Georgia Institute of Technology",
		"degree": "MS",
		"dates": 2022,
		"location": "Atlanta, GA, US",
		"major": ["Computer Science"]
	},{
		"schoolName": "Clemson University",
		"degree": "BA",
		"dates": 2004,
		"location": "Clemson, SC, US",
		"major": ["Architecture"]	
	},{
		"schoolName": "Tri-County Technical College",
		"degree": "AS",
		"dates": 2000,
		"location": "Pendleton, SC, US",
		"major": ["University Transfer"],
	}],
  "onlineCourses": [
	{
		"title": "Intro to Programming Nanodegree",
		"school": "Udacity",
		"dates":2017,
		"url": '<a href="https://www.udacity.com/degrees/intro-to-programming-nanodegree--nd000">Here is a link to the program!</a>'
	},{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2017,
		"url": '<a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001">Here is a link to the program!</a>'
	},{
		"title": "Full Stack Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2017,
		"url": '<a href="https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004">Here is a link to the program!</a>'
	}]
}

education.display = function(){
	if(education.schools.length > 0){
		$("#education").prepend(HTMLschoolStart);
		for(var i=0; i < education.schools.length; i++){//FOR LOOP EXAMPLE
			$("#education").append(HTMLschoolName.replace("%data%",education.schools[i].schoolName));
			$("#education").append(HTMLschoolDegree.replace("%data%",education.schools[i].degree));
			$("#education").append(HTMLschoolDates.replace("%data%",education.schools[i].dates)); 
			$("#education").append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
			$("#education").append(HTMLschoolMajor.replace("%data%",education.schools[i].major));
		}//FOR LOOP END
	}if(education.onlineCourses.length > 0){
		$("#education").append(HTMLonlineClasses);
		for(var i=0; i < education.onlineCourses.length; i++){//FOR LOOP EXAMPLE
			$("#education").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title));
			$("#education").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school));
			$("#education").append(HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates)); 
			$("#education").append(HTMLonlineURL.replace("%data%",education.onlineCourses[i].url));
		}//FOR LOOP END
	}else{
		console.log("You got no skoolin'!!");
	}
}
education.display();