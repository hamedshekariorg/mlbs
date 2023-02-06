import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LinkComponent = ({ children, lang, skipLocaleHandling, ...rest }) => {
  const router = useRouter();
  const locale = lang || rest.locale || router.query.locale || '';

  let href = typeof rest?.href === 'string' ? rest?.href : router.asPath;

  if (href?.indexOf('http') === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href =
      href && !lang
        ? `/${locale}${href}`
        : router.pathname.replace('[locale]', String(locale));
  }

  return (
    <>
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    </>
  );
};

export default LinkComponent;
