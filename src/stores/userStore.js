import Cookies from "js-cookie";
import { useEffect } from "react";
import { create } from "zustand";

// Get initial user from localStorage
const getInitialUser = () => {
  const storedUser = localStorage.getItem("Tag_master_admin");
  return storedUser ? JSON.parse(storedUser) : null;
};

// Zustand store
export const useAuthStore = create((set) => ({
  user: getInitialUser(),
  setUser: (user) => {
    set({ user });
    if (user) {
      localStorage.setItem("Tag_master_admin", JSON.stringify(user));
    } else {
      localStorage.removeItem("Tag_master_admin");
    }
  },
  cartCount: localStorage.getItem("cartCount")
    ? JSON.parse(localStorage.getItem("cartCount"))
    : 0,
  setCartCount: (count) => {
    set({ cartCount: count });
    localStorage.setItem("cartCount", JSON.stringify(count));
  },
}));

// useAuthSubscription hook
export function useAuthSubscription() {
  useEffect(() => {
    const token = Cookies.get("Tag_master_admin");

    if (!token) {
      useAuthStore.getState().setCartCount(null);
      useAuthStore.getState().setUser(null);
    }

    const unsubscribe = useAuthStore.subscribe((user) => {
      if (user) {
        localStorage.setItem("cartCount", JSON.stringify(user.cartCount || 0));
        localStorage.setItem("Tag_master_admin", JSON.stringify(user));
      } else {
        localStorage.removeItem("cartCount");
        localStorage.removeItem("Tag_master_admin");
      }
    });

    return () => unsubscribe();
  }, []);
}
