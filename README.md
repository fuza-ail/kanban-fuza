# kanban
Kanban board is a project management tool to help visualize workflow.

link to app: https://kanban-fuza.web.app/

---
### RESTfull API

---
#### POST /register
###### create account
- Request Body:
```
{
	"email": < user email >,
	"password":< password >
}
```

- Request Header:
```
    not needed
```

- Response ( 201 - created )
```
{
    "id": 23,
    "email": <user email>,
    "password": <user password>,
    "updatedAt": "2020-04-10T06:26:14.423Z",
    "createdAt": "2020-04-10T06:26:14.423Z",
    "organization": "Hacktiv8"
}
```

- Error Response ( 400 - Email already taken ):
```
{
    "message": "Email already taken"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```

---
#### POST /login
###### Login account
- Request Body:
```
{
	"email": < user email > ,
	"password": < user password >
}
```

- Request Header:
```
    not needed
```

- Response ( 200 - Logged In ):
```
{
    "access_token": <access_token>,
    "email": < user email >
}
```

- Error Response ( 400 - Wrong password):
```
{
    "message": "Wrong password"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```

---
#### GET /tasks
###### Load all the task
- Request Body:
```
    not needed
```

- Request Header:
```
{
    "access_token": <access_token>
}
```

- Response ( 200 - Load data ):
```
[
    {
        "id": 9,
        "title": "backend",
        "description": "model generate",
        "category": "completed",
        "UserId": 1,
        "createdAt": "2020-04-09T18:45:51.986Z",
        "updatedAt": "2020-04-09T18:45:51.986Z"
    },
    {
        "id": 30,
        "title": "fmo diganti",
        "description": "other",
        "category": "backlog",
        "UserId": 1,
        "createdAt": "2020-04-10T05:33:25.343Z",
        "updatedAt": "2020-04-10T05:33:41.075Z"
    }
]
```

- Error Response ( 404 - Token not found ):
```
{
    "message": "Token not found"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```

---
#### POST /tasks
###### post the task
- Request headers:
```
{
    "access_token": <access_token>
}
```

- Request body:
```
{
	"title" : "backend",
	"description" : "model generate",
	"category": "completed"
}
```

- Response ( 200 - Data created ):
```
{
    "id": 31,
    "title": "backend",
    "description": "model generate",
    "category": "completed",
    "UserId": 1,
    "updatedAt": "2020-04-10T06:46:11.849Z",
    "createdAt": "2020-04-10T06:46:11.849Z"
}
```

- Error Response ( 404 - Token not found ):
```
{
    "message": "Token not found"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```

---
#### DELETE /tasks/:id
###### delete task
- Request body:
```
not needed
```

- Request headers:
```
{
    "access_token": <access_token>
}
```

- Request params:
```
{
    "id": 7
}
```

- Response:
```
{
    "message": "Task successfully deleted"
}
```

- Error Response ( 404 - Task not found ):
```
{
    "message": "Task not found"
}
```

- Error Response ( 403 - Unauthorized account ):
```
{
    "message": "Unauthorized account"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```

---
#### PUT /tasks/:id
###### edit task
- Request params:
```
{
    "id": 7
}
```

- Request headers:
```
{
    "access_token": <access_token>
}
```

- Request Body:
```
{
	"title" : "backend",
	"description" : "model generate",
	"category": "completed"
}
```

- Response ( 200 task edited ):
```
{
    "id": 58,
    "title": "front end",
    "description": "making reusable component in vue progress",
    "category": "todo",
    "UserId": 1,
    "createdAt": "2020-04-10T11:28:29.522Z",
    "updatedAt": "2020-04-10T11:28:55.155Z"
}
```

- Error Response ( 404 - Task not found ):
```
{
    "message": "Task not found"
}
```

- Error Response ( 403 - Unauthorized account ):
```
{
    "message": "Unauthorized account"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```





