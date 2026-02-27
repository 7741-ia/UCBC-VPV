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
const albumStorageKey = 'vpv_album'
const likesStorageKey = 'vpv_likes'
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

const starterAlbum = [teamImage, patrolImage, emergencyImage]

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
  const [albumPhotos, setAlbumPhotos] = useState(starterAlbum)
  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('tous')
  const [likes, setLikes] = useState({})

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

  useEffect(() => {
    const savedAlbum = localStorage.getItem(albumStorageKey)
    if (savedAlbum) {
      try {
        setAlbumPhotos(JSON.parse(savedAlbum))
      } catch {
        setAlbumPhotos(starterAlbum)
      }
    }
  }, [])

  useEffect(() => {
    const savedLikes = localStorage.getItem(likesStorageKey)
    if (savedLikes) {
      try {
        setLikes(JSON.parse(savedLikes))
      } catch {
        setLikes({})
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

  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) => {
      const matchesType = typeFilter === 'tous' ? true : post.type === typeFilter
      const text = `${post.title} ${post.content}`.toLowerCase()
      const matchesQuery = text.includes(query.toLowerCase())
      return matchesType && matchesQuery
    })
  }, [sortedPosts, typeFilter, query])

  function getImageObjectPosition(image, fallback = 'center 24%') {
    if (image === heroImage) return 'center 20%'
    if (image === teamImage) return 'center 18%'
    if (image === patrolImage) return 'center 26%'
    if (image === emergencyImage) return 'center 22%'
    if (image === newsImage) return 'center 30%'
    return fallback
  }

  function safeName(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 48)
  }

  function downloadFile(url, filename) {
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  function downloadPostText(post) {
    const content = `Titre: ${post.title}\nType: ${post.type}\nDate: ${post.date}\n\n${post.content}`
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const blobUrl = URL.createObjectURL(blob)
    downloadFile(blobUrl, `${safeName(post.title) || 'publication'}.txt`)
    URL.revokeObjectURL(blobUrl)
  }

  function toggleLike(postId) {
    const nextLikes = {
      ...likes,
      [postId]: likes[postId] ? likes[postId] + 1 : 1
    }
    setLikes(nextLikes)
    localStorage.setItem(likesStorageKey, JSON.stringify(nextLikes))
  }

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
        <img
          src={heroImage}
          alt="Equipe VPV en intervention"
          style={{ objectPosition: getImageObjectPosition(heroImage, 'center 20%') }}
        />
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
        <img
          src={teamImage}
          alt="Membres VPV"
          style={{ objectPosition: getImageObjectPosition(teamImage, 'center 18%') }}
        />
      </section>

      <section id="activites" className="posts">
        <div className="section-title">
          <h3>Activites et Articles</h3>
          <p>Publies depuis le dashboard admin</p>
        </div>
        <div className="post-tools">
          <input
            type="search"
            placeholder="Rechercher une publication..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
            <option value="tous">Tous</option>
            <option value="activite">Activite</option>
            <option value="article">Article</option>
          </select>
        </div>
        <div className="post-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="post-card">
              <img
                src={post.image || emergencyImage}
                alt={post.title}
                style={{ objectPosition: getImageObjectPosition(post.image || emergencyImage) }}
              />
              <div>
                <span>{post.type}</span>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <time>{post.date}</time>
                <div className="public-actions">
                  <button
                    type="button"
                    className="download-btn"
                    onClick={() => downloadFile(post.image || emergencyImage, `${safeName(post.title) || 'photo'}.jpg`)}
                  >
                    Enregistrer image
                  </button>
                  <button type="button" className="download-btn" onClick={() => downloadPostText(post)}>
                    Enregistrer article
                  </button>
                  <button type="button" className="like-btn" onClick={() => toggleLike(post.id)}>
                    J aime ({likes[post.id] || 0})
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="album" className="posts">
        <div className="section-title">
          <h3>Album Photos</h3>
          <p>Moments de nos activites VPV</p>
        </div>
        <div className="album-grid">
          {albumPhotos.map((photo, index) => (
            <article key={`${photo.slice(0, 20)}-${index}`} className="album-item">
              <img
                src={photo}
                alt={`Album VPV ${index + 1}`}
                style={{ objectPosition: getImageObjectPosition(photo, `center ${22 + (index % 4) * 4}%`) }}
              />
              <button
                type="button"
                className="download-btn"
                onClick={() => downloadFile(photo, `vpv-album-${index + 1}.jpg`)}
              >
                Enregistrer
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h3>Contact VPV</h3>
        <div className="contact-grid">
          <article className="contact-card">
            <p className="contact-label">Institution</p>
            <p className="contact-value">Universite Chretienne Bilingue du Congo (UCBC)</p>
          </article>
          <article className="contact-card">
            <p className="contact-label">Email</p>
            <a className="contact-value" href="mailto:ucbcvpv@gmail.com">
              ucbcvpv@gmail.com
            </a>
          </article>
          <article className="contact-card">
            <p className="contact-label">WhatsApp</p>
            <a
              className="contact-whatsapp"
              href="https://wa.me/243963456721?text=Bonjour%20chers%20VPV%2C%20je%20vous%20contacte%20depuis%20le%20site%20officiel.%20Merci%20de%20me%20repondre."
              target="_blank"
              rel="noreferrer"
            >
              +243 963 456 721
            </a>
          </article>
        </div>
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
  const [editingPostId, setEditingPostId] = useState(null)
  const [posts, setPosts] = useState(starterPosts)
  const [albumPhotos, setAlbumPhotos] = useState(starterAlbum)
  const [form, setForm] = useState({
    type: 'activite',
    title: '',
    date: '',
    image: emergencyImage,
    content: ''
  })
  const [backupMessage, setBackupMessage] = useState('')

  function getImageObjectPosition(image, fallback = 'center 24%') {
    if (image === teamImage) return 'center 18%'
    if (image === patrolImage) return 'center 26%'
    if (image === emergencyImage) return 'center 22%'
    if (image === newsImage) return 'center 30%'
    return fallback
  }

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

  useEffect(() => {
    const savedAlbum = localStorage.getItem(albumStorageKey)
    if (savedAlbum) {
      try {
        setAlbumPhotos(JSON.parse(savedAlbum))
      } catch {
        setAlbumPhotos(starterAlbum)
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

  function persistPosts(nextPosts) {
    setPosts(nextPosts)
    localStorage.setItem(storageKey, JSON.stringify(nextPosts))
  }

  function persistAlbum(nextAlbum) {
    setAlbumPhotos(nextAlbum)
    localStorage.setItem(albumStorageKey, JSON.stringify(nextAlbum))
  }

  function fileToDataUrl(file) {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '')
      reader.readAsDataURL(file)
    })
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

  async function handleAlbumUpload(event) {
    const files = Array.from(event.target.files || [])
    if (!files.length) return
    const encoded = await Promise.all(files.map((file) => fileToDataUrl(file)))
    const cleanEncoded = encoded.filter(Boolean)
    const nextAlbum = [...cleanEncoded, ...albumPhotos]
    persistAlbum(nextAlbum)
    event.target.value = ''
  }

  function deleteAlbumPhoto(indexToDelete) {
    const nextAlbum = albumPhotos.filter((_, index) => index !== indexToDelete)
    persistAlbum(nextAlbum)
  }

  function exportData() {
    const payload = {
      exportedAt: new Date().toISOString(),
      posts,
      albumPhotos
    }
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json;charset=utf-8'
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'vpv-backup.json'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    setBackupMessage('Sauvegarde exportee avec succes.')
  }

  async function importData(event) {
    const file = event.target.files?.[0]
    if (!file) return
    const text = await file.text()
    try {
      const parsed = JSON.parse(text)
      if (!Array.isArray(parsed.posts) || !Array.isArray(parsed.albumPhotos)) {
        setBackupMessage('Fichier invalide. Import annule.')
        return
      }
      persistPosts(parsed.posts)
      persistAlbum(parsed.albumPhotos)
      setBackupMessage('Restauration terminee avec succes.')
    } catch {
      setBackupMessage('Erreur de lecture du fichier JSON.')
    } finally {
      event.target.value = ''
    }
  }

  function savePost(event) {
    event.preventDefault()
    if (!form.title.trim() || !form.date || !form.content.trim()) return

    const postPayload = {
      type: form.type,
      title: form.title.trim(),
      date: form.date,
      image: form.image,
      content: form.content.trim()
    }

    if (editingPostId) {
      const next = posts.map((post) =>
        post.id === editingPostId ? { ...post, ...postPayload } : post
      )
      persistPosts(next)
    } else {
      const newPost = {
        id: crypto.randomUUID(),
        ...postPayload
      }
      const next = [newPost, ...posts]
      persistPosts(next)
    }

    setEditingPostId(null)
    setForm({
      type: 'activite',
      title: '',
      date: '',
      image: emergencyImage,
      content: ''
    })
  }

  function deletePost(postId) {
    const next = posts.filter((post) => post.id !== postId)
    persistPosts(next)
    if (editingPostId === postId) {
      setEditingPostId(null)
      setForm({
        type: 'activite',
        title: '',
        date: '',
        image: emergencyImage,
        content: ''
      })
    }
  }

  function editPost(post) {
    setEditingPostId(post.id)
    setForm({
      type: post.type,
      title: post.title,
      date: post.date,
      image: post.image || emergencyImage,
      content: post.content
    })
  }

  function cancelEdit() {
    setEditingPostId(null)
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
          <h3>{editingPostId ? 'Editer la publication' : 'Nouvelle publication'}</h3>
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
          <img
            className="preview-image"
            src={form.image}
            alt="Apercu de l image selectionnee"
            style={{ objectPosition: getImageObjectPosition(form.image) }}
          />
          <label>
            Contenu
            <textarea
              name="content"
              value={form.content}
              onChange={updateField}
              placeholder="Decrivez l activite ou l article"
            />
          </label>
          <button type="submit">{editingPostId ? 'Enregistrer les modifications' : 'Publier'}</button>
          {editingPostId ? (
            <button type="button" className="cancel-btn" onClick={cancelEdit}>
              Annuler la modification
            </button>
          ) : null}
        </form>

        <div className="admin-right">
          <section className="admin-list">
            <h3>Sauvegarde / Restauration</h3>
            <div className="backup-actions">
              <button type="button" className="edit-btn" onClick={exportData}>
                Exporter les donnees
              </button>
              <label className="import-btn">
                Importer un backup
                <input type="file" accept="application/json" onChange={importData} />
              </label>
            </div>
            {backupMessage ? <p className="backup-message">{backupMessage}</p> : null}
          </section>

          <section className="admin-list">
            <h3>Publications enregistrees</h3>
            {posts.map((post) => (
              <article key={post.id} className="admin-post-item">
                <img
                  src={post.image || emergencyImage}
                  alt={post.title}
                  style={{ objectPosition: getImageObjectPosition(post.image || emergencyImage) }}
                />
                <div>
                  <strong>{post.title}</strong>
                  <p>{post.type} - {post.date}</p>
                  <p>{post.content}</p>
                  <div className="admin-actions">
                    <button type="button" className="edit-btn" onClick={() => editPost(post)}>
                      Editer
                    </button>
                    <button type="button" className="delete-btn" onClick={() => deletePost(post.id)}>
                      Supprimer
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="admin-list">
            <h3>Album Photos</h3>
            <label className="album-upload-label">
              Ajouter des photos dans l album
              <input type="file" accept="image/*" multiple onChange={handleAlbumUpload} />
            </label>
            <div className="admin-album-grid">
              {albumPhotos.map((photo, index) => (
                <article key={`${photo.slice(0, 20)}-${index}`} className="admin-album-item">
                  <img
                    src={photo}
                    alt={`Photo album ${index + 1}`}
                    style={{ objectPosition: getImageObjectPosition(photo, `center ${22 + (index % 4) * 4}%`) }}
                  />
                  <button type="button" className="delete-btn" onClick={() => deleteAlbumPhoto(index)}>
                    Supprimer
                  </button>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
