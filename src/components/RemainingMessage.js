function RemainingMessage({ remaining }) {
  //{ remaining: length }
  //#1
  // let classes = 'alert text-center ';
  // if (remaining) {
  //   //remaining>0
  //   classes += 'alert-danger';
  // } else {
  //   classes += 'alert-success';
  // }
  // #2

  return (
    //#1
    // <div className={classes}>
    //   {/* {remaining > 0 ? `${remaining} Task Remaining` : 'No Task Left'} */}
    //   {/*ถ้า remaining เป็น string ค่าที่ได้จะกลายเป็น false*/}
    //   {remaining ? `${remaining} Task Remaining` : 'No Task Left'}
    //   {/*remaining เป็น เลข ซึ่งเลขเป็นlength ค่าต้องมากกว่า0อยู่แล้ว สามารถเขียนแบบอันล่างได้เลย เพราะค้าค่ามากกว่า0 จะเ้ท่ากับ true*/}
    // </div>
    // #2
    <div
      className={`alert alert-${remaining ? 'danger' : 'success'} text-center`}>
      {remaining ? `${remaining} Task Remaining` : 'No Task Left'}
    </div>
  );
}
export default RemainingMessage;
