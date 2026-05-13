import DestinationCard from "@/components/DestinationCard";


const DestinationsPage = async() => {
    const res = await fetch('http://localhost:5000/destination')
    const data = await res.json();
    // console.log(data);
    
    return (
        <div>
            <h2 className="text-2xl font-bold text-center py-5">All Destinations</h2>
            <div className="grid grid-cols-4 gap-5"> 
                {
                    data.map(item => <DestinationCard key={item._id} destination={item}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;