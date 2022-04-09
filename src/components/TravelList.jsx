import TravelCard from './TravelCard';
import './TravelList.css';
const travelData = [
    {
        title: 'New York',
        image: 'img/newyork.jpeg',
        date: 'Fri 27 Nov 2016',
    },
    {
        title: 'Paris',
        image: 'img/paris.jpeg',
        date: 'Fri 20 Nov 2019',
    },
    {
        title: 'San Francisco',
        image: 'img/sanfran.jpeg',
        date: 'Fri 17 Nov 2020',
    },
];
function TravelList() {
  return (
    <div className='travel'>
      <div className='container grid'>
        <TravelCard 
        title={travelData[0].title} 
        image={travelData[0].image} 
        date={travelData[0].date} 
        />
        <TravelCard 
        title={travelData[1].title} 
        image={travelData[1].image} 
        date={travelData[1].date} 
        />
        <TravelCard 
        title={travelData[2].title} 
        image={travelData[2].image} 
        date={travelData[2].date} 
        />
      </div>
    </div>
  );
}

export default TravelList;
