import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type SmartLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
};

const isExternal = (href: string) => /^https?:\/\//.test(href);
const isNative = (href: string) => /^(#|mailto:|tel:)/.test(href);

/**
 * Bira pravi element za link:
 * spoljne adrese se otvaraju u novom tabu, sidra/mail/tel su obični <a>, a rute idu kroz Next <Link>.
 */
export function SmartLink({ href, children, ...props }: SmartLinkProps) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        <span className="visually-hidden"> (otvara se u novom prozoru)</span>
      </a>
    );
  }

  if (isNative(href)) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
