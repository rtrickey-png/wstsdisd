

function scaleToRange(value, inMin, inMax, outMin, outMax) {
  if ( value < inMin ) {
    value = inMin;
  } else if (value > inMax ) {
    value = inMax;
  }

  let outRange = outMax - outMin;
  let inRange = inMax - inMin;
  return (value - inMin) * outRange / inRange + outMin;
}
