import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useSetSelected } from "../../hooks/useSelected";

const clientId: string = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";

const GoogleAuth = () => {
  const navigate = useNavigate();
  const setSelected = useSetSelected();

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    setSelected("isAuthenticated", true);

    if (credentialResponse?.credential) {
      const clientId = credentialResponse.clientId;
      console.log(credentialResponse)
      const decodedToken = JSON.parse(
        atob(credentialResponse.credential.split(".")[1])
      );

      const { name, email } = decodedToken;
      setSelected("user", { name, email, clientId });

      navigate("/dashboard");
    } else {
      console.log("Login Failed: No credential found");
    }
  };
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
