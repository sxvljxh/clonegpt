import NewChat from "./NewChat";

function Sidebar() {
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>
            {/* model selection */}
          </div>

          {/* map through chat rows */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;