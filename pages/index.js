import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS=[
    {
        id:'m1',
        title:'A first Meetup',
        image:'https://newyorksimply.com/web-stories/things-to-do-central-park-nyc/',
        address:'Central Park,NYC',
        description:'This is a first Meetup'

    },
    {
        id:'m2',
        title:'A second Meetup',
        image:'https://newyorksimply.com/web-stories/things-to-do-central-park-nyc/',
        address:'Central Park,NYC',
        description:'This is a second Meetup'

    }
]




function HomePage(props){
    return <MeetupList meetups={DUMMY_MEETUPS} />
}
// export async function getStaticprops(){
//     return {
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage;