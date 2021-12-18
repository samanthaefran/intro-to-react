function Player(props) {
  console.log(props, 'this is props');
  return (
    <div className={props.whichPlayer}>
      <h2>Player: {props.whichPlayer} </h2>
      <h3>Wins: {props.numWins}</h3>
    </div>
  )
}

export default Player;