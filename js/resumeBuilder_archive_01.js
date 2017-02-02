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
bio.biopic="images/me.png";

$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile)); 
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email)); 
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github)); 
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));  
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills.replace("%data%",bio.skills));

var work = {};
work.employer="Awesomeness Inc";
work.position="Web Developer";
work.tenure="Since 2012";
work.workLocation="Greenville, SC";
work.workDescription="This is a really cool description of what I do everyday for Awsomeness Inc.!";
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%",work["employer"]));
$("#workExperience").append(HTMLworkTitle.replace("%data%",work["postion"]));
$("#workExperience").append(HTMLworkDates.replace("%data%",work["tenure"])); 
$("#workExperience").append(HTMLworkLocation.replace("%data%",work["workLocation"])); 
$("#workExperience").append(HTMLworkDescription.replace("%data%",work["workDescription"]));

var projects = {};
projects.title="Electric City Printing Website";
projects.dates=2006;
projects.description="New flash based website for Electric City Printing Company";
projects.image="images/ecpc.jpg";
$("#projects").append(HTMLprojectStart);
$("#projects").append(HTMLprojectTitle.replace("%data%",projects.title));
$("#projects").append(HTMLprojectDates.replace("%data%",projects.dates));
$("#projects").append(HTMLprojectDescription.replace("%data%",projects.description)); 
$("#projects").append(HTMLprojectImage.replace("%data%",projects.image));

var education = {};
education["schoolName"]="Clemson University";
education["degree"]="B.A. Architecture";
education["schoolYears"]="2001-2004";
education["schoolLocation"]="Clemson, SC";
education["major"]="Architecture";
$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%",education.schoolName));
$("#education").append(HTMLschoolDegree.replace("%data%",education.degree));
$("#education").append(HTMLschoolDates.replace("%data%",education.schoolYears)); 
$("#education").append(HTMLschoolLocation.replace("%data%",education.schoolLocation)); 
$("#education").append(HTMLschoolMajor.replace("%data%",education.major));

/*
var education = {
  "schools": [
	{
		"name": "Clemson University",
		"location": "Clemson, SC, US",
		"degree": "BA",
		"major": ["Architecture"],
		"dates": 2004,
		"url": "http://www.clemson.edu"	
	},{
		"name": "Tri-County Technical College",
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
}*/
