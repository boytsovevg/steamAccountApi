import app from './app';

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err: Error) => {
    if (err) {
        return console.log(err);
    }

    return console.log('App is running on port: ' + PORT);
});