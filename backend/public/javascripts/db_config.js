exports.mysql_setting = {
    host: 'localhost',
    user: 'root',
    password: 'masami14',
    database: 'essp_db',
    timezone: 'jst'
};
exports.loginSQL = 'SELECT * from USERS where id=? AND password=?'
exports.insertRecordSQL = 'INSERT INTO chat_histories(history_index,user_id,message,date_time) VALUES(?, ?, ?, ?)';
exports.getHistoriesSQL = 'SELECT * FROM chat_histories';
exports.deleteHistorySQL = 'TRUNCATE TABLE chat_histories';