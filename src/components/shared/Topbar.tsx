import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";

const Topbar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess])
  

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <h1 className="h2-bold">
            <span className="text-purple-800">S</span>
            <span className="text-purple-700">O</span>
            <span className="text-purple-600">C</span>
            <span className="text-purple-500">I</span>
            <span className="text-purple-400">A</span>
            <span className="text-purple-300">L</span>
          </h1>
        </Link>

        <div className="flex gap-4">
          <Button variant="ghost" className="shad-button_ghost" onClick={() => signOut()}>
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img 
              src={user.imageUrl || '/assets/icons/profile-placeholder.svg'}
              alt="profile" 
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
