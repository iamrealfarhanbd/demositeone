import {useRouter} from 'next/router'
import EventList from '../../componets/events/event-list';
import ResultsTitle from '../../componets/events/results-title';
import Button from '../../componets/ui/Button';
import { getFilteredEvents } from '../../dummy-data';
import ErrorAlert from '../../componets/ui/error-alert'


function FilterEventsPage() {
    const router = useRouter();
    const fillterData = router.query.slug;

    if(!fillterData){
        return (
            <>
            <div className="center">
            <ErrorAlert>
             <p >Loading....</p>
             </ErrorAlert>
            </div>
            </>
        )
    }

    const filteredYear = fillterData[0];
    const filteredMonth = fillterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numYear) || isNaN(numMonth) || numYear>2030 || numYear<2021 || numMonth<1 || numMonth>12 ){
        
        return (
            <>
            <div className="center">
            <ErrorAlert>
            <p> Invalid fillter....Please adjust your Value...!</p>
            </ErrorAlert>
            <Button link="/allevents" >Show All Events</Button>
            </div>
            </>
        )
    }

    const filteredEvents = getFilteredEvents({
        year:numYear,
        month:numMonth,
    })

    if(!filteredEvents || filteredEvents.length === 0){
        return (
            <>
            <div className="center">
            <ErrorAlert>
            <p> No Events Found For The Chosen Fillter..!</p>
            </ErrorAlert>
            <Button link="/allevents" >Show All Events</Button>
            </div>
            </>
        )
    }

    const data = new Date(numYear , numMonth-1)

    return (
        <>

            <ResultsTitle date={data}/>
            <EventList items={filteredEvents} />
        </>
    )
}

export default FilterEventsPage
