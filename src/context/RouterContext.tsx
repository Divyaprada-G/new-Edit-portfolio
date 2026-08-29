import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';
import { RoutePath } from '../types';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string, options?: { replace?: boolean }) => void;
  eventId?: string;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
  eventId: undefined,
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path || '/';
    }
    return '/';
  });

  const [, startTransition] = useTransition();

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string, options?: { replace?: boolean }) => {
    if (to === currentPath) return;

    startTransition(() => {
      if (options?.replace) {
        window.history.replaceState({}, '', to);
      } else {
        window.history.pushState({}, '', to);
      }
      setCurrentPath(to);
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  };

  // Extract dynamic eventId if route is /field-log/:eventId
  let eventId: string | undefined = undefined;
  if (currentPath.startsWith('/field-log/') && currentPath !== '/field-log') {
    eventId = currentPath.replace('/field-log/', '').split('/')[0];
  }

  return (
    <RouterContext.Provider value={{ currentPath, navigate, eventId }}>
      {children}
    </RouterContext.Provider>
  );
};

export const NavLink: React.FC<{
  to: RoutePath | string;
  className?: string | ((props: { isActive: boolean }) => string);
  children: React.ReactNode;
  id?: string;
  onClick?: () => void;
}> = ({ to, className, children, id, onClick }) => {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));

  const computedClassName = typeof className === 'function' ? className({ isActive }) : className;

  return (
    <a
      id={id}
      href={to}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        navigate(to);
      }}
      className={computedClassName}
    >
      {children}
    </a>
  );
};
