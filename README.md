# Fetch App

Access deployed site at https://competent-yalow-91b052.netlify.app/

This page displays a list of lists using React and Node.js. Formatting is done with Bootstrap.

The Main component is the starting component. This calls the Data component, which accesses data from the site provided by Fetch Rewards. I could not bypass the CORS error in trying to access the API directly, so I copied the data into a JSON file in the root directory of my project. I checked the OPTIONS for the AWS site as well using curl, but it did not show me what allowed origins or allowed methods there were. I would ideally use fetch() to grab the data directly from AWS so that the data on my site would be up to date :)

Data.js utilizes a function in the /utils folder called createJsonData. This function filters out null and blank names from the JSON object, sorts the lists in listId order, then sorts the sub-lists by id.

List.js is passed this filtered and sorted object via props. This functional component loops through the object and sublists, returning JSX formatted with Bootstrap to display each item in drop-down accordions.

The Navbar has a menu that allows you to print the page and download the JSON data.
