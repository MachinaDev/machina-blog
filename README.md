<div align="center">
  <img alt="Logo" src="https://github.com/MachinaDev/machina-blog/blob/master/public/static/images/logo.png" width="150px" height="150px"/>
</div>

<h1 align="center">
  Machina Blog - <em>Un peu de moi dans ce Multivers</em>
</h1>

<p align="center">
  Bienvenue sur mon blog <a href="http://www.machina-dev.com" target="_blank">ici</a> façonné avec <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> et fièrement propulsé par <a href="https://www.vercel.com/" target="_blank">Vercel</a>.
</p>

<p align="center">
  Fortemment inspiré par le blog de  <a href="https://github.com/timlrx" target="_blank">Timothy Lin</a> que l'on peut trouver <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog" target="_blank">ici</a>. Le site de démonstration peut être trouvé <a href="https://tailwind-nextjs-starter-blog.vercel.app/" target="_blank">là</a>.
</p>

<div align="center">

<a href="http://www.machina-dev.com" target="blank" >![View Demo](https://img.shields.io/badge/-View%20Demo%20-orange?color=%23DE1D8D&style=for-the-badge)</a>
<a href="https://github.com/MachinaDev/machina-blog/issues">![Report Bug](https://img.shields.io/badge/-Report%20Bug%20-orange?color=%23ee0701&style=for-the-badge)</a>
<a href="https://github.com/MachinaDev/machina-blog/issues/new?assignees=&labels=&template=feature_request.md&title=">![Request Feature](https://img.shields.io/badge/-Request%20Feature%20-orange?color=%230e8a16&style=for-the-badge)</a>
<a href="https://github.com/MachinaDev/machina-blog/fork">![Fork](https://img.shields.io/github/forks/MachinaDev/machina-blog?color=%23bfe5bf&style=for-the-badge)</a>
<img src="https://img.shields.io/github/stars/MachinaDev/machina-blog?color=darkgreen&style=for-the-badge">

</div>

![demo](https://github.com/MachinaDev/machina-blog/blob/master/public/static/images/demo.png)

<div align="center">

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

</div>

## 🛠 Installation & Mise en place

1. Cloner le repository

   ```sh
   git clone git@github.com:MachinaDev/machina-blog.git
   ```

2. Positionnez vous dans le dossier cloné

   ```sh
   cd machina-blog
   ```

3. Installer les dépendances

   ```sh
   yarn install
   ```

4. Créer un fichier de variables d'environnement `.env.local` avec les données présentes dans le fichier `.env.example`

   ```txt
   NEXT_PUBLIC_GISCUS_REPO=
   NEXT_PUBLIC_GISCUS_REPOSITORY_ID=
   NEXT_PUBLIC_GISCUS_CATEGORY=
   NEXT_PUBLIC_GISCUS_CATEGORY_ID=
   EMAILOCTOPUS_API_URL=
   EMAILOCTOPUS_API_KEY=
   EMAILOCTOPUS_LIST_ID=
   DATABASE_URL=
   OAUTH_CLIENT_KEY=
   OAUTH_CLIENT_SECRET=
   NEXTAUTH_URL=
   SECRET=
   TWITTER_API_KEY=
   TWITTER_BEARER_TOKEN=
   SPOTIFY_CLIENT_ID =
   SPOTIFY_CLIENT_SECRET =
   SPOTIFY_REFRESH_TOKEN =
   SPOTIFY_REDIRECT_URI =
   ```

5. Initialiser la base de données avec l'ORM Prisma
   `npx prisma db push`

6. Démarrer le serveur de développement

   ```sh
   yarn dev
   ```

## 🏗️ Construire et Lancer le site en production

1. Génerer un site statique de production

   ```sh
   yarn build
   ```

2. Prévisualiser le site lorsqu'il sera déployé

   ```sh
   yarn serve
   ```

Ouvrir la page [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 👨‍🎨️ Customization

1. Personnaliser le fichier `data/siteMetadata.js` (Les informations du site).
2. Modifier les 'content security policy' dans le fichier `next.config.js` si vous voulez utiliser un outil analytique particulier ou une solution de commentaire autre que Giscus.
3. Personnaliser le fichier `authors/default.md` (Auteur principal).
4. Modifier le fichier `projectsData.js`.
5. Modifier le fichier `headerNavLinks.js` pour customiser les liens de navigation.
6. Ajouter des articles pour le blog.

## 📝 Fichiers à customiser

- `data/siteMetadata.js` - contient la majorité des informations du site qui doivent être modifier pour les besoins de l'utilisateur.

- `data/authors/default.md` - Les informations par défault de l'auteur du site (obligatoire). D'autres auteurs peuvent être ajouter dans des fichiers du dossier `data/authors`.

- `data/projectsData.js` - Les données utilisées pour générer des cartes sur la page de projet.

- `data/headerNavLinks.js` - Lien de navigation.

- `data/logo.svg` - Remplacer par votre logo.

- `data/blog` - Remplacer par vos propres articles.

- `public/static` - Stocker vos images et favicons.

- `tailwind.config.js` et `css/tailwind.css` - contient la feuille de style de TailwindCSS qui peut être modifier pour changer le style global du site.

- `css/prism.css` - contrôle le style des blocs de code du site internet. N'hésitez pas à changer le thème Prism e.g. [prism themes](https://github.com/PrismJS/prism-themes).

- `components/social-icons` - Pour ajouter d'autres icônes, copier simplement un fichier SVG depuis [Simple Icons](https://simpleicons.org/) et l'indexer dans le fichier `index.js`. On peut aussi utiliser [heroicons](https://heroicons.com/).

- `components/MDXComponents.js` - Passer directement votre code JSX ou des composants React en le spécifiant dans ce fichier. On peut ensuite les appeler directement dans un fichier `.mdx` ou `.md`. Par défault, un lien custom ou un composant d'image est passé.

- `layouts` - Template général utilisé dans les pages du site.

- `pages` - Système de navigation du site. Rendez-vous sur [Next.js documentation](https://nextjs.org/docs) pour davantage d'information.

- `next.config.js` - Fichier de configuration relative au Framework NextJS. Vous pourriez avoir besoin de modifier le 'Content Security Policy' si vous voulez charger un script ou des images depuis d'autres domaines.

## 🔨 Composer un article

Lancer `node ./scripts/compose.js` pour générer un nouveau post.
Suivez le prompt pour générer un nouveau post avec un header _frontmatter_ déjà rempli.

## 📚 Stack Technique

| Outils     | Lien                                                      |
| ---------- | --------------------------------------------------------- |
| Framework  | [Next.js](https://nextjs.org/)                            |
| ORM        | [Prisma](https://prisma.io/)                              |
| Database   | [Digital Ocean](https://www.digitalocean.com/)            |
| Deployment | [Vercel](https://vercel.com)                              |
| Styling    | [Tailwindcss](https://tailwindcss.com/)                   |
| Comment    | [Tailwindcss](https://tailwindcss.com/)                   |
| Newsletter | [Email Octopus](https://emailoctopus.com/)                |
| Favicon    | [realfavicongenerator](https://realfavicongenerator.net/) |
| Content    | [MDX](https://mdxjs.com/)                                 |

## 📈 Stats

<img src="https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fwww.machina-dev.com"> 
<img src="https://img.shields.io/github/repo-size/MachinaDev/machina-blog?style=for-the-badge&color=darkgreen" /> 
<img src="https://img.shields.io/github/languages/top/MachinaDev/machina-blog?style=for-the-badge" /> <img src="https://img.shields.io/github/commit-activity/m/MachinaDev/machina-blog?style=for-the-badge&color=orange" /> 
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"/>

## 🪜 Project structure

```bash
📦 root
├── 🗂️ components             # Fichiers React pour personnaliser les composants du site
├── 🗂️ css                    # Fichiers CSS pour Tailwind et Prism
├── 🗂️ data                   # Fichiers pour modifier le contenu des pages
│ ├── 🗂️ authors              # Fichiers Markdown pour les auteurs de blog
│ ├── 🗂️ blog                 # Fichiers Markdown pour les articles de blog
│ └── 🗂️ snippets             # Fichiers Markdown pour les extraits de code
├── 🗂️ layouts                # Modèles de pages
├── 🗂️ lib                    # Modules non React
├── 🗂️ pages                  # Fichiers de page pour le Blog
├── 🗂️ public                 # Fichiers statiques pour les images, rss et actifs
│ ├── 🗂️ static               # Contient des images, des favicons et d'autres actifs
│ │ ├── 🗂️ favicons            # Fichiers favicon
│ │ └── 🗂️ images             # Fichiers images
│ ├── 📝 feed.xml             # Flux RSS
│ ├── 📝 robots.txt           # Aide les robots à explorer le blog
│ └── 📝 sitemap.xml          # Sitemap
├── 🗂️ scripts                # Scripts à exécuter pour différentes tâches courantes
├── 📝 tailwind.config.js     # Contient une feuille de style tailwind pour changer le style visuel
└── 📝 next.config.js         # configuration liée à Next.js
```

## 📊 Performance du site selon Google Lighthouse

![Google Lighthouse Performance Metrics](https://github.com/MachinaDev/machina-blog/blob/master/public/static/images/Google%20Lighthouse%20Performance%20Metrics.png)

## 🚀 Déploiement

**Vercel**
La solution la plus facile pour déployer le template est d'utiliser [Vercel Platform](https://vercel.com) des créateurs de Next.js. Regardez la documentation sur [Next.js deployment documentation](https://nextjs.org/docs/deployment) pour davantage de détails.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/MachinaDev/machina-blog)
