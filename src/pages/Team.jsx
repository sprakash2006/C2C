import Header from '../components/header';   // Make sure file name matches exactly
import TeamCard from '../components/TeamCard';
import Photo from '../assets/profile-image.jpg';

const Team = () => {

  const OurTeam = [
  { id: 1, name: "Aarav Sharma", role: "Chairperson", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 2, name: "Priya Mehta", role: "President", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 3, name: "Rohan Desai", role: "Vice President", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },

  // Secretaries (6)
  { id: 4, name: "Ishita Verma", role: "Web Development Secretary", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 5, name: "Kunal Singh", role: "Artificial Intelligence Secretary", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 6, name: "Ananya Gupta", role: "Outreach Secretary", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 7, name: "Raj Malhotra", role: "Multimedia Secretary", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 8, name: "Simran Kaur", role: "App Development Secretary", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 9, name: "Aditya Joshi", role: "Event Management Secretary", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },

  // Coordinators (22)
  { id: 10, name: "Nisha Patel", role: "Web Development Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 11, name: "Amit Kumar", role: "Web Development Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 27, name: "Yash Raj", role: "Web Development Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 32, name: "Payal Sharma", role: "Web Development Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },

  { id: 12, name: "Sneha Kapoor", role: "Artificial Intelligence Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 13, name: "Vikram Yadav", role: "Artificial Intelligence Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 26, name: "Pooja Nair", role: "Artificial Intelligence Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 33, name: "Mohit Verma", role: "Artificial Intelligence Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },

  { id: 14, name: "Tanvi Reddy", role: "Outreach Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 15, name: "Harsh Chauhan", role: "Outreach Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 30, name: "Rhea D'Souza", role: "Outreach Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 34, name: "Kabir Malhotra", role: "Outreach Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },

  { id: 16, name: "Neha Bansal", role: "Multimedia Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 17, name: "Arjun Nair", role: "Multimedia Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 29, name: "Karthik Menon", role: "Multimedia Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 35, name: "Shivangi Roy", role: "Multimedia Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },

  { id: 18, name: "Meera Iyer", role: "App Development Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 19, name: "Siddharth Jain", role: "App Development Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 28, name: "Snehal Patil", role: "App Development Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 36, name: "Ankit Sinha", role: "App Development Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },

  { id: 20, name: "Kavya Rao", role: "Event Management Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 21, name: "Rahul Khanna", role: "Event Management Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 37, name: "Krishna Das", role: "Event Management Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },

  { id: 22, name: "Divya Sharma", role: "Content Writing Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 23, name: "Manish Tiwari", role: "Content Writing Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 31, name: "Dev Patel", role: "Content Writing Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 38, name: "Alisha Khan", role: "Content Writing Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },

  { id: 24, name: "Ayesha Khan", role: "Research & Innovation Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 25, name: "Ritik Agarwal", role: "Research & Innovation Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 39, name: "Saurabh Kulkarni", role: "Research & Innovation Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" },
  { id: 40, name: "Nikita Joshi", role: "Research & Innovation Coordinator", linkedinUrl:"https://linkedin.com/in/johndoe", instagramUrl:"https://instagram.com/johndoe" }
];



  return (
    <div className="bg-black text-white pb-[5vw]">
      <Header />
      <div className="flex flex-col justify-center items-center pt-[40vw] md:pt-[20vw]">
        <p 
          className=" text-5xl md:text-9xl font-bold text-[rgba(255,255,255,0.7)] overflow-hidden"
          style={{ fontFamily: '"Potta One", system-ui', fontWeight: 400, fontStyle: "normal" }}
        >
          Meet Our Team
        </p>
      </div>

      <div>
        <p className="text-center text-2xl md:text-4xl pt-[14vw] md:pt-[5vw] overflow-hidden pb-1 md:pb-[3vw]">𖤐 LeaderShip 𖤐</p>

        <div>
          {OurTeam
            .filter((member) => member.role === "Chairperson") // also fix case sensitivity
            .map((member) => (
              <TeamCard 
                key={member.id}
                profileImage={Photo}
                name={member.name}
                position={member.role}
                linkedinUrl={member.linkedinUrl}
                instagramUrl={member.instagramUrl}
              />
            ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:gap-[5vw]">
          {OurTeam
            .filter((member) => member.role === "President" || member.role === "Vice President") // also fix case sensitivity
            .map((member) => (
              <TeamCard 
                key={member.id}
                profileImage={Photo}
                name={member.name}
                position={member.role}
                linkedinUrl={member.linkedinUrl}
                instagramUrl={member.instagramUrl}
              />
            ))}
        </div>
        <p className="text-center text-4xl pt-[5vw] overflow-hidden pb-[3vw]">𖤐 &nbsp;Secretary Team&nbsp; 𖤐</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-[12vw]">
          {OurTeam
            .filter((member) => member.role.includes("Secretary"))
            .map((member) => (
              <TeamCard
                key={member.id}
                profileImage={Photo}
                name={member.name}
                position={member.role}
                linkedinUrl={member.linkedinUrl}
                instagramUrl={member.instagramUrl}
              />
            ))}
        </div>
        <p className="text-center text-3xl md:text-4xl pt-[5vw] overflow-hidden pb-[5vw]">𖤐 &nbsp;Team Coordinators&nbsp; 𖤐</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-[7vw] gap-y-4">
          {OurTeam
            .filter((member) => member.role.includes("Coordinator"))
            .map((member) => (
              <div className='flex flex-col min-w-[70vw] md:min-w-[18vw] py-4 bg-[rgba(255,255,255,0.05)] border-[0.01rem] border-[rgba(255,255,255,0.1)] rounded-[10px] duration-500 hover:shadow-[0_1px_0_#F3C623,inset_0_-1px_0_#F3C623]'>
                <p className='text-[1.1rem] font-semibold'>{member.name}</p>
                <p className='text-[0.95rem] opacity-60'>{member.role}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
