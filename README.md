# Frontend of PetWaky app

## Installation
React and React-router-dom
```bash
npm install react react-router-dom
```
React Redux i Redux
```bash
npm install react react-redux
```

Axios
```bash
npm install axios
```

## Start app
Firstly, start the backend application and then start frontend
```bash
npm start

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features


| ID | Short name | Description | Priority |
| --- | --- | --- | --- |
| 1 | login | the possibility of login to profile | 2 |
| 2 | register | the possibility of creating new account by filling username, email, password and repeat password inputs | 2 | 
| 3 | logout | the possibility of logout from profile | 2 |
| 4 | listing of ads from database | the possibility of browsing pet care offers | 1 |
| 5 | adding ad | the possibility of creating new ad by filling mandatory fields: name (unique), description, price, city | 1 | 
| 6 | map with pet-friendly object (category, name, address) | Map of the Tricity with marked objects related to pets. There will be marked, among others vets, pet stores, pet spas, pet playgrounds, training centers and more | 1 | 

## Non-functional requirements

| ID | Short name | Description | Priority |
| --- | --- | --- | --- |
| 1	| Logo | Logo shoud be placed in the top left-hand corner	| 2 |
| 2	| Colorway	| The colours of the application should be limited to white and violet | 3 |
| 3	| Availability	| The application should be available on all browsers not older than e. g. Chrome 68 | 2 |
| 4	| Responsive design	| The application should automatically adjust to the size of the screen on which it is displayed |	2 |
| 5	| Availability	| The application should be available 24/7/365 for an average of 99. 9% of the time |	1 |



## Use Case Diagram

![image](https://user-images.githubusercontent.com/48963185/119270518-4abdba00-bbfd-11eb-8c1d-5f0213f8f4fb.png)


## Activity Diagram

### Case #1 - General
![image](https://user-images.githubusercontent.com/48963185/119256779-a28aff80-bbc2-11eb-97a6-b3570d47e101.png)

### Case #2 Searching pet-friendly places
![image](https://user-images.githubusercontent.com/48963185/119269376-b00eac80-bbf7-11eb-80f8-f6fad2a11627.png)

### Case #3 Loging in 
![image](https://user-images.githubusercontent.com/48963185/119269889-40e68780-bbfa-11eb-9fbe-dad7d051de8c.png)

### Case #4 Registration
![image](https://user-images.githubusercontent.com/48963185/119270875-337fcc00-bbff-11eb-8cd1-5b92df87b732.png)

### Case #5 Adding annoucements
![image](https://user-images.githubusercontent.com/48963185/119270428-f31f4e80-bbfc-11eb-8f47-4840a8684399.png)

### Case #6 Browsing the list of announcements
![image](https://user-images.githubusercontent.com/48963185/119270978-b2750480-bbff-11eb-9205-9fbd731aed75.png)

## Component diagram
![image](https://user-images.githubusercontent.com/48963185/119469664-dd6a7000-bd47-11eb-98f6-437e6f345fa7.png)


## Deployment diagram
![image](https://user-images.githubusercontent.com/48963185/119271978-36c98680-bc04-11eb-91b8-b879d88cb7d3.png)


### SCREENSHOTS

## Starting page
![image](https://user-images.githubusercontent.com/48963185/119271023-ed773800-bbff-11eb-83d7-abdbcfd91476.png)
![image](https://user-images.githubusercontent.com/48963185/119271038-008a0800-bc00-11eb-8ed4-a9758155bbd8.png)

## Register and Login
![image](https://user-images.githubusercontent.com/48963185/119271060-2a432f00-bc00-11eb-8db1-ee54e6a5e957.png)
![image](https://user-images.githubusercontent.com/48963185/119271067-37f8b480-bc00-11eb-8320-80575fe0425b.png)

## Adding ad and list of ads
![image](https://user-images.githubusercontent.com/48963185/119271097-552d8300-bc00-11eb-9e37-74d2f36728bf.png)
![image](https://user-images.githubusercontent.com/48963185/119271118-65ddf900-bc00-11eb-8ebb-47599460e51a.png)



### TESTS


Recorder tests were manual tests conducted in local enviroment.
| ID | Short name | Description | Priority | Testing activities | Testing resultats	| Status |
| --- | --- | --- | --- | --- | --- | --- |
| T001	| Markers on map |	Veryfing if all the markers on map are also in database and if the possition is correct |	1	| Showing a whole list from database and going throug each record to compare with markers on map	| All markers should have a corresponding record in database table	| passed |
| T002	| List of announcements |	Veryfing if all the annoucements that are saved to database table are showned on the website | 1 |	Showing a whole list from database and going throug each record to compare with annoucements showing on the site |	All annoucements should have a corresponding record in database table |	passed |
| T003	| Adding announcements to the list	| Veryfing if added annoucements are saved to database table and are showned on the website |	1 |	Adding annoucement on the website and checking in database if the record has been added, then checking if its showing on the website |	Added records show in databes and on the website |	passed |
| T004 |	User registration	| Veryfing if after registration new user is added to the database |	2 |	Adding new user throug register tab and checking if the new user is in database	| New users are shown in database table	| passed |
| T005	| New user's permissions |	Veryfing if newly registered users have accurate permissions to access database	| 2	| chacking in user permissions if correct permissions are assined (user only hav epermission to add new records to table announcements)	| All users have correctly assigned permissions |	passed |
| T006	| Users can login |	Veryfing if already registered users can correctly login to their accounts | 2 |	Loging in with already created credentials through login tab |	User can succesfully login on its accout with credentioals |	passed |


Closed source licence, all rights reserved
