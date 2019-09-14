<template>
 <div>
      <el-card class="companycard" style="height: 180px">
        <img src="../../static/title.png" class="avatar">
        <div class="introduce">
          <p class="title">{{detail.cname}}</p>
          <p>{{detail.cinfo}}</p>
          <p>{{detail.caddress}}<span>|</span>{{detail.cscale}}<span>|</span>{{detail.ctype}}</p>
        </div>
      </el-card>

      <el-card class="companycard">
        <div class="job">招聘信息</div>
        <p v-if="!isShow" class="nojob">暂时没有招聘信息哦</p>
          <div v-if="isShow"  v-for="(item, key) in recruit" :key="key">
            <div class="jobinfo">
              <p class="jobname">{{item.jname}}</p>
              <p><i class="el-icon-location"></i>{{item.jobinfo}}<span>|</span>{{detail.caddress}}<span>|</span>{{detail.cscale}}<span>|</span><span><i class="el-icon-news"></i>聊天</span></p>
            </div>
        </div>
      </el-card>
  </div>
</template>
<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
.companycard .job {
  border-left: 5px solid #888;
  text-align: left;
  padding-left: 0.5rem;
}

.companycard {
  width: 1000px;
  height: 100%;
  margin: 20px auto auto auto;
}
.avatar {
  float: left;
  width: 126px;
  height: 110px;
}
.title {
  font-size: 21px;
}
.introduce {
  margin-left: 140px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.introduce p {
  margin: 5px;
}

p span {
  margin: 14px;
}
.jobinfo {
  width: 950px;
  height: 100px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15px;
}
.jobinfo p {
  margin-top: 20px;
}
.jobname {
  font-size: 18px;
}
.nojob {
  font-size: 18px;
  color: #909399;
}
</style>

<script>
import fetch from '../api/fetch'
export default {
  data () {
    return {
      companyId: localStorage.getItem('companyName'),
      detail: {},
      recruit: [],
      isShow: true
    }
  },
  mounted () {
    this.getCompanyInfo()
  },
  methods: {
    getCompanyInfo () {
      fetch.getCompanyDetail(this.companyId)
        .then(res => {
          if (res.status === 200) {
            if (res.data.code) {
              this.detail = res.data.msg.obj
              this.recruit = res.data.msg.obj1
              if (this.recruit.length === 0) {
                this.isShow = false
              }
            }
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    getJobDetail (id) {
      localStorage.setItem('jobId', id)
      this.$router.push({name: 'jobInfo'})
    }
  },
}
</script>
