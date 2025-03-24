import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const EditIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.336,4.8l2.859,2.859L15.3,20H12V16.7L24.336,4.8M24.362,0a1.991,1.991,0,0,0-1.411.584L8,15v9h9L31.416,9.05a2,2,0,0,0,0-2.822L25.773.585A1.988,1.988,0,0,0,24.362,0Z"
      fill="#0077b6"
    />
    <path
      d="M28,27a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h5a2,2,0,0,0,2-2h0a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V22a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2Z"
      fill="#0077b6"
    />
  </svg>
);

export default EditIcon;
