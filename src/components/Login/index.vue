<template>
  <div class="wrap">
    <div class="login-box">
      <div class="login-header merchant-header">
        <div class="content">
          <h1>
            <span>内部人脸管理端</span>
          </h1>
          <div class="f-right">

          </div>
        </div>
      </div>
      <div class="login-wrap">
        <div class="logo"></div>
        <div class="content">
          <div class="f-left"></div>
          <div class="f-right login-box-1">
            <form class="login-form">
              <dl>
                <dt class="f-left">
                  <p class="pc-css">用户登录</p>
                </dt>
                <dd class="clear-left">
                  <ul>
                    <li class="common user">
                      <input
                        class="input-txt merchant-user opts-rule"
                        maxlength="16"
                        name="username"
                        placeholder="输入账号"
                        autocomplete="off"
                        type="text" v-model="account"
                      >
                    </li>
                    <li class="common password">
                      <input
                        class="input-txt merchant-pass opts-rule"
                        maxlength="40"
                        name="password"
                        placeholder="输入密码"
                        autocomplete="off"
                        type="password" v-model="passWord"
                      >
                    </li>
                    <li class="common">
                      <button @click="login" class="btn-blue submit" id="loginBtn" type="submit">登录</button>
                    </li>
                    <li class="clear-fix tab"></li>
                    <li class="tips merchant-tips"></li>
                  </ul>
                </dd>
              </dl>
            </form>
          </div>
          <div class="f-right un-dis internal-submit"></div>
        </div>
      </div>
      <div class="login-footer">
        <div class="content">
          <div class="f-left">
            <p class="copy">
              <span class="small-screen">COPYRIGHT © 2019 </span>
              <span>佳兆业集团有限公司</span>
              <span class="small-screen">
                ALL RIGHTS RESERVED.
                <a
                  class="small-screen"
                  href="http://www.miitbeian.gov.cn"
                  rel="nofollow"
                  target="_blank"
                >粤ICP备14063821号-1</a>
              </span>
            </p>
          </div>
          <div class="f-right">
          </div>
        </div>
      </div>
    </div>
    <div class="psw-wrap"></div>
  </div>
</template>
<style scoped>
  div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h6, pre, code, form, fieldset, legend, input, button, textarea, p, th, td, input {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img, object, a img, :link img, :visited img, a object, :link object, :visited object {
    border: 0;
  }

  form {
    display: inline;
  }

  /*清除浮动*/
  .clear-fix, .login-header .content, .login-wrap .content, .login-footer .content, .login-wzp-header .content, .login-wzp-wrap .content {
    *zoom: 1;
  }

  .clear-fix:after, .login-header .content:after, .login-wrap .content:after, .login-footer .content:after, .login-wzp-header .content:after, .login-wzp-wrap .content:after {
    content: '\0020';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .input-txt, .input-l, .input-s {
    padding-left: 9px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #e0e0e0;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }

  .f-left {
    display: inline;
    float: left;
  }

  .f-right {
    display: inline;
    float: right;
  }

  .un-dis {
    display: none;
  }

  .psw-wrap {
    max-width: 1100px;
    margin: 0 auto;
  }

  .btn-blue {
    line-height: 28px;
    background: #0e8cff;
    border: 1px solid #0e8cff;
    color: #fff;
    padding: 0 10px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-transition: all 0.1s ease;
    -moz-transition: all 0.1s ease;
    -ms-transition: all 0.1s ease;
    -o-transition: all 0.1s ease;
    transition: all 0.1s ease;
  }

  .btn-blue:hover {
    background: #0072da;
  }

  .btn-blue:active {
    background: #0e8cff;
    -webkit-box-shadow: inset 0 4px 4px #0057a7;
    -moz-box-shadow: inset 0 4px 4px #0057a7;
    box-shadow: inset 0 4px 4px #0057a7;
  }

  .merchant-header {
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
  }

  .login-header {
    z-index: 99997;
  }

  .login-header .content {
    width: 1100px;
    margin: 0 auto;
  }

  .login-header .content h1 {
    font-size: 16px;
    height: 90px;
    line-height: 90px;
    display: inline;
    float: left;
    width: 400px;
    background: url(../../assets/images/login_logo.png) left center no-repeat;
    background-size: 180px 70px;
    padding: 0 0 0 190px;
  }
  .login-header .content h1 span {
    color: #e29159;
  }

  .login-header .content h1 a {
    color: #e29159;
  }

  .login-header .content .f-right {
    display: inline;
    float: right;
    line-height: 70px;
    font-size: 16px;
    color: #222;
  }

  .login-header .content .f-right .blue {
    color: #0e8cff;
  }

  .login-wrap {
    background: #0e8cff url(../../assets/images/login_bg.png) center bottom no-repeat;
    height: 100%;
  }

  .login-wrap .content .logo {
    display: none;
  }

  .login-wrap .content {
    background: url(../../assets/images/login_title.png) 0 70px no-repeat;
    width: 1100px;
    margin: 0 auto;
    padding: 70px 0;
  }

  .login-wrap .f-right {
    background: #fff;
  }

  .login-wrap .f-right dl {
    padding: 30px;
  }

  .login-wrap .f-right dt, .login-wrap .f-right h2 {
    font-size: 20px;
    color: #888;
    padding: 0 0 30px 0;
    font-weight: 200;
  }
  .login-wrap .f-right .pc-css {
    display: block;
  }

  .login-wrap .f-right li {
    margin: 0 0 20px 0;
  }

  .login-wrap .f-right li.tips {
    margin: 20px 0 0 0;
    color: #ff0000;
  }

  .login-wrap .f-right li.tab {
    margin: 0;
  }

  .login-wrap .f-right li.tab a {
    color: #0e8cff;
  }

  .login-wrap .f-right .common {
    width: 300px;
    height: 60px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .login-wrap .f-right .user, .login-wrap .f-right .password, .login-wrap .f-right .operate {
    border: 1px solid #e5e5e5;
    padding: 0 0 0 50px;
  }

  .login-wrap .f-right .user:hover, .login-wrap .f-right .password:hover, .login-wrap .f-right .operate:hover {
    box-shadow: 0 0 4px 0 rgba(89, 117, 225, 0.5);
    border: solid 1px #0e8cff;
  }

  .login-wrap .f-right .user .input-txt, .login-wrap .f-right .password .input-txt, .login-wrap .f-right .operate .input-txt {
    width: 100%;
    padding: 12px 0;
    height: auto;
    border: none;
    font-size: 16px;
  }

  .login-wrap .f-right .user input:focus, .login-wrap .f-right .password input:focus, .login-wrap .f-right .operate input:focus {
    outline: none;
    outline-offset: 0;
    box-shadow: none;
  }

  .login-wrap .f-right .user {
    background: url(../../assets/images/login_user.png) 15px center no-repeat;
  }

  .login-wrap .f-right .password {
    background: url(../../assets/images/login_pwd.png) 15px center no-repeat;
  }

  .login-wrap .f-right .operate {
    background: url(../../assets/images/login_operate.png) 15px center no-repeat;
  }

  .login-wrap .f-right .submit {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
  }

  .login-footer {
    background: #fff;
    color: #888;
  }

  .login-footer a {
    color: #888;
  }

  .login-footer .content {
    width: 1100px;
    margin: 0 auto;
    padding: 50px 0;
  }

  .login-footer .f-left {
    line-height: 28px;
  }

  .login-footer .f-left a {
    padding: 0 5px;
  }

  .login-footer .f-left span {
    padding: 0 10px 0 0;
  }

  .login-footer .f-right {
    background: url(../../assets/images/phone.png) left center no-repeat;
    padding: 0 0 0 50px;
  }

  .login-footer .f-right span {
    font-size: 22px;
    color: #ccc;
  }

  .login-footer .f-right i {
    color: #bec2c8;
    font-size: 14px;
  }

  .internal-submit {
    width: 300px;
    padding: 30px;
    min-height: 415px;
  }

  .btn-blue {
    line-height: 28px;
    background: #0e8cff;
    border: 1px solid #0e8cff;
    color: #fff;
    padding: 0 10px;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    border-radius: 1px;
    -webkit-transition: all 0.1s ease;
    -moz-transition: all 0.1s ease;
    -ms-transition: all 0.1s ease;
    -o-transition: all 0.1s ease;
    transition: all 0.1s ease;
  }

  .btn-blue:hover {
    background: #0072da;
  }

  .btn-blue:active {
    background: #0e8cff;
    -webkit-box-shadow: inset 0 4px 4px #0057a7;
    -moz-box-shadow: inset 0 4px 4px #0057a7;
    box-shadow: inset 0 4px 4px #0057a7;
  }

  .internal-submit {
    width: 300px;
    padding: 30px;
    min-height: 415px;
  }

  .psw .content {
    text-align: center;
  }

  .psw .content h2 {
    font-size: 20px;
    line-height: 88px;
    font-weight: 500;
    border-bottom: 1px solid #f0f0f0;
  }

  .psw .content ul {
    display: inline-block;
    padding-top: 40px;
  }

  .psw .content ul li {
    width: 160px;
    line-height: 48px;
    position: relative;
  }

  .psw .content ul li:after {
    position: absolute;
    bottom: 0;
    content: "";
    display: block;
    width: 160px;
    height: 1px;
    background: #f0f0f0;
    z-index: 1;
  }

  .psw .content ul li:before {
    content: "";
    display: block;
    position: absolute;
    bottom: -4px;
    left: 75px;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: #f0f0f0;
    border: 2px solid #fff;
    z-index: 2;
  }

  .psw .content .psw-edit.psw-edit-error p span {
    text-align: center;
    font-size: 18px;
  }

  .psw .content .psw-edit p {
    width: 322px;
    margin: 0 auto;
    padding-bottom: 20px;
    position: relative;
  }

  .psw .content .psw-edit p input {
    width: 100%;
    line-height: 42px;
    height: 42px;
  }

  .psw .content .psw-edit p .btn-blue, .psw .content .psw-edit p a {
    display: inline-block;
    width: 100%;
    border-radius: 1px;
    line-height: 42px;
    font-size: 20px;
  }

  .psw .content .psw-edit p .btn-blue:hover, .psw .content .psw-edit p a:hover {
    text-decoration: none;
  }

  .psw .content .psw-edit p span {
    text-align: left;
    display: block;
    width: 100%;
    margin: 0 auto;
    line-height: 28px;
  }

  .psw .content .psw-edit p span.tips {
    color: #ff0000;
  }

  .clear-left {
    clear: left;
  }
  @media screen and (max-width: 1200px){
    .login-wrap .content {
      width: 100%;
      padding: 70px 10px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background: url(../../assets/images/login_title.png) 10px 70px no-repeat;
    }
    .login-header .content, .login-footer .content {
      width: 100%;
      padding: 10px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 940px){
    .login-footer .f-left, .login-footer .f-right {
      float: none;
      display: block;
      padding: 0;
    }
    .login-footer .f-right {
      background: none;
    }
    .login-footer {
      text-align: center;
    }
  }

  @media screen and (max-width: 760px) {
    body{
      background: #f4f4f4;
      overflow-y: auto;
    }
    .login-box{
      overflow: hidden;
    }
    .login-header .content, .login-footer .content {
      width: 100%;
      padding: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    .login-footer{
      display: none;
    }
    .login-wrap{
      background: none;
    }

    .login-wrap .content {
      width: 100%;
      background: none;
      padding:10px 0;
    }
    .login-header .content h1 {
      font-size: 18px;
      padding: 22px 0 0;
      line-height: 44px;
      background: none;
      height: auto;
      width: 100%;
      text-align: center;
    }

    .login-header .content h1 span {
      display: inline-block;
    }

    .login-header .content h1 a {
      display: none;
    }

    .login-header .content .f-right {
      display: none;
      float: right;
      line-height: 70px;
      font-size: 16px;
      color: #222;
    }
    .logo {
      height: 160px;
    }
    .login-wrap .login-box-1 {
      margin: 0 20px;
      background: none;
      float: none;
      display: block;
    }
    .login-wrap .f-right dl {
      padding: 5px 30px 1px 30px;
      background: #fff;
    }
    .login-wrap .f-right .common {
      width: auto;
      height: 60px;
    }
    .login-wrap .f-right .pc-css {
      display: none;
    }
  }
  .wrap{
    background-color: #ffffff;
  }
</style>
<script>
import request from '../../util/request'
export default {
  data(){
    return {
      account: '',
      passWord: ''
    }
  },
  methods: {
    login(e) {
      e.preventDefault();
      if(!this.account){
        this.$message.error('还未输入帐号')
        return
      }
      if(!this.passWord){
        this.$message.error('还未输入密码')
        return
      }
      request.post({
        url: '/internal-api/loginAuth/form',
        data: {
          userName: this.account,
          passWord: this.passWord
        }
      }).then(res => {
        if(res.code === '0'){
          localStorage.setItem('userName',this.account)
          this.$router.push('/device')
        }
        else{
          this.$message.error(res.msg)
        }
      })
    }
  }
};
</script>
