import React from "react";
import { BlueButton } from "@/components/Button";
import Link from "next/link";

export default function Page1() {
  return (
    <div>
      <BlueButton>BLUE BUTTON</BlueButton>
      <Link href="/page2">GO TO PAGE 2</Link>
    </div>
  );
}
