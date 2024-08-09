import {create} from "zustand"

const useAuthStore=create(set=>({
    setToLS: (token) => {
        localStorage.setItem("token", JSON.stringify(token));
      },
}))

export default useAuthStore