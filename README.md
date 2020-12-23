# Eat Da Burger

A project created by **Corey Samuels**

## Table Of Contents

- [Project Description](#project-description)

- [Installation](#installation)

- [Usage](#usage)

- [Technologies Used](#technologies-used)

- [Contributing](#contributing)

- [License](#license)

- [Questions](#questions)

## Project Description

I was tasked with creating a fully functioning app that contained front and back end aspects and had a clear and concise file structure to easily follow.

I used the template framework Handlebars to manage the front end, this allowed me to pass data from the back end and render as much data as I had. The challenges I faced in using this was that the Framework lacked the Dynamic aspect to it and so It became a struggle to consistently update the app once the data had been altered. In the end I had to use a trick to refresh the window once an entry had been made to re-render the page. This was not desirable for me and with more time I would have altered the Javascript to dynamically update my page.

I also used express and Node to control the back end of the application, this was easy and efficient for me to set up a routes file that contained every AJAX request listener inside. I used mySQL to store and alter entries and used simple calls to interact with the database.

### Installation

As this app is ran through node, if you wanted to install it from GitHub you would need to install the express package for node and run the server.js file through the terminal in node, this will give you the rendered HTML in the local host in your browser (If you change the Port number).

Alternatively I have hosted this app through Heroku and so instead of hosting it yourself, you can view the app I have created through this link here !
https://eat-da-burger-corey.herokuapp.com/

### Usage

Use of this application is simple as once you open the page on the Heroku site above you can input burgers and delete them at your own will, they will be stored so you can retrieve them upon re-entering the site

### Technologies Used

Javascript, Node.js, NPM, Express, mySQL

### Contributing

Feel free to download and contribute to this project!

#### License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)

    Copyright (c) 2020

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
    OR OTHER DEALINGS IN THE SOFTWARE.

### Questions

Check out my GitHub page here: https://github.com/coreyjay98

For any additional questions please feel free to reach me at coreyjsamuels@gmail.com
