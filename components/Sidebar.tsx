/* eslint-disable @next/next/no-img-element */
"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* model selection */}</div>

          {/* map through chat rows */}
        </div>
      </div>
      {session && (
        <img
          src={session.user?.image!}
          alt="Profile Picture"
          className="h-12 w-12 rounded-full cursor-pointer mb-2 mx-auto hover:opacity-50"
          onClick={() => signOut()}
        />
      )}
    </div>
  );
}

export default Sidebar;
