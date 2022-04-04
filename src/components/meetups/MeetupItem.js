import { useContext } from 'react';
import FavortiesContext from '../../store/favorites-context';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';



function MeetupItem(props) {

   const favoritesCtx = useContext(FavortiesContext);

   const itemIsFavortie = favoritesCtx.itemIsFavortie(props.id);

    function toggleFavoriteStatusHandler() {
        if(itemIsFavortie) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id : props.id,
                image : props.image,
                title : props.title,
                address : props.address,
                description : props.description
            })
        }
    }

    return (
        <li className={classes.list}>
            <Card>
                <div>
                    <img className={classes.img} src={props.image} alt={props.title}/>
                </div>
                <div className={classes.dtl}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.btnfav}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavortie ? 'Remove from Favorties' : 'To Favorties'}</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;