import { useState } from "react";

export const useDeleteMode = () => {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const toggleDeleteMode = () => setIsDeleteMode((prev) => !prev);

  return { isDeleteMode, toggleDeleteMode };
};
