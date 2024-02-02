


export default function Buton({all,data,selectedKeys,setepisode,series}) {
    function changeepisode(){
        if (selectedKeys.size == 0) {
          let a =Math.floor(Math.random() * all.length)
          let i =Math.floor(Math.random() * data[all[a]].episodes.length);
          setepisode(data[all[a]].episodes[i])
    
        } else {
        let a =Math.floor(Math.random() * series.length)
        let i =Math.floor(Math.random() * data[series[a]].episodes.length);
        setepisode(data[series[a]].episodes[i])
      }}
    
    return (
        <button type="button" onClick={changeepisode} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-White hover:bg-zinc-900">
            faddit
          </button>
    )
}