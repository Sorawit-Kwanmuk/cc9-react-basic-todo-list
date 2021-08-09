function WrapList({ children, classes }) {
  return (
    <div className={`card shadow rounded-0 bd-callout bd-callout-${classes}`}>
      <div className='card-body d-flex justify-content-between align-items-center'>
        {children}
      </div>
    </div>
  );
}
export default WrapList;
