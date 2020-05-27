export default {
    path:"/clock",
    name:'clock',
    component:()=>import("@/views/clock/index.vue"),
    meta:{
        tabbarFlag:true
    }
}
