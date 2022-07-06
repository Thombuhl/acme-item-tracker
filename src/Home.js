import React from 'react';
import { connect } from 'react-redux';
import Rankings from './Rankings';

const Home = ({ users, things })=> {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Here at the Acme Item Tracker Corp we have { users.length } users and { things.length } things!
      </p>
      <Rankings />
    </div>
    
  );
};


const mapStateToProps = (state) => {
  return {
    users: state.users,
    things: state.things
  }
}

export default connect(mapStateToProps)(Home);
