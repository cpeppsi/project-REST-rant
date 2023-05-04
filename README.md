# Project REST-Rant

REST-Rant is an app where users can review restaurants.


### Routes

| Method | Path                     | Purpose                              |
| ------ | ------------------------ | ------------------------------------ |
| GET    | /                        | Home Page                            |
| GET    | /places                  | Places index page                    |
| POST   | /places                  | Create new place                     |
| GET    | /places/new              | Form page for creating a new place   |
| GET    | /places/:id              | Details about a particular place     |
| PUT    | /places/:id              | Update a particular place            |
| GET    | /places/:id/edit         | Form page for editing existing place |
| DELETE | /places/:id              | Delete particular place              |
| POST   | /places/:id/rant         | Create rant about particular place   |
| DELETE | /places/:id/rant/:rantId | Delete rant about particular place   |
| GET    | *                        | 404 page                             |

### Places

| Field    | Type      |
| -------- | --------- |
| name     | String    |
| city     | String    |
| state    | String    |
| cuisines | String    |
| pic      | String    |