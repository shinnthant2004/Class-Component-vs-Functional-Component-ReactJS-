import '../card-list/card-list.style.css';
import Card from "../card/card.component";

const CardList = ({monsters}) => {
        console.log("card list render")
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
};
export default CardList;