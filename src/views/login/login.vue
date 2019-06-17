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
            <el-button type="primary" @click="handleClick">test</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { Vue, Component, Watch} from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
interface FormObject {
  username: string;
  password: string;
}
// const someModule = namespace('chat');

// const namespace: string = 'chat';
@Component
export default class Login extends Vue {
  @State('version') public version;
 // @State((state) => state.chat) public chat: any;
  @Getter('user1') public user1;
  @Getter('food') public food;
  @Action('login') public login;
  private ruleForm: FormObject = {
     username: '',
     password: '',
  };
  // @someModule.Getter('getUser') getUser
  public mounted() {
   // console.log(this.user1,this.food,1);
  }
  public submitForm(): void {
   // console.log(this.user1,this.food,2);
    if (!this.ruleForm.username) {
      this.$message.error('请输入用户名');
      return;
    } else if (!this.ruleForm.password) {
      this.$message.error('请输入密码');
      return;
    }
    // this.$store.dispatch('login',this.ruleForm) // this.store.dispath('login');
  }
  public handleClick(): void {
    this.login('hahah');
  }

  @Watch('user1')
    public changeVal(newVal: string, oldVal: string): void {
     // console.log('login发生改变');
    }
}
</script>

<style scoped>

</style>
