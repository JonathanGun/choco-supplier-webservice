# Choco-Supplier-WebService

1 of 4 part from Chocolate Factory Website

A Web Service made using RESTful API

## Prerequisites

1. Node.js

## Node Libraries

1. BodyParser
1. Express
1. mysql

## Setup

1. Install Node.js
2. Install Node Libraries

```
npm install
```

3. Create New MySQL Database

```
mysql -u root -p
<YOUR_PASSWORD>
create database chocosup;
use chocosup;
```

4. Populate Database
   - Copy `chocosupplier20201111.sql` to terminal mysql interface
5. Setup Database Config
   - Copy `application/config/db.config.example.js` to `application/config/db.config.js`
   - Change username, password, and database name
6. Run Server

```
npm start
```

## Screenshot

TODO

## Technical

### Database Schema

Ingredient(IngredientID, IngredientName, Price)

### Services

- POST /buy

```
{
	"money": integer,
	"ingredients":[
		{
			"id": integer,
			"amount": integer
		},
		...
		{
			"id": integer,
			"amount": integer
		}
	]
}
```

psudocode

```
for every ingredient:
	if id not in ingredient:
	  return gagal, 0

total = sum(Price*Amount) for every ingredient
if money < total:
	return gagal, total-money
else:
	return berhasil, money-total
```

- GET /{?id=integer}{?price=bool}

pseudocode

```
if id not in ingredient:
  return false

fetch Ingredient (all / id=id)
return [
	{
		"id": integer,
		"name": string,
		"price": integer
	},
	...
	{
		"id": integer,
		"name": string,
		"price": integer
	}
]
```

- POST /

```
{
	"ingredientName": string,
	"price": integer
}
```

creates a new ingredient

## Author

[Jonathan Yudi Gunawan](https://github.com/JonathanGun/) - 13518084

## Acknowledgement

This project is made to fulfill IF3110 Website Development course
