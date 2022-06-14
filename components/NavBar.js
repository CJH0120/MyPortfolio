import Link from "next/link";
import Router from "next/router";

import { useRouter } from "next/router";

export default function NavBar() {
  return (
    <nav>
      {/* <Link href="/"> 
           <a className={Router.pathname === "/"?"active":""}>Home</a>
           </Link>
        
            <Link href="/blog" > 
            <a className={Router.pathname === "/blog"?"active":""}>Blog</a>
            </Link> */}

      <style jsx>
        {`
          .active {
            color: blue;
          }
          nav {
            background-color: tomato;
            text-align: center;
          }
          a {
            text-decoration: none;
          }
        `}
      </style>
    </nav>
  );
}
