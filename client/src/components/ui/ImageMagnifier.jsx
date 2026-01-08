import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/dist/styles.css";

export default function ImageMagnifier({ src, onHoverChange }) {
  return (
    <div
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
      style={{ width: "100%", height: "100%" }}
    >
      <InnerImageZoom
        src={src}
        zoomSrc={src}
        zoomType="hover"
        zoomScale={1.8}
        hideHint
      />
    </div>
  );
}
