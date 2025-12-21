import { Building2, Mail, Phone } from "lucide-react"
import { useNavigate } from "react-router-dom";

const Info = ({icon:Icon, text}) => (
  <div className="flex items-center gap-2 py-1 text-sm">
    <Icon size={16} />
    <span className="truncate">{text}</span>
  </div>
);
const UserCard = ({user}) => {
  const navigate = useNavigate();
  return (
    <div 
    onClick={() => navigate(`/user/${user.id}`)}
    className='bg-blue-100 rounded-2xl p-5 shadow-md w-[260px] cursor-pointer hover:shadow-lg transition'>
      <h1 className='text-xl font-bold text-[#213448]'>{user.name}</h1>
      <Info icon={Mail} text={user.email}/>
      <Info icon={Phone} text={user.phone}/>
      <Info icon={Building2} text={user.company.name}/>
    </div>
  )
}

export default UserCard