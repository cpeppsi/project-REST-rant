const React = require('react')
const Def = require('../default')

function show (data) {
  return (
    <Def>
      <main>
        <h1>{ data.place.name }</h1>
        <div>
          <h2>Rating</h2>
          <p>Not Currently Rated</p>
        </div>
        <div>
          <h2>Description</h2>
          <p>Located in { data.place.city }, { data.place.state }. { data.place.name }'s cuisine includes { data.place.cuisines }.</p>
        </div>
        <div>
          <img src={ data.place.pic } alt="Picture of restraunt" />
        </div>
        <div>
          <h2>Comments</h2>
          <p>Comments to be said!</p>
        </div>
        <a href={ `/places/${data.id}/edit` } className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={ `/places/${data.id}?_method=DELETE` }>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  )
}

module.exports = show