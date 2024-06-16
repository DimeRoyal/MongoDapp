import SignIn from "@/components/auth/signIn";
import SignUp from "@/components/auth/signUp";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Login() {
  const [authAction, setAuthAction] = useState<string>("sign-in");

  const { referralToken } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    function checkAuth() {
      const session = JSON.parse(
        localStorage.getItem("sb-ufvdyhhdkjyrosnpwqqs-auth-token")
      );

      if (session?.access_token) navigate("/", { replace: true });
    }

    checkAuth();
  }, []);

  return (
    <>
      <Toaster />
      <div className="h-screen  w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="h-full flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            {authAction === "sign-in" ? (
              <SignIn updateAuth={() => setAuthAction("sign-up")} />
            ) : (
              <SignUp updateAuth={() => setAuthAction("sign-in")} />
            )}
          </div>
        </div>
        <div className="hidden bg-muted lg:block bg-[url('@/assets/images/auth-background.webp')] bg-cover bg-center"></div>
      </div>
    </>
  );
}
