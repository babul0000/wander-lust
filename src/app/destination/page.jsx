import DestinationCard from "@/components/DestinationCard";


const DestinationsPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
    const data = await res.json();
    // console.log(data);
    
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-2xl font-bold text-center py-5">All Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"> 
                {
                    data.map(item => <DestinationCard key={item._id} destination={item}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;