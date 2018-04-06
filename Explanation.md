# Organization of the App

 A lot of resources suggested that separating the application logic from the DB and server setup helps reduce interdependability (this also seems to be the best practice in general anyways). Doing this also keeps the main app.js file from being overly cluttered.

For many of the same reasons listed above, I separated the organization model and its controller into their own files in controller and model folders to keep the app organized.

## Organizations

Using the examples given in the challenge, I created a basic organization model with a sub document of location. In the organization's controller there are the four basic CRUD operations (create, read, update, and delete).

As requested, there is also a simple findById method to return a specified organization object (using the default id property that is automatically populated when an organization is created).

## Routing

get http://localhost:3000/organizations - returns all organizations
post http://localhost:3000/organizations - creates an organization using the body values in the post request
get http://localhost:3000/organizations/:id - returns a specific organization (filling in the organization id for :id at the end of the URL)


## Error Handling

I used some basic error handling that is built into express. If there is an error during while reading or creating organizations, the response will display the appropriate status code.

## Testing

I used Postman (at the recommendation of an online resource) to test the get and post responses for this app. Postman was incredibly intuitive and made the whole testing process easier.

If I continued working on this app, I would learn more about mocha and implement automated testing via the principles of TDD.

## Next Steps

If I were to work on this further, I would learn more about ES6. Some of the standards I've used in this challenge are from ES5; I need to learn more about express in order to conform to the newer standards and understand the underlying nuances.

