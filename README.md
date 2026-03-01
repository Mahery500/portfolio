# Portfolio Professionnel - Mahery Ramanamiantra

Portfolio one-page moderne et responsive, développé en HTML, CSS et JavaScript pur (sans framework externe).

## 🎨 Caractéristiques

- **Design Dark Mode** avec accent vert cyber
- **100% Responsive** (Desktop, tablette, mobile)
- **Animations fluides** et professionnelles
- **Code propre** et bien structuré
- **Optimisé** pour les performances
- **Prêt pour GitHub Pages**

## 📁 Structure du projet

```
portfolio/
│
├── index.html          # Structure HTML du portfolio
├── style.css           # Styles et animations CSS
├── script.js           # Interactivité JavaScript
└── README.md           # Documentation
```

## 🚀 Déploiement sur GitHub Pages

### Méthode 1 : Via l'interface GitHub

1. Créez un nouveau repository sur GitHub
2. Uploadez les fichiers `index.html`, `style.css`, et `script.js`
3. Allez dans **Settings** > **Pages**
4. Sous **Source**, sélectionnez la branche `main` et le dossier `/ (root)`
5. Cliquez sur **Save**
6. Votre site sera disponible à : `https://votre-username.github.io/nom-du-repo/`

### Méthode 2 : Via la ligne de commande

```bash
# Cloner ou initialiser un repository
git init
git add .
git commit -m "Initial commit - Portfolio"

# Ajouter l'origine GitHub
git remote add origin https://github.com/votre-username/nom-du-repo.git

# Pousser vers GitHub
git branch -M main
git push -u origin main

# Activer GitHub Pages via les paramètres du repository
```

## 🛠️ Personnalisation

### Modifier les informations personnelles

Dans `index.html`, modifiez les sections suivantes :

- **Hero Section** : Nom, titre, description
- **À propos** : Formation, expertise, statistiques
- **Compétences** : Technologies, niveaux (dans `style`)
- **Projets** : Descriptions, technologies utilisées
- **Contact** : Email, téléphone

### Modifier les couleurs

Dans `style.css`, variables CSS à personnaliser :

```css
:root {
    --accent: #00ff88;        /* Couleur principale */
    --accent-dark: #00cc6a;   /* Couleur foncée */
    --accent-light: #66ffbb;  /* Couleur claire */
}
```

Pour un thème bleu électrique :
```css
:root {
    --accent: #00d4ff;
    --accent-dark: #00a3cc;
    --accent-light: #66e0ff;
}
```

### Ajouter un projet

Dans `index.html`, dans la section projets, dupliquez et modifiez :

```html
<div class="project-card">
    <div class="project-header">
        <div class="project-icon">
            <!-- Icône SVG -->
        </div>
        <h3>Nom du projet</h3>
    </div>
    <p class="project-description">Description...</p>
    <div class="project-features">
        <h4>Fonctionnalités principales :</h4>
        <ul>
            <li>Fonctionnalité 1</li>
            <!-- ... -->
        </ul>
    </div>
    <div class="project-tech">
        <span class="tech-tag">Tech1</span>
        <!-- ... -->
    </div>
</div>
```

### Ajouter une compétence

Dans `index.html`, dans une catégorie de compétences :

```html
<div class="skill-item">
    <span class="skill-name">Nouvelle compétence</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

## 📱 Responsive

Le portfolio est optimisé pour tous les appareils :

- **Desktop** : Layout en grille, animations complètes
- **Tablette** (≤ 968px) : Grille adaptée, sections empilées
- **Mobile** (≤ 768px) : Menu burger, layout vertical
- **Petit mobile** (≤ 480px) : Textes et espacements réduits

## ⚡ Performances

- **Pas de dépendances externes** : Chargement ultra-rapide
- **CSS optimisé** : Animations GPU-accelerated
- **JavaScript léger** : Pas de librairies lourdes
- **Images optimisées** : Utilisation de SVG pour les icônes

## 🎯 Fonctionnalités JavaScript

- Menu burger responsive
- Smooth scroll
- Animations au scroll (Intersection Observer)
- Animation des barres de compétences
- Effet parallaxe léger
- Détection de la section active
- Animation de typing pour le code
- Compteur animé pour les statistiques

## 🔧 Support navigateurs

- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)
- Navigateurs mobiles modernes

## 📝 Licence

Ce portfolio est libre d'utilisation pour vos projets personnels.

## 👤 Auteur

**Manalimbinintsoa Mahery Princy Ramanamiantra**

- Email : ramanamiantramahery@gmail.com
- Téléphone : +261 38 91 04 534
- Diplôme : Licence en Informatique de Gestion
- Spécialité : Développement Web

---

Développé avec ❤️ et ☕
