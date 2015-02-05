# Introduction to AngularJS
##### Tom Rankin - SGF Web Devs

I've broken this source repository into steps, progressing from an empty twitter bootstrap project, to a small angular application leveraging a remote web api.  

Core concepts covered
---------------------
- Views
- Filters
- Controllers
- Directives
- Services
- Routing
- $resources

Repository Structure
--------------------
Each commit in the repository reflect a stage of my presentation.  I've tagged each commit with a step number for ease of reference.  My final commit reverts the final step (#7) of my presentation because I wanted the HEAD to be runnable by anyone who checks out the code, and step #7 will be difficult to run without also having an API server running, which is outside of the scope of this code repository.

#### Step Overview
###### Step Zero
This is the bare structure of the twitter boostrap application.
###### Step One
I convert the bare structure to include the bare minimum to have a working Angular application and illustrate one simple filter.
###### Step Two
I introduce the concept of Controllers and $scope variables.  I use the ng-repeat directive to display a list of colors, and also demononstrate the use of model binding.
###### Step Three
I refactor the code a bit so that we separate directives, filters, controllers etc into individual files.  I also create two directives, one illustrating shared $scope, and the other illustrating directive callback functions.
###### Step Four
I refactor the code to remove some of the responsibilities of the controller and place them in the service layer, and also demonstrates providing a service API.
###### Step Five
I remove the model binding and create an additional screen for editing a "color".  I use controller logic to toggle between the list view and the edit view.
###### Step Six
I refactor the previous step to leverage Angular routing as the preferred method for managing views.
###### Step Seven
I refactor the service layer to illustrate how the API can be modified to use external web services as the data source rather than local variables.  