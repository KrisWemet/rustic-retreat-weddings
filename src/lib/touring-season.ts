import { useEffect, useState } from "react";

export const useTouringSeasonOpen = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Edmonton", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
    setOpen(today >= "2026-09-23" && today <= "2026-09-27");
  }, []);
  return open;
};
