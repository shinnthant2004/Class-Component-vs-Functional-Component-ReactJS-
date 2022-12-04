import { Component } from "react";

import '../card-list/card-list.style.css';
import Card from "../card/card.component";

class CardList extends Component {
    render(){
        console.log("card list render")
        const {monsters} = this.props;

        return (
          <div className="card-list">
           {
            monsters&&monsters.map((monster)=> {
              return (
                <Card key={monster.id} monster = {monster}/>
              )
            })
           }
          </div>
        )
    }
};
export default CardList;