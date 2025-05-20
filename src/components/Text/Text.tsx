import s from './Text.module.css';

const Text = ({ children }) => {
  return <p className={s.body_text}>{children}</p>;
};

export default Text;
