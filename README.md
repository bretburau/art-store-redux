# Image Database

A simple app built with Ruby on Rails and React.js for uploading, categorizing, and viewing images.

## Installation

To install, clone this repo, install dependancies, and migrate the database.

```
bundle install
rake db: migrate
```

Start both the frontend and backend servers:

```
rake start
```

##Usage

Navigate your browser to localhost:3000. The homepage displays all of the currently uploaded images. The link on each card will take you to the display page for said image for more details. 

The upload link in the navigation bar will take you to an image upload page. Here you can drag a file to the box or click on the box to select what file to upload. In the form on the right, input information about the image, and select any category tags you'd like associated with the image. Submitting this will take you to the image display page.

The 'tags' link will show all the available tags. Clicking on any of them will display all images under that category.

##Contributing 

Bug reports and pull requests are welcome on Github at https://github.com/bretburau/art-store-redux

##License

The app is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).