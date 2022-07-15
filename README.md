# Automation_Testing
In this project, Cypress is used to end-to-end test the instructables.com website. The orignial task was to autamote tests on the wave-trial.getbynder.com/login/ site, however when I started writing tests for the login portal, a robot captcha prevention page was shown, preventing any further automated testing, although this feature has ironically been removed after I wrote the tests for the other site. 

Though I could now still write the tests for the Bynder portal, I found out about the captcha being removed rather late and already wrote the full test for the other site. Furthermore, the tests I wrote for the other site were more complicated and have the same general process as would have been there for the Bynder portal. I hope you don't mind.

After going through lots of sites, I found instructables to be suitable. Unfortantely, the automation tests I have written do work when run from the Cypress app, as is shown in the "automation_test_cypress_App" video located at cypress/videos, but get a cypress script error when run from the terminal, as you'll see when executing the tests out of the terminal.





## How to run
To run the cypress test, the Docker Image I created must simply be run. You can first build the Image by running 
		`docker build --tag <app_name>.`
		in a terminal at the root location of this project.
	
	
After the image is built, simply run this image by running 
		`docker run <app_name>`
		in a terminal at the root location of this project, which will execute the tests.

