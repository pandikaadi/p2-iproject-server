# Branded Things API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /translate`
- `POST /appointments/:barberId`
- `GET /appointments`
- `GET /forecast`
- `GET /myAppointment`
- `GET /barbers`
- `GET /barbers/:barberId`
- `DELETE /myAppointment`
- `PUT /myAppointment`

&nbsp;

## 1. GET /appointments

Description:
- Register new customer to database

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
    "id": 14,
    "email": "pandogisss@gmail.com",
    "username": "pandogiss",
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Password must not empty"
}
OR
{
  "message": "Email must not empty"
}
OR
{
  "message": "Username must not empty"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "email must be unique"
}
```

&nbsp;


## 2. POST /login

Description:
- Login customer

Request:

- body:

```json
{
  "email": "string",
  "password": "string",
}
```

_Response (200 - OK)_

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY0MTMxMTE0NCwiZXhwIjoxNjQxMzEzNTQ0fQ.-p74Kn3OEdvbM_JxXne6BBZHk_BSX9fr1qFaPZdxL08",
    "id": 6,
    "username": "Pandika"
}
```

_Response (401 - Unauthorized)_

```json
{
    "message": "Invalid email or password"
}
```

&nbsp;


## 3. POST /translate

Description:
- Translate user's geographic coordinates to address

Request:

- body:

```json
{
  "lat": "integer",
  "long": "integer",
}
```

_Response (200 - OK)_

```json
"Kampung Hilir, Kepulauan Riau, Indonesia"
```

_Response (201 - Created)_

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY0MTMxMTE0NCwiZXhwIjoxNjQxMzEzNTQ0fQ.-p74Kn3OEdvbM_JxXne6BBZHk_BSX9fr1qFaPZdxL08",
    "id": 6,
    "email": "pandono@gmail.com",
    "role": "customer",
    "username": "Pandika",
}
```

&nbsp;


## 4. GET /forecast

Description:
- Get weather forecast of a particular city

Request:

- query:

```json
{
  "city": "string"
}
```

_Response (200 - OK)_

```json
{
    "coord": {
        "lon": 107.6186,
        "lat": -6.9039
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 295.25,
        "feels_like": 295.89,
        "temp_min": 295.25,
        "temp_max": 295.25,
        "pressure": 1011,
        "humidity": 91
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.89,
        "deg": 291,
        "gust": 1.79
    },
    "rain": {
        "1h": 0.23
    },
    "clouds": {
        "all": 100
    },
    "dt": 1643231613,
    "sys": {
        "type": 2,
        "id": 2043699,
        "country": "ID",
        "sunrise": 1643237353,
        "sunset": 1643282094
    },
    "timezone": 25200,
    "id": 1650357,
    "name": "Bandung",
    "cod": 200
}
```


&nbsp;

## 5. GET /barbers

Description:
- Get barbers from database

Request:

- query: 

```json
{
  "city": "string",
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "name": "Tatang",
        "lat": -6.925742,
        "long": 107.700402,
        "city": "Bandung",
        "createdAt": "2022-01-24T19:17:08.837Z",
        "updatedAt": "2022-01-24T19:17:08.837Z"
    },
    {
        "id": 2,
        "name": "Engkus",
        "lat": -6.92817,
        "long": 107.644381,
        "city": "Bandung",
        "createdAt": "2022-01-24T19:17:08.837Z",
        "updatedAt": "2022-01-24T19:17:08.837Z"
    },
    {
        "id": 3,
        "name": "Dono",
        "lat": -6.910634,
        "long": 107.601046,
        "city": "Bandung",
        "createdAt": "2022-01-24T19:17:08.837Z",
        "updatedAt": "2022-01-24T19:17:08.837Z"
    },
    {
        "id": 4,
        "name": "Nandang",
        "lat": -6.942799,
        "long": 107.600628,
        "city": "Bandung",
        "createdAt": "2022-01-24T19:17:08.837Z",
        "updatedAt": "2022-01-24T19:17:08.837Z"
    },
    {
        "id": 5,
        "name": "Aang",
        "lat": -6.899721,
        "long": 107.575724,
        "city": "Bandung",
        "createdAt": "2022-01-24T19:17:08.837Z",
        "updatedAt": "2022-01-24T19:17:08.837Z"
    },
    {
        "id": 6,
        "name": "Deden",
        "lat": -6.878569,
        "long": 107.596959,
        "city": "Bandung",
        "createdAt": "2022-01-24T19:17:08.837Z",
        "updatedAt": "2022-01-24T19:17:08.837Z"
    },
    {
        "id": 7,
        "name": "Ajat",
        "lat": -6.934632,
        "long": 107.581202,
        "city": "Bandung",
        "createdAt": "2022-01-24T19:17:08.837Z",
        "updatedAt": "2022-01-24T19:17:08.837Z"
    }
]
```


&nbsp;

#&nbsp;

## 6. GET /barbers/:barberId

Description:
- Get one barber from database, selected by its id

Request:

- params:

```json
{
  "barberId": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "id": 1,
    "name": "Tatang",
    "lat": -6.925742,
    "long": 107.700402,
    "city": "Bandung",
    "createdAt": "2022-01-24T19:17:08.837Z",
    "updatedAt": "2022-01-24T19:17:08.837Z"
}
```

_Response (404 - Not Found)_

```json
{
    "message": "Barber not found"
}
```

&nbsp;

## 7. POST /appointments/:barberId

Description:
- Create a new appointment

Request:

- params: 

```json
{
  "barberId": "integer",
}
```

- body: 

```json
{
  "lat": "integer",
  "long": "integer",
  "address": "string",
  "appointmentDate": "date",
  "schedule": "integer",
  "price": "integer"
}
```

_Response (201 - Created)_

```json
{
    "id": 29,
    "lat": 1.2234324324,
    "long": 107.223432523,
    "address": "nama jalan",
    "appointmentDate": "2022-01-21T22:45:17.070Z",
    "schedule": 1,
    "price": 20000,
    "barberId": 1,
    "userId": 1,
    "updatedAt": "2022-01-26T21:30:05.219Z",
    "createdAt": "2022-01-26T21:30:05.219Z"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Could not make more than one appointment"
}
OR
{
    "message": "coordinates must not empty"
}
OR
{
    "message": "address must not empty"
}
OR
{
    "message": "date must not empty"
}
OR
{
    "message": "schedule must not empty"
}
OR
{
    "message": "Appointment.price cannot be null"
}
OR
```


&nbsp;

## 8. GET /myAppointment

Description:
- Get user's appointment

Request:

- headers: 

```json
{
  "access_token": "string",
}
```

_Response (200 - OK)_

```json
{
    "id": 30,
    "lat": 1.2234324324,
    "long": 107.223432523,
    "address": "nama jalan",
    "barberId": 1,
    "userId": 1,
    "appointmentDate": "2022-01-21T22:45:17.070Z",
    "schedule": 1,
    "price": 20000,
    "createdAt": "2022-01-26T21:34:50.184Z",
    "updatedAt": "2022-01-26T21:34:50.184Z",
    "Barber": {
        "id": 1,
        "name": "Tatang",
        "lat": -6.925742,
        "long": 107.700402,
        "city": "Bandung",
        "createdAt": "2022-01-24T19:17:08.837Z",
        "updatedAt": "2022-01-24T19:17:08.837Z"
    }
}
```


&nbsp;

## 9. DELETE /myAppointment

Description:
- Delete user appointment

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "message": "appointment has been deleted"
}
```

&nbsp;

## 10. PUT /myAppointment

Description:
- Edit user appointment

Request:

- body:

```json
{
  "lat": "integer",
  "long": "integer",
  "address": "string",
  "appointmentDate": "date",
  "schedule": "integer",
  "price": "integer"
}
```

_Response (200 - OK)_

```json
{
    "message": "appointment has been edited"
}
```


&nbsp;


## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
OR
{
  "message": "Token expired"
}
```
_Response (403 - Forbidden)_

```json
{
  "message": "Unauthorized"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```