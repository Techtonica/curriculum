# Mailing List REST API

This is an activity designed to follow the [REST API topic](/api/REST-API.md)

## Tools

You should create an Express app. All of this can be in-memory, no database or file storage needed.

## Data

The data consists of mailing lists which have a name and an array of member email addresses.
```json
{
  "name": "staff",
  "members": [ "talea@techtonica.org", "michelle@techtonica.org" ]
}
```

## Routes

### Index

#### Route
`/lists` - fetch all the existing list names

#### Response

- 200 with a JSON body of all the existing list names
- 200 and empty array if none exist (not a 404)

#### Response Body
```json
[
  "staff",
  "cohort-h1-2020"
]
```

#### Example Express Code

```javascript
const lists = new Map();
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// add some fake data


app.get('/lists', (req, res) => {
  const listsArray = Array.from(lists.keys()); // Why is this like this? Try it out in your console.
  res.send(listsArray);
});
```

### GET single list

#### Route
`/lists/${name}` - get list by name, e.g. `/lists/staff`

#### Response
- 200 with a JSON body (name and member emails) of the given list
- 404 if not found

#### Response Body
```json
{
  "name": "staff",
  "members": [ "talea@techtonica.org", "michelle@techtonica.org" ]
}
```

### DELETE single list

#### Route
`/lists/${name}` - delete list by name

##### Response
- 200 if successfully deleted
- 404 if not found to delete

#### Response Body
None needed


### PUT - update single list

#### Path
`/lists/${name}` - add or update a list with the given name

#### Request Body
```json
{
  "name": "my-new-list",
  "members": [ "me@me.com" ]
}
```

#### Response
  - 200 if it updated a list that already existed
  - 201 if it created a new list

#### Response Body
None needed


## Testing

Use Postman to test retrieving, saving, and deleting mailing lists using your API.

## Bonus Extension

The more REST-ful way to manage the members of the list is to make them into a resource. 


