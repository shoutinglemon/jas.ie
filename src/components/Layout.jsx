function Layout({ children }) {
  return (
    <div className="site-shell">
      <div className="site-container">
        <main className="site-main">{children}</main>
      </div>
    </div>
  )
}

export default Layout
