import { useState } from "react";

function Filters({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <div style={{ padding: "10px", background: "white" }}>
      <input
        type="text"
        placeholder="Search property..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filters;