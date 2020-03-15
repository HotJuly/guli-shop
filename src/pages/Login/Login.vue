<template>
    <div id="login-box">
		<!--loginArea-->
		<div class="loginArea">
			<div class="py-container login">
				<div class="loginform">
					<ul class="sui-nav nav-tabs tab-wraped">
						<li id="tabOtherLogin" onclick="switchOtherLogin()">
							<a href="javascript:void(0)" data-toggle="tab" >
								<h3>扫描登录</h3>
							</a>
						</li>
						<li id="tabSuiForm" class="active" onclick="switchSuiForm()">
							<a href="javascript:void(0)" data-toggle="tab" >
								<h3>账户登录</h3>
							</a>
						</li>
					</ul>
					<div class="tab-content tab-wraped">
						<div id="index" class="tab-pane ">
							<p>二维码登录，暂为官网二维码</p>
							<img src="./img/wx_cz.jpg" />
						</div>
						<div id="profile" class="tab-pane active">
							<form class="sui-form">
								<div class="input-prepend"><span class="add-on loginname"></span>
									<input id="inputName" type="text" v-model="loginName" placeholder="邮箱/用户名/手机号" class="span2 input-xfat">
								</div>
								<div class="input-prepend"><span class="add-on loginpwd"></span>
									<input id="inputPassword" type="password" v-model="passwd" placeholder="请输入密码" class="span2 input-xfat">
								</div>
								<div class="setting">
									<label class="checkbox inline">
										<input name="m1" type="checkbox" value="2" checked="">
										自动登录
									</label>
									<span class="forget">忘记密码？</span>
								</div>
								<div class="logined" @click="userLogin">
									<a class="sui-btn btn-block btn-xlarge btn-danger" href="javascript:;">登&nbsp;&nbsp;录</a>
								</div>
							</form>
							<div class="otherlogin">
								<div class="types">
									<ul>
										<li><img src="./img/qq.png" width="35px" height="35px" /></li>
										<li><img src="./img/sina.png" /></li>
										<li><img src="./img/ali.png" /></li>
										<li><img src="./img/weixin.png" /></li>
									</ul>
								</div>
								<span class="register"><a href="register.html" target="_blank">立即注册</a></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--foot-->
		<div class="py-container copyright">
			<ul>
				<li>关于我们</li>
				<li>联系我们</li>
				<li>联系客服</li>
				<li>商家入驻</li>
				<li>营销中心</li>
				<li>手机尚品汇</li>
				<li>销售联盟</li>
				<li>尚品汇社区</li>
			</ul>
			<div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
			<div class="beian">京ICP备19006430号
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name:"Login",
    data(){
      return {
        loginName:"",
        passwd:""
      }
    },
    methods:{
      userLogin(){
        const {loginName,passwd,callback}=this;
        this.$store.dispatch('toLogin',{loginName,passwd,callback});
      },
      callback(){
        this.$router.go(-1);
      }
    }
}
</script>

<style scoped>
.btn-danger:active,
.btn-danger.active,
.btn-danger:hover,
.btn-danger:focus {
  background-color: #e1251b;
  border: 1px solid #e1251b;
}
a {
  color: #666;
}
.logoArea {
  height: 84px;
}
.loginArea {
  height: 487px;
  background-color: #e93854;
}
.copyright {
  text-align: center;
  line-height: 24px;
}
.copyright ul li {
  list-style-type: none;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  border-right: 1px solid #e4e4e4;
  padding: 0 20px;
  margin: 15px 0;
}
.copyright ul li:last-child {
  border-right: 0;
}
.logo {
  background: url("./img/icons.png") no-repeat;
  width: 182px;
  height: 78px;
  position: absolute;
  background-position: -367px 4px;
}
.login {
  background: url("./img/loginbg.png") no-repeat;
  height: 487px;
}
.loginform {
  width: 380px;
  background: #fff;
  float: right;
  top: 45px;
  position: relative;
  padding: 20px;
}
img {
  display: block;
  margin: 0 auto;
}
.sui-form {
  margin-top: 15px;
}
.sui-form .input-prepend {
  margin-bottom: 16px;
}
.sui-form .input-prepend .add-on {
  padding: 6px 5px;
  background-color: #cfcdcd;
  width: 25px;
  *float: left;
}
.sui-form input.span2 {
  width: 284px;
  *float: left;
}
span.loginname {
  background-image: url("./img/icons.png");
  background-position: -10px -201px;
}
.sui-nav.nav-tabs.tab-wraped > li {
  width: 50%;
}
.sui-nav.nav-tabs.tab-wraped > li.active > a {
  padding-top: 0;
  border-top: 1px solid #28a3ef;
}
.sui-nav.nav-tabs.tab-wraped > li.active h3 {
  color: #e1251b;
}
.sui-nav.nav-tabs.tab-wraped > li > a {
  padding: 0;
}
.loginpwd {
  background-image: url("./img/icons.png");
  background-position: -72px -201px;
  display: block;
  width: 25px;
  height: 23px;
}
.setting {
  position: relative;
  margin: 0 0 25px;
}
.setting .forget {
  position: absolute;
  right: 0;
}
.logined .btn-danger {
  background-color: #e1251b;
  padding: 6px;
  border-radius: 0;
  font-size: 16px;
  font-family: "微软雅黑";
  word-spacing: 4px;
  border: 1px solid #e1251b;
}
.otherlogin {
  position: relative;
  margin-top: 30px;
}
.otherlogin .register {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 15px;
}
.types ul li {
  list-style-type: none;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  width: 40px;
  height: 55px;
}
#index {
  height: 260px;
}

</style>