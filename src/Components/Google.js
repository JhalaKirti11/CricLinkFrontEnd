import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux-config/UserSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function GoogleDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const details = async (data) => {
    try {
      const loginInfo = {
        email: data.email,
        name: data.name,
        googleToken: data.sub, // Google ID
      };
      console.log(loginInfo);

      const response = await axios.post("http://localhost:3001/auth/googleSignIn", loginInfo);
      console.log(loginInfo);
      dispatch(setUser(response.data));
      console.log("i'm here")
      toast.success("Google Sign-In Successful");

      setTimeout(() => {
        if (response.data.user.role === "player") {
          navigate("/PlayerMyProfile");
        } else {
          navigate("/OrganizerProfile");
        }
      }, 1000);
    } catch (error) {
      toast.error("Google Sign-In Failed");
    }
  };

  return (
    <GoogleLogin
      onSuccess={(response) => {
        const data = jwtDecode(response.credential);
        details(data);
      }}
      onError={() => {
        toast.error("Google Login Failed");
      }}
    />
  );
}

export default GoogleDetails;

