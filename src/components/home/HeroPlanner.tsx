import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HeroPlanner() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");

  const handleSearch = () => {
    if (destination.trim()) {
      navigate(`/destinations?search=${encodeURIComponent(destination.trim())}`);
    } else {
      navigate("/destinations");
    }
  };

  return (
    <div className="mt-8 w-full max-w-2xl rounded-2xl bg-white p-3 shadow-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          placeholder="Where do you want to go?"
          className="min-h-12 flex-1 rounded-xl border border-black/10 bg-[#f8f5ef] px-4 text-[#2b241c] outline-none placeholder:text-[#2b241c]/50 focus:border-[#b8894a]"
        />

        <button
          type="button"
          onClick={handleSearch}
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2b241c] px-6 font-medium text-white transition hover:bg-[#40362b]"
        >
          <Search size={18} />
          Explore
        </button>
      </div>
    </div>
  );
}
