'use client'
import {NextUIProvider} from "@nextui-org/react";
import { useState } from "react";
import React from "react";
import Navbar from './components/navbar'
import VideoPlayer from './components/video player';
import Listebox from './components/listbox';
import Buton from './components/button';


const data = require('../data.json');

export default function Home() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set());
  
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );
  let series = Array.from(selectedKeys);
  
  let [episodes, setepisode] = useState(data.dar_lekhle3a.episodes[0])
  
  const all=['chouflihal', 'dar_lekhle3a', 'bolice hala 3adia', 'supperet azaiez', 'khotab 3al beb', 'loutile']
  return (
    <NextUIProvider>
    <Navbar/>
    <main className="flex flex-col items-center justify-between min-w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex h-screen items-center justify-center">
        <div className='flex min-h-screen flex-col items-center justify-between p-24'>
          <VideoPlayer link={episodes}/>
          <Buton all={all} data={data} selectedKeys={selectedKeys} setepisode={setepisode} series={series}/>
        </div>
        <Listebox selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys}/>
      </div>
    </main>
    </NextUIProvider>
  )
}
