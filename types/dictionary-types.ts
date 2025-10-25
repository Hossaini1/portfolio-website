//   export interface LanguagesType {
//     en: string;
//     de: string;
//     fa: string;
//   };

// export interface NavType {
//   home: string;
//   about: string;
//   projects: string;
//   contact: string;
//   blogs: string;
// }

export interface NavAndLanguagesType {
  Languages: {
    en: string;
    de: string;
    fa: string;
  };

  Nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    blogs: string;

    MegaMenu: {
      html: string;
      css: string;
      javascript: string;
      git: string;
      react: string;
      nextjs: string;
      tailwind: string;
      bootstrap: string;
      sass: string;
      nodejs: string;
      mongodb: string;
      php: string;
      laravel: string;
      sql: string;
      Descriptions: {
        html: string;
        css: string;
        javascript: string;
        git: string;
        react: string;
        nextjs: string;
        tailwind: string;
        bootstrap: string;
        sass: string;
        nodejs: string;
        mongodb: string;
        php: string;
        laravel: string;
        sql: string;
      };
    };
  };
}

export interface HeroType {
  name: string;
  title: string;
  description: string;
  btn: string;
  Stats: {
    projects: {
      count: string;
      label: string;
    };
    technologies: {
      count: string;
      label: string;
    };
    experience: {
      count: string;
      label: string;
    };
  };
}
