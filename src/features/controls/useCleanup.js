import { useDispatch } from "react-redux";
import { clearControls } from "./controlsSlice";

export const useCleanup = () => {
    const dispatch = useDispatch();

    const cleanUp = () => dispatch(clearControls());

    return () => dispatch(cleanUp)
}