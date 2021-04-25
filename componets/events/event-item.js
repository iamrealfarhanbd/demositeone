import React from 'react'
import Button from '../ui/Button'
import DateIcone from '../icons/date-icon'
import AdressIcon from '../icons/address-icon.js'
import ArrowRight from '../icons/arrow-right-icon.js'

import classes from './event-item.module.css'
function EventItem(props) {
    const {title, image, date, location, id} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-Us',{
    day:'numeric',
    month:'long',
    year:'numeric',
    });
    const formattedAdress = location.replace(',' , '\n');
    const exploreLink = `/allevents/${id}`;
    return (
        <div>
            <li className={classes.item}>
                <img src={'/' + image} alt={title}/>
                <div className={classes.content}>
                    <div className={classes.summary}>
                        <h2>{title}</h2>
                        <div className={classes.date}>
                            <DateIcone />
                        <time>{humanReadableDate}</time>
                        </div>
                    </div>
                    <div className={classes.address}>
                        <AdressIcon/>
                        <address>{formattedAdress}</address>
                     </div>
                     <div className={classes.actions}>
                        <Button link={exploreLink}>
                            <span>Explore Event</span>
                            <span className={classes.icon}>
                                <ArrowRight/>
                                </span>
                            </Button>
                     </div>
                </div>
            </li>
        </div>
    )
}

export default EventItem
