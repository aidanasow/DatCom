import {useMediaQuery} from "utils/helpers/useMedia.js";

export const UseSize = () => {
    const tablet = useMediaQuery("(max-width: 900px)");
    const phone = useMediaQuery("(max-width: 500px)");
    const miniTab = useMediaQuery("(max-width: 750px)");
    const laptop = useMediaQuery("(max-width: 1200px)");
    return {
        tablet, phone, miniTab, laptop
    };
};

