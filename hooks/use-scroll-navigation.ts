'use client';

import { useState, useEffect, useCallback } from 'react';

export function useScrollNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;

    // Sichtbarkeit bei Scroll prüfen
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver für aktive Sektion
    const sections = ['home', 'about', 'projects', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5, // Sektion wird aktiv, wenn 50 % sichtbar
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Scroll-Funktionen mit requestAnimationFrame → vermeidet Forced Reflow
  const scrollToTop = useCallback(() => {
    if (typeof window === 'undefined') return;
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const element = document.getElementById(sectionId);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);

  const scrollToBottom = useCallback(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    requestAnimationFrame(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });
  }, []);

  return {
    isVisible,
    activeSection,
    scrollToTop,
    scrollToSection,
    scrollToBottom,
  };
}
