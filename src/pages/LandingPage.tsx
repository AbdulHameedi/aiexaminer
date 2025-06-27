import GoogleAuth from "../components/auth/GoogleAuth";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h2>Welcome !</h2>
      <GoogleAuth />
    </div>
  );
};

export default LandingPage;
