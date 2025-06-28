import React from "react";

export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Notes..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
