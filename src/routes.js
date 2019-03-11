import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Userlist from './views/nav1/userlist.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Technology from './views/nav2/technology.vue'
import Demand from './views/nav2/demand.vue'
import Export from './views/nav2/export.vue'
import Company from './views/nav2/company.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import Orderlist from './views/nav3/orderlist.vue'
import ExportCount from './views/nav4/exportCount.vue'
import TechCount from './views/nav4/techCount.vue'
import Informlist from './views/nav5/informlist.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '系统设置',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页' },
            { path: '/userlist', component: Userlist, name: '用户管理' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '信息管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/technology', component: Technology, name: '科研成果管理' },
            { path: '/demand', component: Demand, name: '技术需求管理' },
            { path: '/export', component: Export, name: '科研人员管理' },
            { path: '/company', component: Company, name: '企业信息管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '订单管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/orderlist', component: Orderlist, name: '订单列表' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '数据分析',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/exportCount', component: ExportCount, name: '专家统计' },
            { path: '/techCount', component: TechCount, name: '科研成果统计' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '动态管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/informlist', component: Informlist, name: '动态列表' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;