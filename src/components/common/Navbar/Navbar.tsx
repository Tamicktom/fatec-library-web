"use client";

type Props = {}

export default function Navbar({ }: Props) {

  return (
    <div className="w-full grid grid-cols-12 grid-flow-row border border-gray-300">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </div>
  )
}