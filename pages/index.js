import Head from 'next/head'
import EventList from '../componets/events/event-list';
import { getFeaturedEvents } from '../dummy-data'



export default function Home() {

  const featuredEvents = getFeaturedEvents();

    return (
    <>
      <EventList items={featuredEvents} />
    </>
    )
}
