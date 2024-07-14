import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinRoomForm = ({uuid,socket,setUser}) => {

  const[roomId,setRoomId] = useState("")
  const [name,setName] = useState("") 
  const navigate = useNavigate()
  const handleRoomJoin = (e)=>{
    e.preventDefault();
    const roomData = {
      name,
      roomId,
      userId: uuid(),
      host:false,
      presenter:false
    }
    setUser(roomData)
    navigate(`/${roomId}`)
    console.log(roomData)
    socket.emit("userJoined",roomData)
  }
  return (
    <form className="w-full mt-5 ">
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded my-2"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <div className="flex gap-1">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded"
            placeholder="Enter room Code"
            value={roomId}
            onChange={(e)=>setRoomId(e.target.value)}
          />
        </div>
      </div>
      <button
        className="w-full px-4 py-2 mt-10 bg-cyan-600 text-white rounded hover:bg-cyan-400 transform transition-transform duration-150 active:scale-95"
        type="button"
        onClick={handleRoomJoin}
      >
        Join Room
      </button>
    </form>
  );
};

export default JoinRoomForm;
