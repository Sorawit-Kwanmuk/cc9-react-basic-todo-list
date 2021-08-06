function Container(props) {
  return (
    <div className='container'>
      <div className='mw-576 my-4 mx-auto'>{props.children}</div>
    </div>
  );
}
export default Container;
