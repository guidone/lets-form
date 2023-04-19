export const makeWidthStyle = (fullWidth, width, style = {}) => {
  if (fullWidth) {
    return {
      ...style,
      width: '100%'
    };
  } else if (width) {
    return {
      ...style,
      width: `${parseInt(width, 10)}px`
    };
  }
  return style;
};
