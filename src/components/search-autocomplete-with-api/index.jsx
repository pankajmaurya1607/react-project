import React, { useState, useEffect } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(e) {
    // console.log(e.target.innerText);

    setShowDropDown(false)
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  }

  console.log(users, filteredUsers);

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data! Please Wait...</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users..."
          type="text"
          onChange={handleChange}
        />
      )}

      {showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
}
