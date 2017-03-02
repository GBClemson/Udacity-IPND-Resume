/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<span>%data%,&nbsp;</span>';
var HTMLheaderRole = '<span>%data%</span>';

var HTMLcontactGeneric = '<li><a href="%href%"><i class="fa %icon% fa-fw %iconSize%"></i></a>%label%</li>';
var HTMLmobile = '<li><a href="%href%"><i class="fa %icon% fa-fw %iconSize%"></i></a>%label%</li>';
var HTMLemail = '<li><a href="%href%"><i class="fa %icon% fa-fw %iconSize%"></i></a>%label%</li>';
var HTMLlinkedin = '<li><a href="%href%"><i class="fa %icon% fa-fw %iconSize%"></i></a>%label%</li>';
var HTMLgithub = '<li><a href="%href%"><i class="fa %icon% fa-fw %iconSize%"></i></a>%label%</li>';
var HTMLblog = '<li><a href="%href%"><i class="fa %icon% fa-fw %iconSize%"></i></a>%label%</li>';
var HTMLlocation = '<span class="nav-location">%data%</span>';

var HTMLbioPic = '<img class="biopic img-responsive center-block" img src="%data%" style="width: 80%;">';
var HTMLwelcomeMsg = '<span class="welcome-message white-text">%data%</span>';

var HTMLskillsStart = '<h1 id="skills-h3">Skills at a Glance:</h1><ul id="skills" class="container"></ul>';
var HTMLskills = '<li class="flex-item col-xs-12 col-sm-6 col-md-2"><h4 class="orange-text">-&nbsp;%data%</h4></li>';

var HTMLprojectStart = '<hr><div><h1>Projects</h1></div><hr><div class="container-fluid text-center"><div id="projects" class="row-fluid"></div></div><hr>';

var HTMLprojectTitle =
    '<div class="col-sm-6 col-md-6 col-lg-4 projectThumbnail">'+
      '<a href="#myModal%modalNum%" role="button" data-toggle="modal">'+
          '<img src="images/projects/%thumbnailImage%" alt="project-%modalNum%" class="image">'+
          '<div class="thumbnail-overlay"><div class="thumbnailText">%overlayText%</div></div>'+
      '</a>'+
    '</div>'+
    '<div class="modal fade" id="myModal%modalNum%" role="dialog">'+
      '<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header">'+
      '<button type="button" class="close" data-dismiss="modal">&times;</button><h2 class="modal-title">%title% -&nbsp;';
var HTMLprojectDates = '%dates%</h2></div><div id="carousel-project-%modalNum%" class="carousel slide" data-ride="carousel"><div class="carousel-inner">';
var HTMLprojectImage = '<div class="item"><img class="img-responsive" src="images/projects/%projectImage%"></div>';
var HTMLprojectDescription =
  '</div>'+
    '<a class="left carousel-control" href="#carousel-project-%modalNum%" role="button" data-slide="prev">'+
      '<span class="glyphicon glyphicon-chevron-left"></span></a>'+
    '<a class="right carousel-control" href="#carousel-project-%modalNum%" role="button" data-slide="next">'+
      '<span class="glyphicon glyphicon-chevron-right"></span></a>'+
  '</div><div class="modal-footer"><p><textarea readonly class="modalDescription">%description%</textarea></p></div></div></div></div>';

var HTMLworkStart = '<h1>Work Experience</h1><div id="workEntries"></div>';
var HTMLworkEmployer = '<div class="container workEntry"><div class="row-fluid"><div id="employer" class="col-sm-8">%employer%,&nbsp;';
var HTMLworkLocation = '%workLocation%</div>';
var HTMLworkDates = '<div id="workDates" class="col-sm-4">%workDates%</div><!--/#workDates--></div>';
var HTMLworkTitle = '<div class="row-fluid"><div id="workTitle" class="col-sm-11 col-sm-offset-1">%title%</div><!--/#workTitle--></div>';
var HTMLworkDescription =
  '<div class="row-fluid"><div id="workDuties" class="container-fluid col-sm-11 col-sm-offset-1">'+
    '<p><em><b>Duties:</b></em>%duties%</p></div></div></div>';

var HTMLschoolStart = '<h1>Education</h1><div id="educationEntries"></div>';
var HTMLschoolDegree = '<div class="container schoolEntry"><div class="row-fluid"><div id="schoolDegree" class="col-sm-9">%degree%&nbsp;-&nbsp;';
var HTMLschoolMajor = '%majors%';
var HTMLschoolDates = '</div><div id="schoolDates" class="col-sm-3">%dates%</div></div>';
var HTMLschoolName = '<div class="row-fluid"><div id="schoolName" class="col-sm-11 col-sm-offset-1"><a href="%url%" target="_blank">%name%</a></div></div>';
var HTMLschoolLocation =
  '<div class="row-fluid"><div id="schoolLocation" class="container-fluid col-sm-11 col-sm-offset-1">'+
    '<p>%schoolLocation%</p></div></div></div>';

var HTMLonlineClasses = '<h2>Online Classes</h2><div id="onlineEntries"></div>';
var HTMLonlineTitle = '<div class="container onlineEntry"><div class="row-fluid"><div id="onlineCourse" class="col-sm-9">%title%</div>';
var HTMLonlineDates = '<div id="onlineDates" class="col-sm-3">%dates%</div></div>';
var HTMLonlineSchool = '<div class="row-fluid align-items-end"><div id="onlineSchool" class="col-sm-2 col-sm-offset-1">%onlineSchool%</div>';
var HTMLonlineURL = '<div id="onlineLink" class="col-sm-4" style="padding-top:2px;">%url%</div></div></div>';

var googleMap = '<div id="map"></div>';

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: false,
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    //locations.push(bio.contacts.location);//original
    locations.push(bio.contacts.location);//new

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);//original
      //locations.push(education.schools[school].location);//new
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);//original
      //locations.push(work.jobs[job].workLocation);//new
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

//Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

//Vanilla JS way to listen for resizing of the window
//and adjust map bounds
window.addEventListener('resize', function(e) {
//Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});

/**********Parallax functionality - START*************
/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 **************************************************/

(function($) {

    $.fn.parallax = function(options) {

        var windowHeight = $(window).height();

        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);

        // Iterate over each object in collection
        return this.each( function() {

          // Save a reference to the element
          var $this = $(this);

          // Set up Scroll Handler
          $(document).scroll(function(){

                var scrollTop = $(window).scrollTop();
                      var offset = $this.offset().top;
                      var height = $this.outerHeight();

        // Check if above or below viewport
      if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
        return;
      }

      var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
                // Apply the Y Background Position to Set the Parallax Effect
          $this.css('background-position', 'center ' + yBgPosition + 'px');

          });
        });
    };
}(jQuery));

$('.bg-1,.bg-2,.bg-3,.bg-4').parallax({
  speed : 0.15
});
/*Parallax - END*/

/*Greg added this for a navbar transition*/
    $(window).scroll(function() {

      var fromTop = $('#welcomeMessage').offset();
        if($(this).scrollTop() > fromTop.top) {
            $('.navbar-fixed-top').addClass('solid');
        } else {
            $('.navbar-fixed-top').removeClass('solid');
        }
    });
/*navbar END - Thank you to stack overflow for help with this scrollbar:
  -http://stackoverflow.com/questions/23976498/fading-bootstrap-navbar-on-scrolldown-while-changing-text-color*/



/*modal - Start*/

/*modal END - Thank you to w3 schools and stack overflow for teaching me how to create a modal display in this project:
  -https://www.w3schools.com/howto/howto_css_modals.asp
  -http://stackoverflow.com/questions/24204315/bootstrap-modal-dialog-can-the-grid-system-be-used-within-a-modal-context*/