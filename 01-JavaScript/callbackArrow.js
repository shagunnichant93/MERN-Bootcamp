const download = (callback) => {
    console.log("Downloading...");
    callback();
}
download(() => {
    console.log("Download Complete");
});