import { useRef } from "react";

const Model = () => {
  const loaded = useRef(false);
  const callFunc = async () => {
    if (!loaded.current) {
      loaded.current = true;
      await import("@google/model-viewer/dist/model-viewer.min.js");
    }
  };
  return (
    <div id="card">
      <model-viewer
        src="/Diaper_Final_01.gltf"
        ios-src=""
        alt="A 3D model "
        shadow-intensity="1"
        camera-controls=""
        auto-rotate
        interaction-prompt-threshold="0"
        ar=""
        onPointerEnter={callFunc}
        // onTouchMove={callFunc}
        // onScroll={callFunc}
        // onMouseEnter={callFunc}
        // onKeyDown={callFunc}
        poster="https://mylofamily.com/_next/image?url=https%3A%2F%2Fimages.myloapp.in%2Fgullack_products%2Fproduct_1662022477_1766390914.webp&w=256&q=90"
      >
        <div className="poster" slot="poster"></div>
      </model-viewer>
    </div>
  );
};
export default Model;
