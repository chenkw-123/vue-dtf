<template>
<body>
		<div id="wrap">
			<div id="top_content">
					<div id="header">
						<div id="rightheader">
							<p>
								2009/11/20
								<br />
							</p>
						</div>
						<div id="topheader">
							<h1 id="title">
								<a href="#">Main</a>
							</h1>
						</div>
						<div id="navigation">
						</div>
					</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						add Emp info:
					</h1>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									name:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="emp_name" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									photo:
								</td>
								<td valign="middle" align="left">
									<input type="file" name="photo" ref="img"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									salary:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="salary" v-model="salary" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									age:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="age" v-model="age"/>
								</td>
							</tr>
						</table>
						<p>
							<input type="submit" class="button" value="添加" @click="addemp" />
						</p>
				</div>
			</div>
			<div id="footer">
				<div id="footer_bg">
					ABC@126.com
				</div>
			</div>
		</div>
	</body>
</template>

<script>
    export default {
        name: "Addemp",
        data(){
            return{
                  emp_name : "",
                  img : "",
                  salary : "",
                  age : ""
            }

        },
        methods : {
            //添加员工点击事件
            addemp(){
                //获取文件信息
                console.log(this.$refs.img.files[0]);

                // let picture = this.$refs.img.files[0]
                //axios上传文件需要使用formData方式来进行上传,必须是post方式
                let formData = new FormData();
                formData.append("emp_name", this.emp_name);
                formData.append("img", this.$refs.img.files[0]);
                formData.append("salary", this.salary);
                formData.append("age", this.age);

                this.$axios({
                    url : "http://127.0.0.1:8000/user/check_emp/",
                    method : "post",
                    data : formData,
                    headers:{
                        'content-type': 'multipart/form-data'
                    }
                }).then(res=>{
                    console.log(res.data)
                    this.$router.push("/index")
                }).catch(error=>{
                    this.$message.error("添加失败！")
                })
            }
        }
    }
</script>

<style scoped>

</style>
