/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<span>%data%, </span>'; /*Old value: <span>%data%, </span>*/
var HTMLheaderRole = '<span id="rotate"></span>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li><a href="%href%"><i class="fa %icon% fa-fw %iconSize%"></i></a>%label%</li>';
var HTMLemail = '<li><a href="%href%"><i class="fa %icon% fa-fw %iconSize%"></i></a>%label%</li>';
var HTMLlinkedin = '<li><a href="%href%"><i class="fa %icon% fa-fw %iconSize%"></i></a>%label%</li>';
var HTMLgithub = '<li><a href="%href%"><i class="fa %icon% fa-fw %iconSize%"></i></a>%label%</li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<span class="nav-location">%data%</span>';

var HTMLbioPic = '<img class="biopic img-responsive center-block" img src="%data%" style="width: 80%;">';
//var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';

/*new "helper" variables added by Greg Bopp to include skills progress graphics on the page*/
var HTMLskillsHeading = '<h1>Skills at a Glance:</h1>';

var HTMLskillsStart =
  '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 text-center">\
    <svg width="%svgWidth%" height="%svgHeight%">\
      <g>';

var HTMLskills =
        '<circle id="circleBG" cx="%svgOrigin%" cy="%svgOrigin%" r="%radius%" stroke="#f9f2ec" stroke-width="%strokeWidth%" fill="none" \
          style="stroke-dasharray: %dashArrayShown%; stroke-dashoffset: 0;" transform="rotate(%rotateCircle% %svgOrigin% %svgOrigin%)"> \
        </circle> \
        <circle id="circlePercentFill" cx="%svgOrigin%" cy="%svgOrigin%" r="%radius%" stroke="%strokeColor%" stroke-width="%strokeWidth%" fill="none" \
          style="stroke-dasharray: %svgCircumference%; stroke-dashoffset: %svgPercent%;" transform="rotate(%rotateCircle% %svgOrigin% %svgOrigin%)"> \
        </circle>';

  /*Thank you so much to stack overflow for showing me a simple way to make an svg rotate in internet explorer:
    -http://stackoverflow.com/questions/6711610/how-to-set-transform-origin-in-svg*/

var HTMLskillsEnd =
        '<text class="svgPercentageText" x="%svgOrigin%" y="%svgPercentY%" text-anchor="middle" alignment-baseline="baseline" fill="%svgTitleColor%"> %svgPercentText%% </text> \
        <line x1="%svgLineX1%" y1="%svgLineY%" x2="%svgLineX2%" y2="%svgLineY%" style="stroke:%svgTitleColor%; stroke-width:1.5"></line>\
        <text class="svgPercentageTitle" x="%svgOrigin%" y="%svgTitleY%" text-anchor="middle" fill="%svgTitleColor%"> %svgTitle% </text>\
      </g> \
    </svg> \
  </div><!--/.col-xs-12 col-sm-6 col-md-4 col-lg-2 text-center-->';
/*Circular percentage - END*/


var HTMLprojectStart = '<h1>Projects</h1>';

var HTMLmodalStart =
    '<div class="col-sm-6 col-md-6 col-lg-4 projectThumbnail"> \
      <a href="#myModal%modalNum%" role="button" data-toggle="modal"> \
          <img src="images/projects/%thumbnailImage%" alt="project-%modalNum%" class="image"> \
          <div class="thumbnail-overlay"> \
            <div class="thumbnailText">%overlayText%</div> \
          </div> \
      </a> \
    </div> \
  <!-- Modal-%modalNum% - START--> \
  <div class="modal fade" id="myModal%modalNum%" role="dialog"> \
    <div class="modal-dialog modal-lg"> \
      <div class="modal-content"> \
        <div class="modal-header"> \
          <button type="button" class="close" data-dismiss="modal">&times;</button> \
          <h2 class="modal-title">%projectTitle% - %projectDates%</h2>\
        </div> \
        <div id="carousel-project-%modalNum%" class="carousel slide" data-ride="carousel"> \
          <!-- Wrapper for slides --> \
          <div class="carousel-inner">';

var HTMLmodalImages =
            '<div class="item"> \
              <img class="img-responsive" src="images/projects/%projectImage%"> \
            </div>';

var HTMLmodalEnd =
          '</div> \
          <!-- Controls - START --> \
          <a class="left carousel-control" href="#carousel-project-%modalNum%" role="button" data-slide="prev"> \
              <span class="glyphicon glyphicon-chevron-left"></span> \
          </a> \
          <a class="right carousel-control" href="#carousel-project-%modalNum%" role="button" data-slide="next"> \
              <span class="glyphicon glyphicon-chevron-right"></span> \
          </a> \
          <!-- Controls - END --> \
        </div> \
        <div class="modal-footer"> \
          <p><textarea readonly class="modalDescription">%description%</textarea></p> \
        </div> \
      </div> \
    </div> \
  </div><!--Modal-%modalNum%- END-->';

/*
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDuties = '<p><br>%data%</p>';
*/

var HTMLworkStart = '<h1>Work Experience</h1>';
var HTMLworkEntry =
  '<!--Individual Work Entry - START--> \
  <div class="container workEntry"> \
    <div class="row-fluid"> \
      <div id="employer" class="col-sm-9">%employer%, %workLocation%</div><!--/#employer--> \
      <div id="workDates" class="col-sm-3">%workDates%</div><!--/#workDates--> \
    </div><!--/.row-fluid--> \
    <div class="row-fluid"> \
      <div id="workTitle" class="col-sm-11 col-sm-offset-1">%title%</div><!--/#workTitle--> \
    </div><!--/.row-fluid--> \
    <div class="row-fluid"> \
      <div id="workDuties" class="container-fluid col-sm-11 col-sm-offset-1"><p><em><b>Duties:</b></em>%duties%</p></div><!--/#workDuties--> \
    </div><!--/.row-fluid--> \
  </div><!--/.container workEntry--> \
  <!--Individual Work Entry - END-->';

var HTMLschoolStart = '<h1>Education</h1>';
var HTMLschoolEntry =
  '<!--Individual Education Entry - START--> \
  <div class="container schoolEntry"> \
    <div class="row-fluid"> \
      <div id="schoolDegree" class="col-sm-9">%degree%, %major%</div><!--/#schoolDegree--> \
      <div id="schoolDates" class="col-sm-3">%dates%</div><!--/#schoolDates--> \
    </div><!--/.row-fluid--> \
    <div class="row-fluid"> \
      <div id="schoolName" class="col-sm-11 col-sm-offset-1">%schoolName%</div><!--/#schoolName--> \
    </div><!--/.row-fluid--> \
    <div class="row-fluid"> \
      <div id="schoolLocation" class="container-fluid col-sm-11 col-sm-offset-1"><p>%schoolLocation%</p></div><!--/#schoolLocation--> \
    </div><!--/.row-fluid--> \
  </div><!--/.container schoolEntry--> \
  <!--Individual Education Entry - END-->';

var HTMLonlineStart = '<h2>Online Classes</h2>';
var HTMLonlineEntry =
  '<!--Individual Education Entry - START--> \
  <div class="container onlineEntry"> \
    <div class="row-fluid"> \
      <div id="onlineCourse" class="col-sm-9">%courseTitle%</div><!--/#onlineCourse--> \
      <div id="onlineDates" class="col-sm-3">%dates%</div><!--/#onlineDates--> \
    </div><!--/.row-fluid--> \
    <div class="row-fluid align-items-end"> \
      <div id="onlineSchool" class="col-sm-2 col-sm-offset-1">%onlineSchool%</div><!--/#onlineSchool--> \
      <div id="onlineLink" class="col-sm-4" style="padding-top:2px;">%courseURL%</div><!--/#onlineLink--> \
    </div><!--/.row-fluid--> \
  </div><!--/.container onlineEntry--> \
  <!--Individual Education Entry - END-->';

/************************************************************************************/


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
    locations.push(bio.contacts.location);//original

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);//original
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);//original
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


/************************************************************************************/


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
    }
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