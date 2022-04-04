import {useContext} from 'react';
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'
import FavortiesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoriteCtx = useContext(FavortiesContext);
    return (
        <header className={classes.header}>
            <div className={classes.title}>React Meetups</div>
            <nav className={classes.menu}>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My Favorites
                        <span>{favoriteCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;