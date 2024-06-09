export interface MenuItem{
    icon?:string, //导航的图标
    i?:any,
    name:string, //导航的名字
    index: string, //导航的标识
    children?:MenuItem[], //导航的子菜单
}