Campers
=======

> Customers that hang out at a table all night long and even turning off all the lights doesn’t get rid of them at closing time.


## Description ##
This is a proof of concept for a restaurant's table reservation app.


[Demo](http://bit.ly/8campers)
---------

**Technologies used**

* [AngularJS](https://angularjs.org/)
* [Typescript](http://www.typescriptlang.org/)
* [Webpack](https://webpack.github.io/)
* [RxJs](https://github.com/Reactive-Extensions/RxJS)
* [Localstorage](https://github.com/grevory/angular-local-storage)

![FireShot Capture 1 - Campers - http___localhost_8080_#_home.png](https://bitbucket.org/repo/LKkakn/images/1999434083-FireShot%20Capture%201%20-%20Campers%20-%20http___localhost_8080_%23_home.png)








Installation
------------
    $ git clone https://github.com/rafael-ochoa/campers.git
    $ cd  campers
    $ npm install

    

After this process, application will be available at [http://localhost:5000](http://localhost:5000)



**Application Concept**

 - A reservation must have:
	 - Date and time.
	 - The party’s name and the number of people in the party.
 - The host must be able to:
	 - Add reservations.
	 - Cancel reservations.
	 - Mark a reservation as fulfilled.

**Considerations**

 - The User is logged in.
 - One party at the time.
 - Reservations are every hour. Accepted between 1:00 pm - 8:00 pm.
 - Future version will include:
	 - User's Reservations.
	 - Description of especial requests.
	 - History of Reservations.
	 - Possibility to filter is possible by party's name and phone
   on a specific date.




----------
Created by [@rafaelochoa](http://rafaelochoa.com)


**License**


The MIT License (MIT)

Copyright (c) 2016 Rafael Ochoa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
