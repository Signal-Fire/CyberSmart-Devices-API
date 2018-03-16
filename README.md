# CyberSmart-Devices-API
###### An API for the managing of Devices in a Smart Home network

## CyberSmart
CyberSmart is a system designed to control devices within your home using a Smart Home style system.

## Contributors
[Henry Pye](https://www.github.com/Signal-Fire)

## Documentation
### Routes
#### Find
##### route.get('/all', function(req, res)
This method returns all Devices in the given database context. It takes no parameters. 
The possible returns are:
`200 - OK` : This means the request was successful. It should return an array of JSON Objects with all Devices in the database. 
`404 - Not Found` : This means the request failed or no Devices were found.
`500 - Server Error` : This means something went wrong with the function being called in the controller.

##### route.get('/location', function(req, res)
This method returns all Devices within a given location. It takes one parameter, Location name. 
The possible returns are:
`200 - OK` : This means the request was successful. It should return an array of JSON Objects with all devices in the given location.
`404 - Not Found` : This means the request failed or no Devices were found in the location.
`500 - Server Error` : This means something went wrong with the function being called in the controller.

##### route.get('/:id', function(req, res) 
This method finds a Device by its ID. It takes on parameter, ID, which must be passed in in the format `/<id>` in the URL.
The possible returns are:
`200 - OK` : This means the request was successful. It should return a JSON Object containing information about the Device with the ID requested.
`404 - Not Found` : This means the request failed or no Device with the ID requested were found.
`500 - Server Error` : This means something went wrong with the function being called in the controller.

#### Insert
##### route.post('/device', function(req, res) 
This method inserts a new Device into the database. It can take five parameters. These are:
`name`:
    `String`
    `Required`
`location`:
    `String`
    `Required`
`state`:
    `Number`
    `Required`
    `Default` : `0`
`active`:
    `Boolean`
    `Required`
    `Default` : `0`
`date_added`:
    `Date`
    `Default` : Date.now
The possible returns are:
`201 - Created` : This means a new entry was created in the Device table of the database.
`401 - Unauthorized` : This means the request was unauthorized and the Device was not inserted into the database.
`500 - Server Error` : This means the request failed, resulting in a Server Error.

#### Insert
##### route.post('/state', function(req, res) 
This method updated a Devices state given an ID and a State. The ID must be the same as the _id of a Device in the database.
The parameters are:
`_id` : The ID of the Device having its state altered.
`state` : The state can be a 1 or a 0, 1 for `ON` and 0 for `OFF`
The possible resturns are:
`200 - OK` : This means the state of the Device was successfully altered.
`401 - Unauthorized` : This means the request failed and the Devices state was not altered.
`500 - Server Error` : This means there was an unexpected crash with the method being called by this controller.