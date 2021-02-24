import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () => {
  let theme = 'light-theme'
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme())
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    if(theme === 'light-theme') {
      setTheme('dark-theme')
      setIsDarkMode(true)
    } else {
      setTheme('light-theme')
      setIsDarkMode(false)
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Dark Mode Sample</h1>
          <button className="btn" onClick={toggleTheme}>{isDarkMode ? 'Turn on the light' : 'Turn off the light'}</button>
        </div>
      </nav>
      <section className="articles">
        {data.map((article) => {
          return <Article key={article.id} {...article} />
        })}
      </section>
    </main>
  )
}

export default App