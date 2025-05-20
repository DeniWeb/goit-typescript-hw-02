import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ children, disabled, onClick }) => {
  return (
    <button className={s.loadMore_btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
