import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

const TextureImporter = (path) => {
    const texture = useLoader(TextureLoader,path);
    return texture;
}

export { TextureImporter };