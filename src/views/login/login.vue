<template>
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="密码" prop="pass">
            <el-input v-model="ruleForm.username" ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.password" ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
interface FormObject {
  username: string;
  password: string;
}
const someModule = namespace('chat');
// const namespace: string = 'chat'
@Component
export default class Login extends Vue {
  @State('version') public version;
  @State((state) => state.chat) public chat: any;
  @Getter('user1') public user1;
  private ruleForm: FormObject = {
     username: '',
     password: '',
  };
  // @someModule.Getter('getUser') getUser
  public mouted() {
    // this.isShow('2222')
  }
  public submitForm(): void {
    // console.log(this.ruleForm, this.user1, this.chat.version);
    if (!this.ruleForm.username) {
      this.$message.error('请输入用户名');
      return;
    } else if (!this.ruleForm.password) {
      this.$message.error('请输入密码');
      return;
    }
    // this.$store.dispatch('login',this.ruleForm) // this.store.dispath('login');
  }
}
</script>

<style scoped>

</style>
