Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'henry',
    lists:[
      { 'id': '1', 'title': 'test','image': '/images/1.jpg','author': 'henry'},
      { 'id': '2', 'title': 'test1', 'image': '/images/2.jpg', 'author': 'henry1' },
      { 'id': '3', 'title': 'test2', 'image': '/images/3.jpg', 'author': 'henry3' },
      { 'id': '4', 'title': 'test3', 'image': '/images/4.jpg', 'author': 'henry4' },
      { 'id': '5', 'title': 'test4', 'image': '/images/1.jpg', 'author': 'henry5' },
      { 'id': '6', 'title': 'test5', 'image': '/images/2.jpg', 'author': 'henry1' },
    ]
  },
  upper: function (e) {
    console.log('init upper');
  },
  lower: function(e){
    console.log('lower init')
  },
  scroll: function(e){
    console.log('scroll init')
  },
  toView: function(e){
    console.log('toView init');
  },
  scrollTop: function(e){
    console.log('scrollTop init');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  changeName: function(e){
    this.setData({
      name: 'henry111'
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})