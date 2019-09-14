// const host = 'http://pf.stalary.com'
const host = ''

export default {
  getCompany (name) {
    return '/companySelByName?name=' + name
  },
  getCompany1 () {
    return '/companySel'
  },
  getJobinfo1 () {
    return '/UserinfoSel'
  },
  addComp () {
    return '/companyAdd'
  },
  userRegister () {
    return host + '/userAdd'
  },
  // 获取全部公司信息
  getComName () {
    return host + '/company/noPage'
  },
  userLogin () {
    return '/userLogin'
  },
  getUserInfo () {
    return '/UserinfoSelByUid'
  },
  sendCode () {
    return host + '/outside/code'
  },
  logout () {
    return host + '/user/logout'
  },
  // 提交简历信息
  sendResume () {
    return '/ResumeAdd'
  },
  // 获取投递列表
  deliveryList () {
    return host + '/user/send'
  },
  // 提交用户信息
  putUserInfo () {
    return '/UserinfoAdd'
  },
  // 修改用户手机号码
  changePhone () {
    return host + '/user/phone'
  },
  // 修改用户密码
  changePass () {
    return host + '/user/password'
  },
  // 修改用户邮箱
  changeEmail () {
    return host + '/user/email'
  },
  // 获取公司详情
  getCompanyDetail (id) {
    return '/companySelByName1?name=' + id
  },
  // 获取简历信息
  getResume () {
    return '/ResumeSelByUid'
  },
  // 获取岗位详细信息
  getJobDetail (id) {
    return host + '/JobSelById?id=' + id
  },
  // 投递简历
  deliveryReusme () {
    return host + '/recruit/resume'
  },
  // 获取站内信
  getMessage () {
    return host + '/message/user/get'
  },
  // 搜索职位信息
  findJob () {
    return host + '/recruit'
  },
  // 已读
  readMessage () {
    return host + '/message/read'
  },
  // hr resumelist
  receiveResume () {
    return host + '/user/receive'
  },
  // hr发布职位信息
  publishJob () {
    return '/JobAdd'
  },
  // 查看hr发布的职位信息
  checkJob () {
    return '/JobSelByUid'
  },
  deletejob (id) {
    return '/JobDel?id=' + id
  },
  hrRegister () {
    return '/customerAdd'
  },
  // 推荐候选人
  recommendCandidate () {
    return host + '/recruit/recommend/candidate'
  },
  // 推荐职位
  recommendJob () {
    return host + '/recruit/recommend/job'
  },
  // 获取感兴趣的工作
  getRecommandJob () {
    return host + '/recruit/name'
  }
}
