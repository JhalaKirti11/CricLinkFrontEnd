import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Height } from '@mui/icons-material';
import { backdropClasses } from '@mui/material';


export const CreateGroup = () =>{
    const navigate = useNavigate();

    const player = useSelector((state) => state.User.user);
    const token = useSelector((state) => state.User.token);
    const id = useSelector((state) => state.User.user._id);
    const name = useSelector((state) => state.User.user.name);

    console.log("user Data : " + token + " " + id + " " + name);

    const [ group, setGroup] = useState({groupName:"", description:""});
    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGroup({ ...group, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3001/group/createGroup/${id}`, group);
            console.log("Group created or not : "+ response.data);
            setSuccessMessage("success :", response.data);

        }catch(error){
            if(error.response && error.response.data){
                toast.error('Error in creating group.');
            }
        }
    }

    const styles = {
        chat : {
            // background: url('forest.jpeg'),
            backgroundSize: "cover",
            backgroundttachment: "fixed",
            width: "250px",
            height: "350px"
            
          
      }
    }


    
    return (
        <>
             <div className="container my-5 bg-info p-3">
             <h2>Create Chat-Box</h2>
             <div id="chat">
                <img src={`/assets/highlights/CreateGroupChat.png`}></img>
             </div>
             <form onSubmit={handleFormSubmit} method="post">
             <div className="form-group">
                    <label>Group Name:</label>
                    <input
                        type="text"
                        name="groupName"
                        className="form-control"
                        value={group.groupName}
                        onChange={handleInputChange}
                        placeholder="Enter Group Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        value={group.description}
                        onChange={handleInputChange}
                        placeholder="Enter Group Description"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3 text-white">
                    Create
                </button>
                </form>

                {/* {showModel && (
                     <div
                     className="modal show"
                     style={{
                         display: "block",
                         backgroundColor: "rgba(0, 0, 0, 0.5)",
                     }}>
             </div>
              )} */}
              </div>
        </>
    )

}