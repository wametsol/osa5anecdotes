import React from 'react'


class App extends React.Component {
  klik = (eka, toka) => () => {
    this.props.store.dispatch({type: eka,
    data: toka})
    console.log(eka, toka);
    
  }
  render() {
    const anecdotes = this.props.store.getState().sort(function(a,b){
      return b.votes-a.votes
    })
    var data
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.klik('LIKE',anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form>
          <div><input value={data} onChange={data = data} /></div>
          <button onClick={this.klik('CREATE', data)}>create</button> 
        </form>
      </div>
    )
  }
}

export default App