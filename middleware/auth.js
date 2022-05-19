export default function ({store, route, app, redirect}) {
  const token = store.getters.getTokenInformartion

  if (route.name?.includes("dashboard-") && !token) {
    redirect('login')
  }
}
