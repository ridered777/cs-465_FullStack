# cs-465_FullStack
CS-465 FullStack 1 repository

Architecture:
For the front-end, we utilized Express HTML, JavaScript and Angular for a Single Page Application (SPA). While Express and Angular both make use of Model- View- Controller layouts, they’re used for two different purposes here. They express is for backend functionality and connects the JavaScript to the HTML. Alternatively, Angular was utilized for the SPA and contained mainly JS and typescript with HTML, leveraging components heavily. Express by comparison didn’t rely on components and instead used handlebars to streamline certain aspects of the page (containers). On the backend, we used a NoSQL MongoDB because it doesn’t require a schema (document based), meaning it’s faster and easier for the user to enter the data into it. It also is great for rapidly changing systems and agile development as it doesn’t have a fixed data model.

Functionality:
JSON and Javascript are quite different. The JSON is used for storing data and is an alternative to a data text like a CSV or spreadsheet. Javascript is one of several languages that can convert JSON data to legible (pretty) text for us humans to read. In the course of this project, much of the code was refactored to improve the functionality or efficiency and some was even to leverage the benefit of reusable UI components. The simplest of these instances is as referenced above- we used handlebars for certain aspects of the HTML code to be reusable. In this case, we did that for the title, header and footer of the webpages.

Testing:
Our API endpoint made use of several of the typical API methods. In this project we used GET, PUT and POST. We first incorporated these methods into our endpoint with direct communication with an HTML hook. However, later we added security to our application and so we had to verify authorization before pushing the PUT or POST or GET requests.

Reflection:
I think a lot of the skills learned and practiced in this course could be very marketable. Full Stack development is an area of immense opportunity as far as a career track goes. If I didn’t hate HTML/CSS and JS so much, it might be one I would consider for my future beyond this course. However, I do not plan for that to be the case. 
