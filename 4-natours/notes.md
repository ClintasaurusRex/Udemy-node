# HTTP Methods in Express.js - 4-Natours Project

## Create, Read, Update, Delete

## GET

- Used to retrieve/read data
- Does not modify any data
- Idempotent (same request will return same result)
- Example from our code:

```javascript
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from the server side!',
    app: 'Natours',
  });
});
```

# POST

- Used to create new resources
- Sends data to server to create new entry
- Not idempotent (multiple identical requests will create multiple resources)
  -Example from our code:

```js
app.post('/', (req, res) => {
  res.send('You can post to the endpoint...');
});
```

# PUT

- Used to update/replace entire resource
- Client sends complete data object
- Idempotent (multiple identical requests will have same result)
- Example structure:

```js
app.put('/api/tours/:id', (req, res) => {
  // Updates entire tour resource
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Updated tour here...',
    },
  });
});
```

# PATCH

- Used for partial modifications
- Only sends data that needs to be updated
- More efficient than PUT for small changes
- Example structure:

```js
app.patch('/api/tours/:id', (req, res) => {
  // Updates only specified fields
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Partially updated tour here...',
    },
  });
});
```

# DELETE

- Used to remove resources
- Returns success status even if resource doesn't exist (idempotent)
- Example structure:

```js
app.delete('/api/tours/:id', (req, res) => {
  // Removes the specified resource
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
```

- Use appropriate status codes:-

- GET: 200 (OK)-
- POST: 201 (Created)-
- PUT/PATCH: 200 (OK) or 204 (N- o Content)
- DELETE: 204 (No Content)-
- Always provide meaningful res- ponses

- Use proper error handling-
-
- Follow RESTful naming convent- ions

- Implement proper validation
