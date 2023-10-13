# Next.js, NextUI, MongoDB and Next-PWA Template

This starter template offers a robust foundation for developing applications using Next.js 13, structured with a pages directory, featuring NextUI (v2) for seamless user interface design, MongoDB for data management, and Next-PWA for Progressive Web App (PWA) capabilities.

## Technologies Used

This template leverages several technologies and tools to help you kickstart your development:

- [Next.js 13](https://nextjs.org/docs/getting-started): A popular React framework for building fast, modern web applications.

- [NextUI](https://nextui.org): A UI framework that provides a wide range of pre-designed components for building elegant and responsive user interfaces.

- [Tailwind CSS](https://tailwindcss.com): A utility-first CSS framework that makes it easy to create custom styles and designs.

- [Tailwind Variants](https://tailwind-variants.org): An extension for Tailwind CSS to enable more control over styling variants.

- [TypeScript](https://www.typescriptlang.org): A statically typed superset of JavaScript for improved code quality and developer productivity.

- [Framer Motion](https://www.framer.com/motion): A popular animation library for adding smooth and interactive animations to your web application.

- [next-themes](https://github.com/pacocoursey/next-themes): A tool for adding theming support to your Next.js applications.

- [MongoDB](https://www.npmjs.com/package/mongodb): A Node.js driver for MongoDB, which allows you to connect and interact with MongoDB databases, providing data persistence for your application.

- [Next-PWA](https://www.npmjs.com/package/next-pwa): A package to configure Progressive Web App (PWA) features in your Next.js application, enabling better offline functionality and improved user experience.

## Getting Started

To use this template and create a new project, follow these steps:

1. Clone this repository into a new directory with the following command:

```bash
git  clone  https://github.com/xi-Rick/nextjs-pages-template.git  "project-name"
```

2. Install the required dependencies by running:

```
cd "project-name"
npm install
# or
yarn install
```

## Configuration

### Set up a MongoDB database

Set up a MongoDB database either locally or with [MongoDB Atlas for free](https://mongodb.com/atlas).

### Set up environment variables

Copy the `env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp  .env.local.example  .env.local
```

Set each variable on `.env.local`:

- `MONGODB_URI` - Your MongoDB connection string. If you are using [MongoDB Atlas](https://mongodb.com/atlas) you can find this by clicking the "Connect" button for your cluster.

### Run Next.js in development mode

```bash
npm  run  dev
# or
yarn  dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

You will either see a message stating "You are connected to MongoDB" or "You are NOT connected to MongoDB". Ensure that you have provided the correct `MONGODB_URI` environment variable.

When you are successfully connected, you can refer to the [MongoDB Node.js Driver docs](https://mongodb.github.io/node-mongodb-native/3.4/tutorials/collections/) for further instructions on how to query your database.

## Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/xi-Rick/nextjs-pages-template) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/xi-Rick/nextjs-pages-template)

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-pages-template/blob/main/LICENSE).

![license](https://img.shields.io/npm/l/next-pwa.svg)
