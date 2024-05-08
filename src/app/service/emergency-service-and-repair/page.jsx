"use client";

import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  const showClose = true;

  return (
    <Suspense fallback={<div>test</div>}>
      <div>
        <p>not intercepted</p>
        <Link href="/">
          <button style={{backgroundColor: "blue", color: "white", padding: "5px", margin: "20px"}}>home</button>
        </Link>
      </div>
    </Suspense>
  );
}
