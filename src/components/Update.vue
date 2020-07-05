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
						update Emp info:{{$route.params.id}}
					</h1>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									id:
								</td>
								<td valign="middle" align="left">
									1
								</td>
							</tr>
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
									<input type="text" class="inputgri" name="salary" v-model="salary"/>
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
                            <a href="Javascript:;"><button @click="get_emp_id()">修改</button></a>
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
        name: "Update",
        data(){
            return {
                emp_id : "",
                emp : {},
                emp_name : "",
                img : "",
                salary : "",
                age : ""
            }
        },
        methods : {
            get_emp_id(){
                let emp_id = this.$route.params.id;
                console.log(this.$refs.img.files[0]);
                let formData = new FormData();
                formData.append("emp_name", this.emp_name);

                formData.append("photo", this.$refs.img.files[0]);
                formData.append("salary", this.salary);
                formData.append("age", this.age);
                console.log(emp_id)
                this.$axios({
                    url : "http://127.0.0.1:8000/user/check_emp/"+`${emp_id}`,
                    method : "patch",
                    data : formData,
                    headers:{
                        'content-type': 'multipart/form-data'
                    }
                }).then(res=>{
                    console.log(res.data["message"])
                    console.log(res.data)
                         alert("修改信息成功！")
                    this.$router.push("/index")


                }).catch(error=>{
                    this.$message.error("修改出错，请重新输入！")
                })
            }
        },
        created() {
            // this.get_emp_id()
        }
    }
</script>

<style scoped>

</style>
