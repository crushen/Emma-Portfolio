export { default as HeaderBackground } from '../../components/HeaderBackground.vue'
export { default as Page } from '../../components/Page.vue'
export { default as ScrollButton } from '../../components/ScrollButton.vue'
export { default as Sidebar } from '../../components/Sidebar.vue'
export { default as Contact } from '../../components/pages/Contact.vue'
export { default as Home } from '../../components/pages/Home.vue'
export { default as Work } from '../../components/pages/Work.vue'
export { default as DesktopNav } from '../../components/nav/DesktopNav.vue'
export { default as MobileNav } from '../../components/nav/MobileNav.vue'

export const LazyHeaderBackground = import('../../components/HeaderBackground.vue' /* webpackChunkName: "components/HeaderBackground'}" */).then(c => c.default || c)
export const LazyPage = import('../../components/Page.vue' /* webpackChunkName: "components/Page'}" */).then(c => c.default || c)
export const LazyScrollButton = import('../../components/ScrollButton.vue' /* webpackChunkName: "components/ScrollButton'}" */).then(c => c.default || c)
export const LazySidebar = import('../../components/Sidebar.vue' /* webpackChunkName: "components/Sidebar'}" */).then(c => c.default || c)
export const LazyContact = import('../../components/pages/Contact.vue' /* webpackChunkName: "components/pages/Contact'}" */).then(c => c.default || c)
export const LazyHome = import('../../components/pages/Home.vue' /* webpackChunkName: "components/pages/Home'}" */).then(c => c.default || c)
export const LazyWork = import('../../components/pages/Work.vue' /* webpackChunkName: "components/pages/Work'}" */).then(c => c.default || c)
export const LazyDesktopNav = import('../../components/nav/DesktopNav.vue' /* webpackChunkName: "components/nav/DesktopNav'}" */).then(c => c.default || c)
export const LazyMobileNav = import('../../components/nav/MobileNav.vue' /* webpackChunkName: "components/nav/MobileNav'}" */).then(c => c.default || c)
