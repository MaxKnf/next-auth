import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
};
