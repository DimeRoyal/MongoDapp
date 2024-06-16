import { Outlet, useNavigate } from "react-router-dom";

import Sidenav from "./sidenav";
import Topnav from "./topnav";
import { useEffect } from "react";
import { getCurrentUser } from "@/services/apiAuth";

export default function Default() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const user = await getCurrentUser();

      if (!user) navigate("/auth", { replace: true });
    })();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Sidenav />

        <Topnav />

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
