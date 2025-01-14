'use client'; 
import { signIn,signOut,useSession} from "next-auth/react";
export const Appbar = () => {
    const session = useSession();
    return (
        <nav className="flex justify-between items-center p-4">
            <div className="font-bold">
                Playpulse
            </div>
            <div>
                {!session.data?.user && <button
                    onClick={() => signIn()}
                    className="px-4 py-2 rounded"
                > 
                    Sign in
                </button>}
                 {session.data?.user && <button
                    onClick={() => signOut()}
                    className="px-4 py-2 rounded"
                >
   
                   SignOut
                </button>}
                </div>
        </nav>
    );
};