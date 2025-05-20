import { useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import s from './Loader.module.css';

const Loader = () => {
  const [loaderColor, setLoaderColor] = useState('#b8c1ec');

  return <PropagateLoader color={loaderColor} className={s.loader} />;
};

export default Loader;
