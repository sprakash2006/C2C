import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig"; 
import Header from '../components/header'
import RegisterButton from '../components/registerNowButton'
import { CalendarDays, Clock, Monitor } from "lucide-react"
import { ArrowRight } from "lucide-react";

const Event = () => {


    const [events, setEvents] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "events"));
          const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setEvents(data);
        } catch (error) {
          console.error("Error fetching students:", error);
        }
      };

      fetchData();
    }, []);


  return (
    <div className='bg-black text-black'>
      <Header />
      <div className='gap-15 py-70 md:py-50 px-[2vw] md:px-[15vw] bg-black text-white flex flex-col justify-center items-center'>

        {events.map((event) => {
          return(
          <div className='animate-bounce text-center px-[5vw] pt-6 pb-[2vw] border bg-[rgb(7,7,7)] border-[#ffffff3e] flex flex-col justify-center items-center'  style={{backgroundImage: "linear-gradient(to right, #101010 1px, transparent 1px), linear-gradient(to bottom, #101010 1px, transparent 1px)", backgroundSize: "50px 50px" }}>
            <div className=' pb-10 flex flex-col justify-center items-center'>
              <h1 className='text-[1.9rem] md:text-[2.25rem] md:pt-10' style={{ fontFamily: "Faculty Glyphic, sans-serif", fontWeight: 400, fontStyle: "normal",background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>{event.title || "-"}</h1>
              <p className='text-[#ffffff42]'>{event.subheading || "-"}</p>
            </div>
            <div className='pb-8'>
              <div className='flex flex-col md:flex-row justify-center items-center py-2' style={{  background: "rgba(0, 255, 128, 0.13)",  backdropFilter: "blur(12px)",   WebkitBackdropFilter: "blur(12px)",  border: "1px solid rgba(0, 255, 128, 0.2)",  boxShadow: "0 4px 30px rgba(0, 255, 128, 0.1)"}}>
                <div className='flex flex-col md:flex-row justify-center items-center px-20 py-3 md:py-0 md:px-8 md:border-r md:border-[rgba(0, 255, 128, 0.3)] gap-3'><CalendarDays size={25} /><span>{event.date || "-"}</span></div>
                <div className='flex flex-col md:flex-row justify-center items-center px-20 py-3 md:py-0 md:px-8 md:border-x md:border-[rgba(0, 255, 128, 0.3)] gap-3'><Clock size={25}  /><span>{event.time || "-"}</span></div>
                <div className='flex flex-col md:flex-row justify-center items-center px-20 py-3 md:py-0 md:px-8 md:border-l md:border-[rgba(0, 255, 128, 0.3)] gap-3'><Monitor size={25}  /><span>{event.mode || "-"}</span></div>
              </div>
            </div>

            <div className='md:w-[80%] border border-dashed border-[#ffffff49] bg-[#0000009d] px-6 py-5 rounded-2xl'>
              <h1 className='text-[1.25rem] pb-5 md:pb-2' style={{ fontFamily: '"Faculty Glyphic", sans-serif', fontWeight: 400, fontStyle: "normal" }}>Purpose Of Event :</h1>
              <p className='text-[1.05rem] text-[#ffffffcd]'>{event.purpose || "No upcoming events"}</p>
            </div>
            <div className='pt-8'>
              <RegisterButton link={event.registrationLink} />
            </div>
          </div>

          );
        })}




      </div>
    </div>
  )
}

export default Event
