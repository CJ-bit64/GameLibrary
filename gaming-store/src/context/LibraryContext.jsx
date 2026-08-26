// eslint-disable-next-line no-unused-vars
import { createContext, useContext, useState } from "react";

const LibraryContext = createContext();

export function LibraryProvider({ children }) {
  const [library, setLibrary] =useState([]);

  function addToLibrary(game) {
    setLibrary((prev) => {
       const alreadyIn =prev.some((g) => g.id === game.id);
       if (alreadyIn) return prev;
       return [...prev, game];
    });
  }
   
  function removeFromLibrary(id) {
    setLibrary((prev) => prev.filter((g) => g.id !==id))
  }

  function isInLibrary(id) {
    return library.some((g) => g.id === id);
  }
  return (
  <LibraryContext.Provider
    value={{ library, addToLibrary, removeFromLibrary, isInLibrary }}
  >
    {children}
  </LibraryContext.Provider>
);
}
export function useLibrary() {
  return useContext(LibraryContext);
}