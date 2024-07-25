import React from "react";
import { RedButton } from "@/components/Button";
import Link from "next/link";

export default function Page1() {
  return (
    <div>
      <RedButton>RED BUTTON</RedButton>
      <Link href="/page1">GO TO PAGE 1</Link>
    </div>
  );
}
