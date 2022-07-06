import React from 'react';
import { connect } from 'react-redux';

const Ranking = ({things})=> {
  const rankings = [];
  things.map( thing => {
    rankings.push(thing.ranking)
    })
  function compareNumbers(a, b) {
    return a - b;
  }
  let sortedArr = rankings.sort(compareNumbers);
  const GREATEST = sortedArr[sortedArr.length - 1]
  const SECOND = sortedArr[sortedArr.length - 2]
  const names = things.map(thing => {
    if(thing.ranking === GREATEST || thing.ranking === SECOND){
      return thing.name
    }
  })
  return (
    <div>
      <h1>Highest Rankings</h1>
      <ul>
      {
        names.map((name, index) => {
          if(name !== undefined) {
            return (
              <li key={index}>
                <h3>Thing:{name}</h3>
              </li>
            )
          }
        }) 
      }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    things: state.things
  }
}

export default connect(mapStateToProps)(Ranking)