import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { servicesArray } from "./utils";

export default function useService() {
  const pathname = usePathname();
  const router = useRouter();
  const { replace } = router;  

  const [currentService, setCurrentService] = useState({});
  const [prevLink, setPrevLink] = useState(null);
  const [nextLink, setNextLink] = useState(null);

  const findCurrentService = () => {
    for (let i = 0; i < servicesArray.length; i++) {
      if (pathname == servicesArray[i].pathname) {
        setCurrentService(servicesArray[i]);
        if (i == 0) {
          setPrevLink(null);
          setNextLink(servicesArray[i + 1].pathname);
        } else if (i == servicesArray.length - 1) {
          setPrevLink(servicesArray[i - 1].pathname);
          setNextLink(null);
        } else {
          setPrevLink(servicesArray[i - 1].pathname);
          setNextLink(servicesArray[i + 1].pathname);
        }
      }
    }
  };
  useEffect(() => {
    findCurrentService();
  }, [currentService]);

  return { replace, pathname, currentService, prevLink, nextLink };
}
