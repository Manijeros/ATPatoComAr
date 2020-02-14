import React from "react"

const ImageLink = ({ href, src, alt, style }) => (
  <a href={href} style={style}>
    <img src={src} style={style} alt={alt} />
  </a>
)

export default ImageLink
