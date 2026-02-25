import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import heroImage from './assets/hero-banner.jpg'
import teamImage from './assets/team-photo.jpg'
import logoImage from './assets/vpv-logo.png'
import patrolImage from './assets/patrol-service.jpg'
import emergencyImage from './assets/emergency-response.jpg'
import newsImage from './assets/news-1.jpg'
import creatorImage from './assets/daniel-amisi-awazi.jpg'

const storageKey = 'vpv_posts'
const themeKey = 'vpv_theme'
const adminSessionKey = 'vpv_admin_session'
const ADMIN_USERNAME = 'vpvadmin'
const ADMIN_PASSWORD = 'UCBC2026'

const starterPosts = [
  {
    id: 'a1',
    type: 'activite',
    title: 'Patrouille de sensibilisation sur le campus',
    date: '2026-02-20',
    image: patrolImage,
    content:
      'L equipe VPV a organise une ronde de prevention et de sensibilisation a la protection des etudiants.'
  },
  {
    id: 'a2',
    type: 'article',
    title: 'Pourquoi VPV existe a l UCBC',
    date: '2026-02-15',
    image: newsImage,
    content:
      'VPV veut servir la communaute universitaire avec discipline, service volontaire et culture de protection.'
  }
]

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem(themeKey) || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(themeKey, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicSite theme={theme} onToggleTheme={toggleTheme} />} />
        <Route path="/a-propos" element={<AboutCreator theme={theme} onToggleTheme={toggleTheme} />} />
        <Route
          path="/admin"
          element={<AdminDashboard theme={theme} onToggleTheme={toggleTheme} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

function PublicSite({ theme, onToggleTheme }) {
  const [posts, setPosts] = useState(starterPosts)

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      try {
        setPosts(JSON.parse(saved))
      } catch {
        setPosts(starterPosts)
      }
    }
  }, [])

  const sortedPosts = useMemo(
    () =>
      [...posts].sort((a, b) => {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
      }),
    [posts]
  )

  return (
    <div className="site-shell">
      <header className="main-header">
        <div className="brand">
          <img src={logoImage} alt="Logo VPV" />
          <div>
            <p className="brand-kicker">UCBC - Brigade Etudiante</p>
            <h1>VPV | Value Protection Volunteers</h1>
          </div>
        </div>
        <nav>
          <Link to="/a-propos">A propos</Link>
          <a href="#activites">Activites</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={onToggleTheme} type="button">
            {theme === 'light' ? 'Mode sombre' : 'Mode clair'}
          </button>
          <Link className="admin-link" to="/admin">
            Dashboard Admin
          </Link>
        </nav>
      </header>

      <section className="hero">
        <img src={heroImage} alt="Equipe VPV en intervention" />
        <div className="hero-content">
          <p className="badge">Structure VPV - UCBC</p>
          <h2>Protection, discipline et service volontaire sur le campus</h2>
          <p>
            Ce site presente VPV et nos actions. Nous publions ici nos activites,
            nos annonces et les articles de la brigade.
          </p>
          <a href="#activites">Voir les publications</a>
        </div>
      </section>

      <section id="apropos" className="about">
        <div>
          <h3>Qui sommes-nous</h3>
          <p>
            VPV est une brigade des etudiants de l Universite Chretienne
            Bilingue du Congo. Notre mission est d aider a la protection et au
            bon ordre dans un esprit de responsabilite.
          </p>
        </div>
        <img src={teamImage} alt="Membres VPV" />
      </section>

      <section id="activites" className="posts">
        <div className="section-title">
          <h3>Activites et Articles</h3>
          <p>Publies depuis le dashboard admin</p>
        </div>
        <div className="post-grid">
          {sortedPosts.map((post) => (
            <article key={post.id} className="post-card">
              <img src={post.image || emergencyImage} alt={post.title} />
              <div>
                <span>{post.type}</span>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <time>{post.date}</time>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h3>Contact VPV</h3>
        <p>Universite Chretienne Bilingue du Congo (UCBC)</p>
        <p>Pour la presentation officielle des grades et responsables, mise a jour prochaine.</p>
      </section>
    </div>
  )
}

function AboutCreator({ theme, onToggleTheme }) {
  return (
    <div className="site-shell">
      <header className="main-header">
        <div className="brand">
          <img src={logoImage} alt="Logo VPV" />
          <div>
            <p className="brand-kicker">UCBC - VPV</p>
            <h1>A propos du concepteur</h1>
          </div>
        </div>
        <nav>
          <button className="theme-toggle" onClick={onToggleTheme} type="button">
            {theme === 'light' ? 'Mode sombre' : 'Mode clair'}
          </button>
          <Link to="/">Accueil</Link>
          <Link className="admin-link" to="/admin">
            Dashboard Admin
          </Link>
        </nav>
      </header>

      <section className="about-creator">
        <div className="creator-hero">
          <img src={creatorImage} alt="Daniel Amisi Awazi" />
          <div>
            <h2>Concepteur du projet VPV</h2>
            <p>
              Ce site a ete concu par <strong>Daniel Amisi Awazi</strong>, etudiant a l
              Universite Chretienne Bilingue du Congo (UCBC).
            </p>
          </div>
        </div>
        <div className="creator-grid">
          <article>
            <h3>Nom complet</h3>
            <p>Daniel Amisi Awazi</p>
          </article>
          <article>
            <h3>Statut</h3>
            <p>Etudiant - Universite Chretienne Bilingue du Congo</p>
          </article>
          <article>
            <h3>Email</h3>
            <p>
              <a href="mailto:danielamisi774@gmail.com">danielamisi774@gmail.com</a>
            </p>
          </article>
          <article>
            <h3>Numero</h3>
            <p>
              <a href="tel:+243859886065">+243 859 886 065</a>
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

function AdminDashboard({ theme, onToggleTheme }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem(adminSessionKey) === 'true'
  )
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [loginError, setLoginError] = useState('')
  const [posts, setPosts] = useState(starterPosts)
  const [form, setForm] = useState({
    type: 'activite',
    title: '',
    date: '',
    image: emergencyImage,
    content: ''
  })

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      try {
        setPosts(JSON.parse(saved))
      } catch {
        setPosts(starterPosts)
      }
    }
  }, [])

  function updateCredential(event) {
    const { name, value } = event.target
    setCredentials((current) => ({ ...current, [name]: value }))
  }

  function loginAdmin(event) {
    event.preventDefault()
    if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem(adminSessionKey, 'true')
      setLoginError('')
      return
    }
    setLoginError('Nom utilisateur ou mot de passe incorrect.')
  }

  function logoutAdmin() {
    setIsAuthenticated(false)
    localStorage.removeItem(adminSessionKey)
  }

  function updateField(event) {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
  }

  function handleImageUpload(event) {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const imageData = typeof reader.result === 'string' ? reader.result : emergencyImage
      setForm((current) => ({ ...current, image: imageData }))
    }
    reader.readAsDataURL(file)
  }

  function savePost(event) {
    event.preventDefault()
    if (!form.title.trim() || !form.date || !form.content.trim()) return

    const newPost = {
      id: crypto.randomUUID(),
      type: form.type,
      title: form.title.trim(),
      date: form.date,
      image: form.image,
      content: form.content.trim()
    }
    const next = [newPost, ...posts]
    setPosts(next)
    localStorage.setItem(storageKey, JSON.stringify(next))
    setForm({
      type: 'activite',
      title: '',
      date: '',
      image: emergencyImage,
      content: ''
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-shell auth-shell">
        <section className="auth-card">
          <h2>Connexion Admin VPV</h2>
          <p>Utilise ton nom utilisateur et mot de passe.</p>
          <form className="auth-form" onSubmit={loginAdmin}>
            <label>
              Nom utilisateur
              <input
                name="username"
                value={credentials.username}
                onChange={updateCredential}
                placeholder="Ex: vpvadmin"
              />
            </label>
            <label>
              Mot de passe
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={updateCredential}
                placeholder="Mot de passe"
              />
            </label>
            {loginError ? <p className="error-text">{loginError}</p> : null}
            <button type="submit">Se connecter</button>
          </form>
          <p className="auth-help">
            Identifiants actuels: <strong>vpvadmin</strong> / <strong>UCBC2026</strong>
          </p>
          <NavLink to="/">Retour au site</NavLink>
        </section>
      </div>
    )
  }

  return (
    <div className="admin-shell">
      <header>
        <h2>Dashboard Admin VPV</h2>
        <nav>
          <button className="theme-toggle" onClick={onToggleTheme} type="button">
            {theme === 'light' ? 'Mode sombre' : 'Mode clair'}
          </button>
          <NavLink to="/">Retour au site</NavLink>
          <button className="logout-btn" onClick={logoutAdmin} type="button">
            Deconnexion
          </button>
        </nav>
      </header>

      <div className="admin-layout">
        <form className="post-form" onSubmit={savePost}>
          <h3>Nouvelle publication</h3>
          <label>
            Type
            <select name="type" value={form.type} onChange={updateField}>
              <option value="activite">Activite</option>
              <option value="article">Article</option>
            </select>
          </label>
          <label>
            Titre
            <input
              name="title"
              value={form.title}
              onChange={updateField}
              placeholder="Ex: Formation de vigilance"
            />
          </label>
          <label>
            Date
            <input type="date" name="date" value={form.date} onChange={updateField} />
          </label>
          <label>
            Image rapide
            <select name="image" value={form.image} onChange={updateField}>
              <option value={emergencyImage}>Emergency</option>
              <option value={patrolImage}>Patrouille</option>
              <option value={teamImage}>Equipe</option>
              <option value={newsImage}>News</option>
            </select>
          </label>
          <label>
            Ou importer une image
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </label>
          <img className="preview-image" src={form.image} alt="Apercu de l image selectionnee" />
          <label>
            Contenu
            <textarea
              name="content"
              value={form.content}
              onChange={updateField}
              placeholder="Decrivez l activite ou l article"
            />
          </label>
          <button type="submit">Publier</button>
        </form>

        <section className="admin-list">
          <h3>Publications enregistrees</h3>
          {posts.map((post) => (
            <article key={post.id} className="admin-post-item">
              <img src={post.image || emergencyImage} alt={post.title} />
              <div>
                <strong>{post.title}</strong>
                <p>{post.type} - {post.date}</p>
                <p>{post.content}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}

export default App
