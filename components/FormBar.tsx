"use client"

import React from "react";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

type Props = { query?: string; };

const FormBar = ({ query }: Props) => {
    const [search, setSearch] = React.useState("");

  return (
    <>
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <div className="flex gap-2">
        {(search || query) && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </>
  );
};

export default FormBar;
