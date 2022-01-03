import { useBreakpointValue } from "@chakra-ui/react";
import { createContext, FC, useContext } from "react";


const IsMobileContext = createContext<boolean>({} as boolean)

export const IsMobileProvider: FC = ({ children }) => {
    const isMobile = useBreakpointValue({
        base: true,
        lg: false
    }) || false;

    return <IsMobileContext.Provider value={isMobile}>
        {children}
    </IsMobileContext.Provider>

}

export const useIsMobileContext = () => useContext(IsMobileContext);