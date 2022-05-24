<!-- 
	This is the basic sign up page, it uses the default layout in: 
	"./layouts/Default.vue" .
 -->

<template>
  <div>
    <!-- Sign Up Image And Headings -->
    <div
      class="sign-up-header"
      style="background-image: url('images/bg-signup.jpg')"
    >
      <div class="content">
        <h1 class="mb-5">登录</h1>
        <p class="text-lg">在这里，登入您的知识产权侵权溯源系统。</p>
      </div>
    </div>
    <!-- / Sign Up Image And Headings -->

    <!-- Sign Up Card -->
    <a-card
      :bordered="false"
      style="padding: 32px"
      class="card-signup header-solid"
      :bodyStyle="{ paddingTop: 0 }"
    >
      <!-- <template #title>
				<h5 class="font-semibold text-center">Register With</h5>
			</template>
			<div class="sign-up-gateways">
    			<a-button>
					<img src="images/logos/logos-facebook.svg" alt="">
				</a-button>
    			<a-button>
					<img src="images/logos/logo-apple.svg" alt="">
				</a-button>
    			<a-button>
					<img src="images/logos/Google__G__Logo.svg.png" alt="">
				</a-button>
			</div> -->
      <!-- <div class="divider my-25">
				<hr class="gradient-line">
				<p class="font-semibold text-muted"><span class="label">Or</span></p>
			</div> -->

      <!-- Sign Up Form -->
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <!-- <a-form-item class="mb-10">
					<a-input
						v-decorator="[
						'name',
						{ rules: [{ required: true, message: 'Please input your name!' }] },
						]"
						placeholder="Name"
					>
					</a-input>
				</a-form-item> -->
        <a-form-item class="mb-10">
          <a-input
            v-decorator="[
              'email',
              { rules: [{ required: true, message: '请输入邮箱！' }] },
            ]"
            placeholder="请输入您的邮箱..."
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-5">
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: '请输入密码!' }] },
            ]"
            type="password"
            placeholder="请输入您的密码..."
          >
          </a-input>
        </a-form-item>
        <!-- <a-form-item class="mb-10">
					<a-checkbox
						v-decorator="[
						'remember',
						{
							valuePropName: 'checked',
							initialValue: true,
						},
						]"
					>
						I agree the <a href="#" class="font-bold text-dark">Terms and Conditions</a>
					</a-checkbox>
				</a-form-item> -->
        <a-form-item>
          <a-button
            type="primary"
            block
            html-type="submit"
            class="login-form-button"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
      <!-- / Sign Up Form -->

      <p class="font-semibold text-muted text-center">
        账号密码请联系管理员下发
      </p>
    </a-card>
    <!-- / Sign Up Card -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Sign up form object.
      form: this.$form.createForm(this, { name: "signup_basic" }),
    };
  },
  methods: {
    // Handles input validation after submission.
    openNotificationSuccess(name) {
      this.$notification["success"]({
        message: "登录成功！",
        description: "欢迎您，" + name,
      });
    },

    openNotificationFail() {
      this.$notification["error"]({
        message: "登录失败！",
        description: "请检查邮箱、密码是否正确",
      });
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.axios
            .post(
              "http://localhost:5000/user/login",
              {
                email: values.email,
                password: values.password,
              },
              {
                headers: {
                  "Content-Type": "application/json;charset=utf-8",
                },
                withCredentials: true,
              }
            )
            .then((response) => {
              if (response.data.status == 200) {
                console.log(response);
                // ElMessage.success(response.data.msg);
                this.openNotificationSuccess(values.email);
                localStorage.setItem("ms_username", values.email);
                this.$router.push("/index");
              } else if (response.data.status == 203) {
                // ElMessage.warning(response.data.msg);
				this.openNotificationFail();
                this.$router.push("/login");
              } else if (response.data.status == 202) {
                // ElMessage.error(response.data.msg);
				this.openNotificationFail();
                this.$router.push("/login");
              }
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    },
  },
};
</script>

<style lang="scss">
</style>