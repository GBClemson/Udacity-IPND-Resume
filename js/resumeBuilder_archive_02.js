/*
This is empty on purpose! Your code to build the resume will go here.
 */

var awesomeThoughts = "I am Greg and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
console.log(funThoughts);

var name = "Greg Bopp";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

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
	$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
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
		"schoolName": "Clemson University",
		"location": "Clemson, SC, US",
		"degree": "BA",
		"major": ["Architecture"],
		"dates": 2004,
		"url": "http://www.clemson.edu"	
	},{
		"schoolName": "Tri-County Technical College",
		"location": "Pendleton, SC, US",
		"degree": "AS",
		"major": ["University Transfer"],
		"dates": 2000,
		"url": "http://www.tctc.edu"
	}],
  "onlineCourses": [
	{
		"title": "IPND",
		"school": "Udacity",
		"dates": 2017,
		"url": "http://www.udacity.com"
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
	}else{
		console.log("You got no skoolin'!!");
	}
}
education.display();
/*
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];
}
$("#main").append(internationalizeButton);*/