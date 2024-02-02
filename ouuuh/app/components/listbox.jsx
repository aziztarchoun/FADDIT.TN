import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";

export default function Listebox({selectedKeys, setSelectedKeys}){
    
    return (
    <div className="flex flex-col gap-2">     
    <ListboxWrapper>
      <Listbox 
        aria-label="Multiple selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <ListboxItem key="chouflihal">choufli hal</ListboxItem>
        <ListboxItem key="dar_lekhle3a">dar lekhle3a</ListboxItem>
        <ListboxItem key="bolice hala 3adia">bolice hala 3adia</ListboxItem>
        <ListboxItem key="supperet azaiez">supperet azaiez</ListboxItem>
        <ListboxItem key="khotab 3al beb">khoteb 3al beb</ListboxItem>
        <ListboxItem key="loutile">loutile</ListboxItem>
      </Listbox>
    </ListboxWrapper>
  </div>
  )
}