"use client"
import { useState } from "react"
export default function VideoPlayer({link}) {
  return (
    <div className="flex justify-center items-center bg-white w-600 h-350 rounded-lg shadow-md box-content p-4 drop-shadow-md">
        <iframe width="560" height="315" src={`${link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}