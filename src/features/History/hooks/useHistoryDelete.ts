import { useState } from "react";

import { showErrorToast } from "../../Signup/utils/toast";

export const useHistoryDelete = (
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const toggleDeleteMode = (type: string) => {
    if (type === "cancel" || type === "delete") {
      setIsDeleteMode((prev) => !prev);
      setCheckedItems([]);
    } else {
      checkedItems.length === 0 && showErrorToast("URL이 선택되지 않았습니다");
      if (!checkedItems.length) return;
      setIsModal((prev) => !prev);
    }
  };

  const handleCheck = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return {
    checkedItems,
    setCheckedItems,
    isDeleteMode,
    setIsDeleteMode,
    handleCheck,
    toggleDeleteMode,
  };
};
