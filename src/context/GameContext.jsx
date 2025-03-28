import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const GameContext = createContext();

// Provider Component
export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [popular_game,set_popular_game]=useState([]);
  const [plartform_game,set_plartform_game]=useState([]);
  // Fetch all games
  const fetchAllGames = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:8080/admin//api-games/category");
      console.log(response)
      set_popular_game(response.data.find_popular_games);
      set_plartform_game(response.data.find_plartform_games);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch games");
    } finally {
      setLoading(false);
    }
  };

  // Fetch games by category
  const fetchGamesByCategory = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api-games/category/${category}`);
      
      // Update state based on category response
      if (category === "প্ল্যাটফর্ম সুপারিশ" || category === "জনপ্রিয়") {
        setCategoryGames({
          "প্ল্যাটফর্ম সুপারিশ": response.data["প্ল্যাটফর্ম সুপারিশ"] || [],
          "জনপ্রিয়": response.data["জনপ্রিয়"] || [],
        });
      } else {
        setGames(response.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch games");
    } finally {
      setLoading(false);
    }
  };
  return (
    <GameContext.Provider value={{ games,fetchAllGames, fetchGamesByCategory, loading, error,popular_game,plartform_game}}>
      {children}
    </GameContext.Provider>
  );
};
