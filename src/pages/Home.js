import React, { Component } from 'react';

import BountyLink from '../components/BountyLink'

class Home extends Component {
    render() {

        const bountyLinks = this.props.bounties.map((b) => {
            return <BountyLink name={b.name} bountyId={b._id} />
        });


        return (
            <div>
                <h2>Home</h2>
                <h3>Wanted Criminals</h3>
                {bountyLinks}
            </div>
        )
    }
}

export default Home;