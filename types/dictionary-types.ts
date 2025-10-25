import { JSX } from "react";

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

export interface AboutType {
  title: string;
  description: string;
  frontend: {
    title: string;
    subtitle: string;
  };
  backend: {
    title: string;
    subtitle: string;
  };
}

export interface ProjectsSectionType {
  title: string;
  subtitle: string;

  Projects: {
    id: number;
    title: string;
    description: string;
    category: string;
    technologies: string[];
  }[];
}

export interface ContactType {
  title: string;
  form: {
    lastName: string;
    firstName: string;
    email: string;
    message: string;
    terms: string;
    submit: string;
  };
  office: {
    title: string;
    subtitle: string;
    address: string;
  };
  email: {
    title: string;
    description: string;
  };
}
