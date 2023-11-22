const React = require('react')
const Default = require('./layouts/default')

function Index () {
    return (
      <Default>
        <h2>Index Page</h2>
        <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>

      </Default>
    )
}

module.exports = Index
