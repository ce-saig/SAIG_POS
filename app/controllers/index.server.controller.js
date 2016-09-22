exports.first = function (req,res) {
  res.send('hello world');
}
exports.datainit = function (req,res) {
  /*connection.getConnection(function (err,tempCon) {
    if (err) {
      tempCon.release();
      console.log('error');
    }else{
      console.log('connected');
      tempCon.query("SELECT * FROM sampleTable",function (err,rows,fields) {
        tempCon.release();
        if (err) {
          console.log('error in the query');
        }else{
          res.json(rows);
        }
      });
    }
  });*/
}
