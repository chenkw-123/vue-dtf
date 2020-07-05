<template>
    <div id="wrap">
			<div id="top_content">
				<div id="header">
					<div id="rightheader">
						<p>
							2009/11/20
							<br />
                            <a href="Javascript:;" @click="quit()">安全退出</a>
						</p>
					</div>
					<div id="topheader">
						<h1 id="title">
							<a href="#">main</a>
						</h1>
					</div>
					<div id="navigation">
					</div>
				</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
                        Welcome!{{user_message}}，访问系统
					</h1>
					<table class="table">
						<tr class="table_header">
							<td>ID</td>
							<td>Name</td>
							<td>Photo</td>
							<td>Salary</td>
							<td>Age</td>
							<td>Operation</td>
						</tr>
						<tr class="row1" v-for="(emp,index) in emp_list" :key="emp.id" :class="index%2==0?'row1':'row2'">
							<td>{{emp.id}}</td>
							<td>{{emp.emp_name}}</td>
							<td><img :src="emp.img" style="height: 60px;"></td>
							<td>{{emp.salary}}</td>
							<td>{{emp.check_age}}</td>
							<td>
                                <a href="Javascript:;" @click="del(index,emp.id)">删除员工</a>&nbsp;

<!--                                <a href="Javascript:;" @click="update_emp(emp.id)">修改员工</a>-->
                                <router-link :to="'/update/'+emp.id">修改员工</router-link>
                            </td>

						</tr>
					</table>
					<p>
<!--						<input type="button" class="button" value="添加员工"/>-->
					        <el-button type=""><router-link to="/add">添加员工</router-link></el-button>
                    </p>
				</div>
			</div>
			<div id="footer">
				<div id="footer_bg">
				ABC@126.com
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return{
                user_message: "",
                emp_list : [],
                emp_id : "",
            }
        },
        methods : {
            allemp(){
                this.$axios.get("http://127.0.0.1:8000/user/check_emp/").then(res=>{
                    console.log(res.data.results)
                    this.emp_list = res.data.results
                }).catch(error=>{
                    this.$message.error("查询员工信息出错！")
                })
            },
            del(i,id){
                // alert(id)
                // let emp_id = this.$route.params.id;
                // console.log(emp_id)
                this.$axios({
                    url : "http://127.0.0.1:8000/user/check_emp/"+`${id}`,
                    method : "delete",
                }).then(res=>{
                    alert('删除成功!')
                    this.emp_list.splice(i,1)
                }).catch(error=>{
                    this.$message.error("删除失败！")
                })
            },
            quit(){
                //跳转至登录界面，并把session清空
                console.log(1)
                sessionStorage.removeItem("user")
                this.$router.push("/login")
            }
        },
        created() {

            let username = sessionStorage.getItem("user")
            this.user_message = username
            if (username){
            }
            else{
                this.$message.error("账号还未登录，请登录")
                this.$router.push("/login")
            }

            this.allemp();

        }
    }
</script>

<style scoped>

</style>
