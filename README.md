# vue-web-project
VueYu前端框架

# 一.框架知识
## (1) this.$router.push与this.$router.replace的区别
- this.$router.push：这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
- this.$router.replace：跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录

## (2) 清理node_modules命令
- npm install rimraf -g
- rimraf node_modules

## (3) document.querySelector用法 获取标签对象并修改样式
document.querySelector("#etble .el-loading-mask").style.fontSize = "30px";


