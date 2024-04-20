"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  children,
  ...props
}: LinkProps & {
  children?: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={pathname === props.href ? "font-[700]" : "text-gray"}
      {...props}
    >
      {children}
      {/* {isActive && (
        <div className="bg-black pt-[2px] h-[4px] w-full rounded-[30px]" />
      )} */}
    </Link>
  );
}
