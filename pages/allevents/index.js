import {useRouter} from 'next/router'
import {getAllEvents} from '../../dummy-data'
import EventList from '../../componets/events/event-list'
import EventSearch from '../../componets/events/event-search'
function index() {
    
    const router = useRouter();
    const events = getAllEvents();
   
    function findEventsHandler(year,month){
        const fullPath = `/allevents/${year}/${month}`
        router.push(fullPath);
    }
    
    return (
        <>
            <EventSearch onSearch={findEventsHandler} />
            <EventList items={events}/>
        </>
    )
}

export default index
