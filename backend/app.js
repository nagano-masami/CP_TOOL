var createError = require('http-errors');
//expressモジュールを読み込む
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var deleteRouter = require('./routes/delete');
var loginRouter = require('./routes/login');
var getHistoriesRouter = require('./routes/getHistories');
//expressモジュールをインスタンス化
//appという変数名にするのが慣例
var app = express();

// view engine setup
//このexpressインスタンス全体の設定
app.set('views', path.join(__dirname, 'views'));
//viewsフォルダのテンプレートファイルを使用する際に、拡張子を省略して記述できる
app.set('view engine', 'ejs');

//CORSの有効化
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
 });

 //Pathの指定がない場合、全てのリクエストに対して実行される
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//クライアントにアクセスさせたい静的ファイルが格納されているフォルダ
//_dirname:プロジェクト全体のファイルのリンク
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/delete', deleteRouter);
app.use('/login', loginRouter);
app.use('/getHistories',getHistoriesRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
