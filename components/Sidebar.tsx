/* eslint-disable @next/next/no-img-element */
"use client";
import { useCollection } from "react-firebase-hooks/firestore";
import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";

function Sidebar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  // console.log(chats);

  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* model selection */}</div>

          {/* map through chat rows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
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
