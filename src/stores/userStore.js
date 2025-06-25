import Cookies from "js-cookie";
import { useEffect } from "react";
import { create } from "zustand";

// Get initial user from localStorage
const getInitialUser = () => {
  try {
    const storedUser = localStorage.getItem("Tag_master_user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    return null;
  }
};

export const useAuthStore = create((set) => ({
  user: getInitialUser(),
  setUser: (user) => {
    set({ user });
    if (user) {
      localStorage.setItem("Tag_master_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("Tag_master_user");
    }
  },
}));

export function useAuthSubscription() {
  useEffect(() => {
    const token = Cookies.get("Tag_master_token"); // this should be the real auth token

    if (!token) {
      useAuthStore.getState().setCartCount(0);
      useAuthStore.getState().setUser(null);
    }

    const unsubscribe = useAuthStore.subscribe((state) => {
      const { user } = state;
      if (user) {
        localStorage.setItem("Tag_master_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("Tag_master_user");
      }
    });

    return () => unsubscribe();
  }, []);
}
