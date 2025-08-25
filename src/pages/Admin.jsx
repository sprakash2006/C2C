import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  if (!isAdmin) {
    return <h2>❌ Unauthorized. Please log in first.</h2>;
  }



  return (
    <>
    <div className='bg-black text-white'>
      <div className='pt-23 pb-15'>
        <p className="text-center text-7xl font-bold text-[#ffffffe1]" style={{ fontFamily: "'Potta One', system-ui", fontWeight: 400, fontStyle: "normal"}}> 𖤐 ADMIN PANEL 𖤐</p>
      </div>
      <div className=" flex pt-30 pb-10">
        <button className="md:px-8 md:py-4 md:text-2xl md:min-w-[68vw] border-1 cursor-pointer hover:scale-110 duration-500 border-[#ffffff1d] text-white font-medium py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition" style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}} onClick={()=>navigate("/admin/studentslist")}> MANAGE MEMBERS  </button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-10 md:pb-60 pb-20 px-[15vw]">
        <button className="md:px-8 md:py-4 md:text-2xl md:min-w-[20vw] border-1 cursor-pointer hover:scale-110 duration-500 border-[#ffffff1d] text-white font-medium py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition" style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}} onClick={()=>navigate("/admin/addevent")}> CREATE EVENT </button>
        <button className="md:px-8 md:py-4 md:text-2xl md:min-w-[20vw] border-1 cursor-pointer hover:scale-110 duration-500 border-[#ffffff1d] text-white font-medium py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition" style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}} onClick={()=>navigate("/admin/updateevent")}> EDIT EVENT </button>
        <button className="md:px-8 md:py-4 md:text-2xl md:min-w-[20vw] border-1 cursor-pointer hover:scale-110 duration-500 border-[#ffffff1d] text-white font-medium py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition" style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}} onClick={()=>navigate("/admin/deleteevent")}> DELETE EVENT </button>
        <button className="md:px-8 md:py-4 md:text-2xl md:min-w-[20vw] border-1 cursor-pointer hover:scale-110 duration-500 border-[#ffffff1d] text-white font-medium py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition" style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}} onClick={()=>navigate("/admin/addupdate")}> CREATE UPDATES </button>
        <button className="md:px-8 md:py-4 md:text-2xl md:min-w-[20vw] border-1 cursor-pointer hover:scale-110 duration-500 border-[#ffffff1d] text-white font-medium py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition" style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}} onClick={()=>navigate("/admin/editupdate")}> EDIT UPDATES </button>
        <button className="md:px-8 md:py-4 md:text-2xl md:min-w-[20vw] border-1 cursor-pointer hover:scale-110 duration-500 border-[#ffffff1d] text-white font-medium py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition" style={{fontFamily: '"Electrolize", sans-serif', fontWeight: 400, fontStyle: "normal", background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}} onClick={()=>navigate("/admin/deleteupdate")}> DELETE UPDATES </button>
      </div>
    </div>
    </>
  );
};


export default Admin;