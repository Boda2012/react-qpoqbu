import React, { Component } from 'react';
import { Card } from '../card/card.component';

export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

{
  /* <div key={monster.id}>
<h1>{monster.name}</h1>
</div> */
}
