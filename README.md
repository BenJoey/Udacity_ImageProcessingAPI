# Udacity ImageProcessingAPI

First assignment for the Udacity course Full Stack Javascript developer.

## Available scripts:

- `npm run build` compiles the application
- `npm run start` starts the server on port 3000
- `npm run test` runs the written jasmine tests

## API endpoints:

- `localhost:3000/api/images?filename={insert filename}&width={insert width}&height={insert height}`
  Resizes the given image to the given size and returns it to the user. If the image has been created previously then the previous image is returned.
  Example: `localhost:3000/api/images?filename=fjord&width=700&height=400`
- `localhost:3000/api/help`
  Upon receiveing a request other than `/api/images` the user receives instructions about using the API and the list of the available images.
