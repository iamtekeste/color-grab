const Colors = () => {
  const sampleColors = [
    '#9CEFCE',
    '#2B10E4',
    '#F14C1A',
    '#A70C2E',
    '#0032FC',
    '#A4CCFB',
    '#030303',
    '#5F5F5F',
    '#F97206',
    '#3D4348',
    '#059046',
    '#BCB3D0'
  ].map(color => (
    <div key={color} className="single-color" style={{ background: color }}>
      {color}
    </div>
  ));
  return (
    <div className="colors-container">
      <h2>Some colors I stole.</h2>
      <div className="colors">{sampleColors}</div>
    </div>
  );
};

export default Colors;
