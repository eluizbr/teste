module.exports = {
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    public: "0.0.0.0:8080",
    disableHostCheck: true,
    hot: true
  }
};
