"use client";

import { useEffect } from "react";

type FocusItemProps = {
  itemId: string;
};

const FocusItem: React.FC<FocusItemProps> = ({ itemId }) => {
  useEffect(() => {
    const element = document.getElementById(itemId);
    if (element) {
      element.focus();
    }
  }, [itemId]);

  return null;
};

export default FocusItem;
